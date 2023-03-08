import { Button, Result } from "antd";
import { Link } from "react-router-dom";

import "./pay-sucsess.scss";

export const PaySucsess: React.FC = () => {
  return (
    <div className="pay">
      <Result
        status="success"
        title="Ваша доставка успешно оформлено"
        subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
        extra={[
          <Link key={1} to={"/"}>
            <Button
              danger
              className="bg-orange-500"
              type="primary"
              key="console"
            >
              Вернутся назад
            </Button>
          </Link>,
        ]}
      />
    </div>
  );
};
