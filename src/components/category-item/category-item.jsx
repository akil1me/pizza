import "./category-item.scss";

export const CategoryItem = ({
  title,
  index,
  active,
  handleCategoryClick,
  ...props
}) => {
  return (
    <li
      onClick={handleCategoryClick}
      className={
        active == index ? "category-item category-item-active" : "category-item"
      }
      {...props}
    >
      {title}
    </li>
  );
};
