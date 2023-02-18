import { Outlet } from "react-router-dom";
import { Header } from "../components";

export const Loyout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
