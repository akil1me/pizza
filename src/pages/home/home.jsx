import {
  CategoryList,
  Container,
  Header,
  PizzaList,
  Sort,
} from "../../components";

export const Home = () => {
  return (
    <Container>
      <Header link="cart" />
      <div className="flex flex-col xl:flex-row items-center justify-center xl:justify-between mt-4">
        <CategoryList />
        <Sort />
      </div>
      <PizzaList />
    </Container>
  );
};
