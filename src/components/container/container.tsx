import { FC, ReactNode } from "react";
import styles from "./conatiner.module.scss";

type ContainerProps = {
  className?: string;
  children: ReactNode;
};

export const Container: FC<ContainerProps> = ({ children, className }) => {
  return <div className={`${styles.containerr} ${className}`}>{children}</div>;
};
