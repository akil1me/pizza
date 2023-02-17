import { useDispatch, useSelector } from "react-redux";
import { filterActions } from "../../store";
import { sortOptions } from "../../data";

export const Sort = () => {
  const sorting = useSelector((item) => item.filter.sorting);

  const dispatch = useDispatch();

  const handleSortChange = (value) => {
    dispatch(filterActions.setSorting(value));
  };

  return (
    <div className="flex flex-col sm:flex-row items-center">
      <span>Сортировать по: </span>

      <select
        onChange={(e) => handleSortChange(e.target.value)}
        value={sorting}
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
