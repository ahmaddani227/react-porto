import Input from "../ui/Input";
import Label from "../ui/Label";
import Textarea from "../ui/Textarea";

type InputFieldType = {
  title: string;
  type?: string;
  name: string;
  isTextarea?: boolean;
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
};

const InputField = ({
  isTextarea = false,
  title,
  type = "text",
  name,
  onChange,
}: InputFieldType) => {
  return (
    <div className="flex flex-col mb-5 ">
      <Label title={title} htmlFor={name} />
      {isTextarea ? (
        <Textarea onChange={onChange} name={name} id={name} />
      ) : (
        <Input type={type} onChange={onChange} name={name} />
      )}
    </div>
  );
};

export default InputField;
