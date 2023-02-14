import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { pizzasActions } from "../../store";
import { categorys } from "../../data";
import { API_URL } from "../../utils";
import { Loader } from "../loader";
import { PizzaItem } from "../pizza-item";
import { Pagination } from "antd";
import axios from "axios";

import styles from "./pizza-list.module.scss";
import qs from "qs";
import { useNavigate } from "react-router-dom";

export const PizzaList = () => {
  const isSearch = useRef(false);
  const isMount = useRef(false);

  const { pizzas, isLoading, categoryActive, sorting, pageNum } = useSelector(
    (item) => item
  );
  const dispatch = useDispatch();

  const [err, setErr] = useState("");

  const onChangePage = (page) => {
    dispatch(pizzasActions.setPageNum(page));
  };

  const navigate = useNavigate();
  const total = categoryActive === 0 ? 30 : 10;

  const fetchApi = () => {
    const category = +categoryActive !== 0 ? "&category=" + categoryActive : "";
    const sort = sorting !== "" ? `&sortby=${sorting}&order=desc` : "";
    const page =
      categoryActive !== 0 ? `&page=${1}&limit=4` : `&page=${pageNum}&limit=4`;

    (async () => {
      try {
        dispatch(pizzasActions.setIsLoading(true));

        const { data } = await axios(API_URL + "?" + page + category + sort);
        dispatch(pizzasActions.setPizzas(data));
      } catch (err) {
        console.log(err);
        setErr(err.message);
      } finally {
        dispatch(pizzasActions.setIsLoading(false));
      }
    })();
  };

  useEffect(() => {
    if (isMount.current) {
      const queryStr = qs.stringify({
        categoryActive,
        sorting,
        pageNum,
      });

      navigate(`?${queryStr}`);
    }
    isMount.current = true;
  }, [categoryActive, sorting, pageNum, dispatch]);

  useEffect(() => {
    if (window.location.search) {
      const parse = qs.parse(window.location.search.substring(1));
      dispatch(pizzasActions.setParapms({ ...parse }));
      isSearch.current = true;
    }
  }, []);

  useEffect(() => {
    if (!isSearch.current) {
      fetchApi();
    }

    isSearch.current = false;
  }, [categoryActive, sorting, pageNum, dispatch]);

  return (
    <div className={styles.pizzaContent}>
      <h2 className={styles.title}>{categorys[categoryActive]} пиццы</h2>

      {err == "" ? (
        <ul className={styles.pizzasList}>
          {!isLoading
            ? pizzas?.map((pizza) => <PizzaItem key={pizza.id} {...pizza} />)
            : [...new Array(4)].map((_, index) => (
                <li key={index} style={{ marginBottom: 50 }}>
                  <Loader />
                </li>
              ))}
        </ul>
      ) : (
        <div className="h-60 flex justify-center items-center text-3xl">
          Ups 😥
          {err}
        </div>
      )}
      <div className={styles.pagination}>
        <Pagination current={pageNum} onChange={onChangePage} total={total} />
      </div>
    </div>
  );
};
