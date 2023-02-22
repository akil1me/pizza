import { FC } from "react";
import { CategoryList, Container, PizzaList, Sort } from "../../components";

export const Home: FC = () => {
  return (
    <Container>
      <div className="flex flex-col xl:flex-row items-center justify-center xl:justify-between mt-4">
        <CategoryList />
        <Sort />
      </div>
      <PizzaList />
    </Container>
  );
};
