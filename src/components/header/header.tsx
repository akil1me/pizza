import basket from "../../assets/images/iconfinder_shopping-cart.svg";
import logo from "../../assets/images/logo.png";

import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { RootState } from "../../store";
import styles from "./header.module.scss";

export const Header: React.FC = () => {
  const { totalCount, totalPrice } = useSelector((item: RootState) => item.cart);

  const { pathname } = useLocation();

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

      {pathname === "/" && (
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
