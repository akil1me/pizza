import {FC} from "react";

import { useDispatch, useSelector } from "react-redux";
import { categorys } from "../../data";
import { RootState, filterActions } from "../../store";
import { CategoryItem } from "../category-item";

import styles from "./category-list.module.scss";

export const CategoryList: FC = () => {
  const categoryActive = useSelector((item: RootState) => item.filter.categoryActive);

  const dispatch = useDispatch();

  const handleCategoryClick = (i: number) => {
    dispatch(filterActions.setCategoryActive(+i));
  };

  return (
    <>
      <ul className={styles.categoryList}>
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

      <div className={styles.categoryListMobile}>
        <span>Категория по:</span>
        <select
          className={styles.categoryListSelect}
          onChange={(e) => handleCategoryClick(+e.target.value)}
          value={categoryActive}
        >
          {categorys.map((item, index) => {
            return (
              <option key={index} value={index}>
                {item}
              </option>
            );
          })}
        </select>
      </div>
    </>
  );
};
