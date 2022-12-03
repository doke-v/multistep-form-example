import { Button } from "antd";
import Form from "antd/es/form";
import Input from "antd/es/input";
import { incrementStep } from "../../store/slices/registration";
import { useAppDispatch } from "../../store/store";
import { useRegistrationForm } from "../useRegistrationForm";

const Step1 = () => {
  const registrationForm = useRegistrationForm();
  const dispatch = useAppDispatch();

  const goForward = async () => {
    const result = await registrationForm
      .validateFields(["name", "code"]) // trigger validation manually
      .catch(() => null);
    if (result) {
      // check results
      dispatch(incrementStep());
    }
  };

  return (
    <>
      <Form.Item
        label="Registrikood"
        name="code"
        hasFeedback
        rules={[{ required: true, message: "Sisesta registrikood" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="name"
        label="Ettevõtte nimi"
        hasFeedback
        rules={[
          {
            required: true,
            message: "Sisesta ettevõtte nimi",
          },
          {
            async validator(_, value) {
              if (!value) return;
              const result = await makeFakeRequest(value).catch(() => null); // simulating network request, fails if value === swedbank
              if (!result) {
                return Promise.reject(
                  new Error(`${value} on juba registreeritud`)
                );
              }
              return Promise.resolve();
            },
            validateTrigger: [], // invalidate trigger
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Button onClick={goForward}>Järgmine</Button>
    </>
  );
};

const makeFakeRequest = (value: string) => {
  const ms = Math.floor(Math.random() * 2000);
  return new Promise((resolve, reject) =>
    setTimeout(() => (value === "swedbank" ? reject() : resolve(value)), ms)
  );
};

export default Step1;
