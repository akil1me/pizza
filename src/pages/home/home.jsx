import { CategoryList, Header, PizzaList, Sort } from "../../components";
import {} from "../../components/category-list";

export const Home = () => {
  return (
    <>
      <Header />
      <div className="flex items-center justify-between">
        <CategoryList />
        <Sort />
      </div>
      <PizzaList />
    </>
  );
};
