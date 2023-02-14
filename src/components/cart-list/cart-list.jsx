import { DeleteOutlined, LeftOutlined } from "@ant-design/icons";
import { Button } from "antd";
import cart from "../../assets/images/cart.svg";

import { useNavigate } from "react-router-dom";
import { CartItem } from "../cart-item";
import styles from "./cart-list.module.scss";

export const CartList = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.cartList}>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <img src={cart} alt="cart" width={29} height={29} />
          <h2 className={styles.title}>Корзина</h2>
        </div>

        <Button
          className="flex items-center justify-center"
          danger
          icon={<DeleteOutlined />}
        >
          <p className="ml-3 hidden sm:block"> Очистить корзину</p>
        </Button>
      </div>

      <ul className="mt-7">
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
      </ul>

      <div className="flex flex-col sm:flex-row justify-between items-center mt-3">
        <p>Всего пицц: 3 шт.</p>
        <p>
          Сумма заказа: <span className="text-orange-500 font-bold">900 ₽</span>
        </p>
      </div>

      <div className="flex items-center justify-between mt-10">
        <Button
          className="rounded-lg"
          onClick={() => navigate("/")}
          icon={<LeftOutlined className="align-middle" />}
        >
          Назад
        </Button>

        <Button danger className="rounded-lg text-orange-500">
          Оплатить
        </Button>
      </div>
    </div>
  );
};
