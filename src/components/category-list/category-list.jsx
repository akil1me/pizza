import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { pizzasActions } from "../../store";
import { API_URL } from "../../utils";
import { CategoryItem } from "../category-item";
import { categorys } from "../../data";

export const CategoryList = () => {
  const categoryActive = useSelector((item) => item.categoryActive);

  const dispatch = useDispatch();

  const handleCategoryClick = (i) => {
    dispatch(pizzasActions.setCategoryActive(i));
    (async () => {
      try {
        dispatch(pizzasActions.setIsLoading(true));
        const { data } = await axios(
          API_URL + (+i !== 0 ? "?category=" + i : "")
        );

        dispatch(pizzasActions.setPizzas(data));
      } catch (error) {
        console.log(error);
      } finally {
        dispatch(pizzasActions.setIsLoading(false));
      }
    })();
  };

  return (
    <>
      <ul className="hidden lg:flex  mb-4 lg:mb-0">
        {categorys.map((title, index) => (
          <CategoryItem
            key={title}
            title={title}
            index={index}
            active={categoryActive}
            handleCategoryClick={() => handleCategoryClick(index)}
          />
        ))}
      </ul>

      <div className="lg:hidden flex flex-col sm:flex-row items-center ">
        <span>Категория по:</span>
        <select
          className="w-20 text-orange-500 ml-2 outline-none bg-transparent"
          onChange={(e) => handleCategoryClick(e.target.value)}
        >
          {categorys.map((item, index) => {
            return (
              <option
                key={index}
                defaultValue={index}
                selected={categoryActive === +index}
                value={index}
              >
                {item}
              </option>
            );
          })}
        </select>
      </div>
    </>
  );
};
