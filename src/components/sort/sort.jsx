import { useDispatch } from "react-redux";
import { pizzasActions } from "../../store";
import { sortOptions } from "../../data";

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
        {sortOptions.map((option) => {
          return (
            <option key={option.text} value={option.value}>
              {option.text}
            </option>
          );
        })}
      </select>
    </div>
  );
};
