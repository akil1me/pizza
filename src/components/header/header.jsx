import logo from "../../assets/images/logo.png";
import basket from "../../assets/images/iconfinder_shopping-cart.svg";

import styles from "./header.module.scss";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <a href="/">
          <img src={logo} alt="site logo" width={38} height={38} />
        </a>

        <div className="ml-3">
          <span className="text-lg font-bold uppercase ">pizza</span>
        </div>
      </div>

      <a className={styles.basket} href="/">
        <span>520 ₽</span>

        <span className="mx-4 ">|</span>

        <img src={basket} alt="basket" width={16} height={16} />
        <span className="ml-2">3</span>
      </a>
    </header>
  );
};
