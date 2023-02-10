import { useEffect, useState } from "react";
// import { pizzas } from "../../data";
import { PizzaItem } from "../pizza-item";
import { Loader } from "../loader";
import { useDispatch, useSelector } from "react-redux";
import { pizzasActions } from "../../store";
import axios from "axios";
import { API_URL } from "../../utils";
import { categorys } from "../../data";

export const PizzaList = () => {
  const { pizzas, isLoading, categoryActive } = useSelector((item) => item);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      try {
        dispatch(pizzasActions.setIsLoading(true));

        const { data } = await axios(API_URL);
        dispatch(pizzasActions.setPizzas(data));
      } catch (err) {
        console.log(err);
      } finally {
        dispatch(pizzasActions.setIsLoading(false));
      }
    })();

    window.scrollTo(0, 0);
  }, [dispatch]);

  return (
    <div className="mt-5">
      <h2 className="text-3xl font-bold mb-7">
        {categorys[categoryActive]} пиццы
      </h2>

      <ul className="grid grid-cols-1 md:grid-cols-2 md:gap-16 lg:grid-cols-3 xl:grid-cols-4 ">
        {!isLoading
          ? pizzas?.map((pizza) => <PizzaItem key={pizza.id} {...pizza} />)
          : [...new Array(10)].map((_, index) => (
              <li key={index} style={{ marginBottom: 50 }}>
                <Loader />
              </li>
            ))}
      </ul>
    </div>
  );
};
