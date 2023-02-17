import styles from "./conatiner.module.scss";

export const Container = ({ children }) => {
  return <div className={styles.containerr}>{children}</div>;
};
