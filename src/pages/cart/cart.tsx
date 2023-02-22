import { FC } from "react";
import { useSelector } from "react-redux";
import { CartEmty, CartList, Container } from "../../components";
import { RootState } from "../../store";

export const Cart: FC = () => {
  const { items } = useSelector((item: RootState) => item.cart);
  return (
    <Container>{items.length > 0 ? <CartList /> : <CartEmty />}</Container>
  );
};
