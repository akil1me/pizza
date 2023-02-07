import "./category-item.scss";

export const CategoryItem = ({ title, index, active, ...props }) => {
  return (
    <li
      className={
        active === index
          ? "category-item category-item-active"
          : "category-item"
      }
      {...props}
    >
      {title}
    </li>
  );
};
