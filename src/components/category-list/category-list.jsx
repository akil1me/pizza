import { useDispatch, useSelector } from "react-redux";
import { categorys } from "../../data";
import { pizzasActions } from "../../store";
import { CategoryItem } from "../category-item";

export const CategoryList = () => {
  const categoryActive = useSelector((item) => item.categoryActive);

  const dispatch = useDispatch();

  const handleCategoryClick = (i) => {
    dispatch(pizzasActions.setCategoryActive(i));
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
