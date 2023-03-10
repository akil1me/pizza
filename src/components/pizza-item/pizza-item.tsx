import { Button, notification } from "antd";
import { motion } from "framer-motion";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setAddItems } from "../../store";
import styles from "./pizza.module.scss";
import { Pizzas as PizzaItemProps } from "../../@types";

const typePizza: string[] = ["тонкое", "традиционное"];

export const PizzaItem: React.FC<PizzaItemProps> = ({
  title,
  imageUrl,
  sizes,
  types,
  price,
}) => {
  const [activeType, setActiveType] = useState<number>(types[0]);
  const [activeSize, setActiveSize] = useState<number>(0);

  const [api, contextHolder] = notification.useNotification();
  const openNotificationWithIcon = () => {
    api.success({
      message: <h3>{title} добалено</h3>,
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
      <motion.li
        className={styles.pizza}
        initial={{ y: 150, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {contextHolder}
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
          <Button onClick={handlePizzaount} className={styles.pizzaAdd} danger>
            в корзину
          </Button>
        </div>
      </motion.li>
    </>
  );
};
