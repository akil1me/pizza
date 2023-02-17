import { useSelector } from "react-redux";
import { CartList, Container, Header, CartEmty } from "../../components";

export const Cart = () => {
  const { items } = useSelector((item) => item.cart);
  return (
    <>
      <Header />
      <Container>{items.length > 0 ? <CartList /> : <CartEmty />}</Container>
    </>
  );
};
