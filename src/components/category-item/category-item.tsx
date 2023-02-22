import { FC } from "react";
import "./category-item.scss";

type CategoryItemProps = {
  title: string;
  index: number;
  active:number;
  handleCategoryClick: () => void;
}

export const CategoryItem: FC<CategoryItemProps> = ({ title, index, active, handleCategoryClick }) => {
  return (
    <li
      onClick={handleCategoryClick}
      className={
        active === index
          ? "category-item category-item-active"
          : "category-item"
      }
    >
      {title}
    </li>
  );
};
