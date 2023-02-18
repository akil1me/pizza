import { useSelector } from "react-redux";
import { CartEmty, CartList, Container } from "../../components";

export const Cart = () => {
  const { items } = useSelector((item) => item.cart);
  return (
    <Container>{items.length > 0 ? <CartList /> : <CartEmty />}</Container>
  );
};
