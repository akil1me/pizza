import { useEffect, useState } from "react";
// import { pizzas } from "../../data";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { categorys } from "../../data";
import { pizzasActions } from "../../store";
import { API_URL } from "../../utils";
import { Loader } from "../loader";
import { PizzaItem } from "../pizza-item";
import { Pagination } from "antd";

export const PizzaList = () => {
  const { pizzas, isLoading, categoryActive, sorting } = useSelector(
    (item) => item
  );
  const dispatch = useDispatch();

  const [pageNum, setPageNum] = useState(1);
  const onChangePage = (page) => {
    setPageNum(page);
  };

  const total = categoryActive === 0 ? 30 : 10;

  useEffect(() => {
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
      } finally {
        dispatch(pizzasActions.setIsLoading(false));
      }
    })();
  }, [categoryActive, sorting, pageNum, dispatch]);

  return (
    <div className="mt-5">
      <h2 className="text-3xl font-bold mb-7">
        {categorys[categoryActive]} пиццы
      </h2>

      <ul className="grid grid-cols-1 md:grid-cols-2 md:gap-16 lg:grid-cols-3 xl:grid-cols-4 ">
        {!isLoading
          ? pizzas?.map((pizza) => <PizzaItem key={pizza.id} {...pizza} />)
          : [...new Array(4)].map((_, index) => (
              <li key={index} style={{ marginBottom: 50 }}>
                <Loader />
              </li>
            ))}
      </ul>

      <div className="text-center mt-4">
        <Pagination current={pageNum} onChange={onChangePage} total={total} />
      </div>
    </div>
  );
};
