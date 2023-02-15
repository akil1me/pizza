import { useState } from "react";
import styles from "./pizza.module.scss";
import { Button, message, notification } from "antd";
import { useDispatch } from "react-redux";
import { setAddItems } from "../../store";

const typePizza = ["тонкое", "традиционное"];

export const PizzaItem = ({ title, imageUrl, sizes, types, price }) => {
  const [activeType, setActiveType] = useState(types[0]);
  const [activeSize, setActiveSize] = useState(0);

  const [api, contextHolder] = notification.useNotification();
  const openNotificationWithIcon = () => {
    api.success({
      message: "Пицца добалено",
      duration: 1.5,
      icon: <img src={imageUrl} alt="pizza" width={30} height={30} />,
      description: `Тесто ${typePizza[activeType]}, ${sizes[activeSize]} см.`,
    });
  };

  const dispatch = useDispatch();

  const handlePizzaount = () => {
    const item = {
      id: new Date().getTime(),
      title,
      imageUrl,
      sizes: sizes[activeSize],
      types: typePizza[activeType],
      price: price[activeSize],
      count: 1,
    };

    dispatch(setAddItems(item));
    openNotificationWithIcon();
  };

  return (
    <>
      {contextHolder}
      <li className={styles.pizza}>
        <img src={imageUrl} alt="pizza" width={260} height={260} />
        <h4 className="text-lg font-bold mb-3">{title}</h4>

        <div className={styles.pizzaTypeContent}>
          <ul className={styles.pizzaList}>
            {types?.map((typeNum) => (
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
            {sizes?.map((size, index) => (
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
          <p className={styles.pizzaPrice}>от {price[activeSize]} ₽</p>
          <Button
            onClick={handlePizzaount}
            className={styles.pizzaAdd}
            type="button"
          >
            в корзину
          </Button>
        </div>
      </li>
    </>
  );
};
