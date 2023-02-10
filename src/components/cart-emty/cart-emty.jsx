import { Link } from "react-router-dom";
import { Button } from "antd";
import cartEmty from "../../assets/images/cart-emty.png";

export const CartEmty = () => {
  return (
    <div className="flex flex-col justify-center items-center text-center my-16">
      <h2 className="font-bold text-3xl mb-4">Корзина пустая 😕</h2>
      <p className="max-w-xl mb-6">
        Вероятней всего, вы не заказывали ещё пиццу. Для того, чтобы заказать
        пиццу, перейди на главную страницу.
      </p>

      <img className="mb-7" src={cartEmty} alt="" width={300} height={255} />

      <Link to="/">
        <Button className="bg-sky-600" type="primary">
          Вернуться назад
        </Button>
      </Link>
    </div>
  );
};
