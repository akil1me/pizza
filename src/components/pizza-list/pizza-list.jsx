import { useEffect, useState } from "react";
// import { pizzas } from "../../data";
import { PizzaItem } from "../pizza-item";
import { Loader } from "../loader";
import { useDispatch, useSelector } from "react-redux";
import { pizzasActions } from "../../store";
import axios from "axios";
import { API_URL } from "../../utils";

export const PizzaList = () => {
  const pizzas = useSelector((item) => item.pizzas);
  const dispatch = useDispatch();
  const [loarder, setLoader] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        setLoader(true);

        const { data } = await axios(API_URL);
        dispatch(pizzasActions.setPizzas(data));
      } catch (err) {
        console.log(err);
      } finally {
        setLoader(false);
      }
    })();
  }, [dispatch]);

  return (
    <div className="mt-5">
      <h3 className="text-3xl font-bold mb-7">Все пиццы</h3>

      <ul className="flex flex-wrap justify-center">
        {!loarder
          ? pizzas.map((pizza) => <PizzaItem key={pizza.id} {...pizza} />)
          : [...new Array(10)].map((_, index) => (
              <li key={index} style={{ marginLeft: 35, marginBottom: 50 }}>
                <Loader />
              </li>
            ))}
      </ul>
    </div>
  );
};
