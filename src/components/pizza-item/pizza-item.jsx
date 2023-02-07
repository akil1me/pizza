import { useState } from "react";
import styles from "./pizza.module.scss";

const typePizza = ["тонкое", "традиционное"];

export const PizzaItem = ({ title, imageUrl, sizes, types, price }) => {
  const [activeType, setActiveType] = useState(0);
  const [activeSize, setActiveSize] = useState(0);

  const [pizzaCount, setPizzaCount] = useState(0);

  const handlePizzaount = () => {
    setPizzaCount((prev) => prev + 1);
  };

  return (
    <li className={styles.pizza}>
      <img src={imageUrl} alt="pizza" width={260} height={260} />
      <h4 className="text-lg font-bold mb-3">{title}</h4>

      <div className={styles.pizzaTypeContent}>
        <ul className={styles.pizzaList}>
          {types.map((typeNum) => (
            <li
              key={typeNum}
              onClick={() => setActiveType(typeNum)}
              className={
                activeType === typeNum
                  ? `${styles.pizzaItem} ${styles.pizzaItemActive}`
                  : `${styles.pizzaItem}`
              }
            >
              {typePizza[typeNum]}
            </li>
          ))}
        </ul>

        <ul className={styles.pizzaList}>
          {sizes.map((size, index) => (
            <li
              key={size}
              onClick={() => setActiveSize(index)}
              className={
                activeSize === index
                  ? `${styles.pizzaItem} ${styles.pizzaItemActive}`
                  : `${styles.pizzaItem}`
              }
            >
              {size + " см."}
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.pizzaFooter}>
        <p className={styles.pizzaPrice}>от {price} ₽</p>
        <button
          onClick={handlePizzaount}
          className={styles.pizzaAdd}
          type="button"
        >
          <span className="mr-2">+</span>
          Добавить
          {pizzaCount === 0 ? null : (
            <span className={styles.pizzaCount}>{pizzaCount}</span>
          )}
        </button>
      </div>
    </li>
  );
};
