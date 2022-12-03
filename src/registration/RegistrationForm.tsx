import Form from "antd/es/form";
import { useRegistrationForm } from "./useRegistrationForm";
import { Divider, Steps } from "antd";
import { useAppSelector } from "../store/store";
import { steps } from "./steps";

const RegistrationForm = () => {
  const form = useRegistrationForm();
  const currentStep = useAppSelector((state) => state.registration.step);

  return (
    <Form form={form}>
      <Steps current={currentStep} direction="horizontal" items={steps} />
      <Divider />
      <div className="steps-content">{steps[currentStep].content}</div>
    </Form>
  );
};

export default RegistrationForm;
