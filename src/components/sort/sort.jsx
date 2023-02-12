import { useDispatch } from "react-redux";
import { pizzasActions } from "../../store";

export const Sort = () => {
  const dispatch = useDispatch();

  const handleSortChange = (value) => {
    dispatch(pizzasActions.setSorting(value));
  };

  return (
    <div className="flex flex-col sm:flex-row items-center">
      <span>Сортировать по: </span>

      <select
        onChange={(e) => handleSortChange(e.target.value)}
        className="text-orange-500 ml-2 outline-none bg-transparent"
      >
        <option value="">по умолчанию</option>
        <option value="rating">популярности</option>
        <option value="price"> цене</option>
        <option value="title"> алфавиту</option>
      </select>
    </div>
  );
};
