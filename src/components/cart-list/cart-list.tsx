import {
  DeleteOutlined,
  ExclamationCircleFilled,
  LeftOutlined,
} from "@ant-design/icons";
import { Button, Modal } from "antd";
import { AnimatePresence } from "framer-motion";

import cart from "../../assets/images/cart.svg";

import confirm from "antd/es/modal/confirm";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState, setClearItems } from "../../store";
import { CartItem } from "../cart-item";
import styles from "./cart-list.module.scss";
import { useState } from "react";
import { FormPay } from "../form";

export const CartList: React.FC = () => {
  const { items, totalPrice, totalCount } = useSelector(
    (item: RootState) => item.cart
  );
  const [openModal, setOpenModal] = useState<boolean>(false);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const showDeleteConfirm = () => {
    confirm({
      title: "Вы действительно хотите очистить корзину?",
      icon: <ExclamationCircleFilled style={{ color: "#FF4D4F" }} />,
      okText: "Да",
      okType: "danger",
      okCancel: true,
      cancelText: "Нет",
      onOk() {
        dispatch(setClearItems());
      },
      onCancel() {},
    });
  };

  const handlePayPizzas = (value: any) => {
    console.log({ value, items, totalPrice, totalCount });

    navigate("/pay");
    setOpenModal(false);
    dispatch(setClearItems());
  };

  return (
    <div className={styles.cartList}>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <img src={cart} alt="cart" width={29} height={29} />
          <h2 className={styles.title}>Корзина</h2>
        </div>

        <Button
          onClick={showDeleteConfirm}
          className="flex items-center justify-center h-auto px-3 py-2"
          danger
          icon={<DeleteOutlined />}
        >
          <strong className="ml-3 hidden sm:inline"> Очистить корзину</strong>
        </Button>
      </div>
      <ul className={styles.cartPizzasList}>
        <AnimatePresence>
          {items.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
        </AnimatePresence>
      </ul>

      <div className="flex flex-col sm:flex-row justify-between items-center mt-8">
        <p>Всего пицц: {totalCount} шт.</p>
        <p>
          Сумма заказа:{" "}
          <span className="text-orange-500 font-bold">{totalPrice} ₽</span>
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

        <Button
          onClick={() => setOpenModal(true)}
          className="rounded-lg text-orange-500"
        >
          Оплатить
        </Button>
      </div>
      <Modal
        title="Введите ваши данные"
        open={openModal}
        onCancel={() => setOpenModal(false)}
        footer={[
          <Button key={1} htmlType="submit" form="complex-form">
            Отправить
          </Button>,
        ]}
      >
        <FormPay handlePayPizzas={handlePayPizzas} />,
      </Modal>
    </div>
  );
};
