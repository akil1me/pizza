import { Button } from "antd";
import {
  MinusCircleOutlined,
  PlusCircleOutlined,
  CloseCircleOutlined,
} from "@ant-design/icons";

import styles from "./cart-item.module.scss";

export const CartItem = () => {
  return (
    <li className={styles.cartItem}>
      <div className="flex flex-col sm:flex-row items-center">
        <img
          src="https://pasta.uz/upload/products/%D0%9F%D0%B5%D0%BF%D0%BF%D0%B5%D1%80%D0%BE%D0%BD%D0%B8.jpg"
          alt="cart pizza"
          width={80}
          height={80}
        />
        <div className="sm:ml-4">
          <h3>Сырный цыпленок</h3>
          <p>тонкое тесто, 26 см.</p>
        </div>
      </div>

      <div className="flex items-center">
        <Button
          danger
          className={styles.cartBtn}
          icon={<MinusCircleOutlined className="align-middle" />}
        />
        <span className="mx-2">2</span>
        <Button
          danger
          className={styles.cartBtn}
          icon={<PlusCircleOutlined className="align-middle" />}
        />
      </div>

      <p>770 ₽</p>

      <Button
        danger
        className={styles.cartBtn + " absolute top-3 right-3 sm:static"}
        icon={<CloseCircleOutlined className="align-middle" />}
      />
    </li>
  );
};
