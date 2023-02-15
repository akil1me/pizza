import { useSelector } from "react-redux";
import { CartList, Container, Header, CartEmty } from "../../components";

export const Cart = () => {
  const { items } = useSelector((item) => item.cart);
  console.log(items);
  return (
    <Container>
      <Header />
      {items.length > 0 ? <CartList /> : <CartEmty />}
    </Container>
  );
};
