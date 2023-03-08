import { Form, Input, Select, Space } from "antd";
const { Option } = Select;

type FormPayProps = {
  handlePayPizzas: (v: any) => void;
};

export const FormPay: React.FC<FormPayProps> = ({ handlePayPizzas }) => {
  return (
    <Form
      id="complex-form"
      onFinish={handlePayPizzas}
      name="complex-form"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
    >
      <Form.Item label="Username">
        <Space>
          <Form.Item
            name="username"
            noStyle
            rules={[{ required: true, message: "Имя объязательно" }]}
          >
            <Input style={{ width: 160 }} placeholder="Введите имя" />
          </Form.Item>
        </Space>
      </Form.Item>
      <Form.Item label="Address">
        <Input.Group compact>
          <Form.Item
            name={["address", "province"]}
            noStyle
            rules={[{ required: true, message: "Адресс объязателен" }]}
          >
            <Select placeholder="Select province">
              <Option value="Серигили">Серигили</Option>
              <Option value="Чиланзар">Чиланзар</Option>
            </Select>
          </Form.Item>
          <Form.Item
            name={["address", "street"]}
            noStyle
            rules={[{ required: true, message: "Улица(квартал) объязателен" }]}
          >
            <Input style={{ width: "50%" }} placeholder="Input street" />
          </Form.Item>
        </Input.Group>
      </Form.Item>
    </Form>
  );
};
