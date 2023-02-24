import { FC } from "react";

import {
  CloseCircleOutlined,
  ExclamationCircleFilled,
  MinusCircleOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";
import { Button } from "antd";
import { motion } from "framer-motion";

import confirm from "antd/es/modal/confirm";
import { useDispatch } from "react-redux";
import { CartTypes as CartItemProps } from "../../@types";
import { setMinusCount, setPlusCount, setRemoveItem } from "../../store";
import styles from "./cart-item.module.scss";

export const CartItem: FC<CartItemProps> = ({
  id,
  title,
  imageUrl,
  types,
  sizes,
  price,
  count,
}) => {
  const dispatch = useDispatch();

  const handleDeleteIetm = () => {
    confirm({
      title: "Вы действительно хотите удалить пиццу?",
      icon: <ExclamationCircleFilled style={{ color: "#FF4D4F" }} />,
      okText: "Да",
      okType: "danger",
      okCancel: true,
      cancelText: "Нет",
      onOk() {
        dispatch(setRemoveItem(id));
      },
      onCancel() {},
    });
  };

  const handlePlusItem = () => {
    dispatch(setPlusCount(id));
  };

  const handleMinusItem = () => {
    if (count > 1) {
      dispatch(setMinusCount(id));
    } else {
      dispatch(setRemoveItem(id));
    }
  };
  return (
    <motion.li
      layout
      className={styles.cartItem}
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -100, opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col sm:flex-row items-center">
        <img src={imageUrl} alt="cart pizza" width={80} height={80} />
        <div className="sm:ml-4 w-40">
          <h3>{title}</h3>
          <p>
            <span className="text-orange-500">{types}</span> тесто,{" "}
            <span className="text-orange-500">{sizes}</span> см.
          </p>
        </div>
      </div>

      <div className="flex items-center">
        <Button
          onClick={handleMinusItem}
          danger
          className={styles.cartBtn}
          icon={<MinusCircleOutlined className="align-middle" />}
        />
        <span className="mx-2">{count}</span>
        <Button
          onClick={handlePlusItem}
          danger
          className={styles.cartBtn}
          icon={<PlusCircleOutlined className="align-middle" />}
        />
      </div>

      <p>{price * count} ₽</p>

      <Button
        onClick={handleDeleteIetm}
        danger
        className={styles.cartBtn + " absolute top-3 right-3 sm:static"}
        icon={<CloseCircleOutlined className="align-middle" />}
      />
    </motion.li>
  );
};
