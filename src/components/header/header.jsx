import logo from "../../assets/images/logo.png";
import basket from "../../assets/images/iconfinder_shopping-cart.svg";

import styles from "./header.module.scss";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export const Header = ({ link }) => {
  const { totalCount, totalPrice } = useSelector((item) => item.cart);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link to="/">
          <img src={logo} alt="site logo" width={38} height={38} />
        </Link>

        <div className="ml-3">
          <h1 className="text-lg font-bold uppercase ">pizza</h1>
        </div>
      </div>

      {link && (
        <Link className={styles.basket} to="/cart">
          <span className="hidden md:inline">
            <span>{totalPrice} ₽</span>

            <span className="mx-4 ">|</span>
          </span>

          <img src={basket} alt="basket" width={16} height={16} />
          <span className="ml-2">{totalCount}</span>
        </Link>
      )}
    </header>
  );
};
