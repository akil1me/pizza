import { FC } from "react";
import { CategoryList, Container, PizzaList, Sort } from "../../components";

import styles from "./home.module.scss"

export const Home: FC = () => {
  return (
    <Container>
      <div className={styles.home}>
        <CategoryList />
        <Sort />
      </div>
      <PizzaList />
    </Container>
  );
};
