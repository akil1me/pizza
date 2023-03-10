import { FC} from "react"

import { Button, Result } from "antd";
import { Link } from "react-router-dom";

export const NotFound: FC = () => {
  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <Link to="/">
          <Button className="bg-sky-600" type="primary">
            Вернуться назад
          </Button>
        </Link>
      }
    />
  );
};
