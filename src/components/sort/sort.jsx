export const Sort = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center">
      <span>Сортировать по: </span>

      <select className="text-orange-500 ml-2 outline-none bg-transparent">
        <option value="popular">популярности</option>
        <option value="price"> цене</option>
        <option value="abc"> алфавиту</option>
      </select>
    </div>
  );
};
