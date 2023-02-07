import { useState } from "react";
import { CategoryItem } from "../category-item";

const categorys = [
  "Bce",
  "Мясные",
  "Вегетарианская",
  "Гриль",
  "Острые",
  "Закрытые",
];

export const CategoryList = () => {
  const [active, setActive] = useState(0);

  return (
    <ul className="flex">
      {categorys.map((title, index) => (
        <CategoryItem
          key={title}
          title={title}
          index={index}
          active={active}
          onClick={() => setActive(index)}
        />
      ))}
    </ul>
  );
};
