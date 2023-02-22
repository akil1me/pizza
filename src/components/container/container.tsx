import { FC ,ReactNode} from "react";
import styles from "./conatiner.module.scss";

type ContainerProps = {
  children: ReactNode;
}

export const Container : FC<ContainerProps> = ({ children }) => {
  return <div className={styles.containerr}>{children}</div>;
};
