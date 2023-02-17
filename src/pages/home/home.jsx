import {
  CategoryList,
  Container,
  Header,
  PizzaList,
  Sort,
} from "../../components";

export const Home = () => {
  return (
    <>
      <Header link={"/cart"} />
      <Container>
        <div className="flex flex-col xl:flex-row items-center justify-center xl:justify-between mt-4">
          <CategoryList />
          <Sort />
        </div>
        <PizzaList />
      </Container>
    </>
  );
};
