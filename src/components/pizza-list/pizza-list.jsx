import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Pagination } from "antd";
import qs from "qs";
import { categorys } from "../../data";
import { fetchPizzas, filterActions } from "../../store";
import { Loader } from "../loader";

import { PizzaItem } from "../pizza-item";
import styles from "./pizza-list.module.scss";

export const PizzaList = () => {
  const { categoryActive, sorting, pageNum } = useSelector(
    (item) => item.filter
  );
  const { pizzas, isLoading, status } = useSelector((item) => item.pizzas);

  const isMount = useRef(false);

  const dispatch = useDispatch();

  const onChangePage = (page) => {
    dispatch(filterActions.setPageNum(page));
  };

  const navigate = useNavigate();
  const total = categoryActive === 0 ? 30 : 10;

  useEffect(() => {
    if (window.location.search !== "") {
      const parse = qs.parse(window.location.search.substring(1));
      dispatch(filterActions.setParapms({ ...parse }));
    }
  }, []);

  useEffect(() => {
    const category = +categoryActive !== 0 ? "&category=" + categoryActive : "";
    const sort = sorting !== "" ? `&sortby=${sorting}&order=desc` : "";
    const page =
      categoryActive !== 0 ? `&page=${1}&limit=4` : `&page=${pageNum}&limit=4`;
    dispatch(
      fetchPizzas({
        category,
        sort,
        page,
      })
    );
  }, [categoryActive, sorting, pageNum, dispatch]);

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
  return (
    <div className={styles.pizzaContent}>
      <h2 className={styles.title}>{categorys[categoryActive]} пиццы</h2>

      {status === "" ? (
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
          {status}
        </div>
      )}
      <div className={styles.pagination}>
        <Pagination current={pageNum} onChange={onChangePage} total={total} />
      </div>
    </div>
  );
};
