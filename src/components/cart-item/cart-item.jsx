import { Button } from "antd";
import {
  MinusCircleOutlined,
  PlusCircleOutlined,
  CloseCircleOutlined,
  ExclamationCircleFilled,
} from "@ant-design/icons";

import styles from "./cart-item.module.scss";
import { useDispatch } from "react-redux";
import { setMinusCount, setPlusCount, setRemoveItem } from "../../store";
import confirm from "antd/es/modal/confirm";

export const CartItem = ({
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
      okCancel: "Нет",
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
    <li className={styles.cartItem}>
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
    </li>
  );
};
