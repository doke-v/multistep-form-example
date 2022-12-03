import { Button } from "antd";
import Form from "antd/es/form";
import Input from "antd/es/input";
import { decrementStep } from "../../store/slices/registration";
import { useAppDispatch } from "../../store/store";

const Step2 = () => {
  const dispatch = useAppDispatch();

  return (
    <>
      <Form.Item
        label="Kontaktisiku nimi"
        name="contactName"
        rules={[{ required: true, message: "Sisesta kontaktisiku nimi" }]}
      >
        <Input />
      </Form.Item>
      <Button onClick={() => dispatch(decrementStep())}>Tagasi</Button>
    </>
  );
};

export default Step2;
