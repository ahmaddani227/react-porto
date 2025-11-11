interface InputType {
  type: string;
  name: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ name, ...props }: InputType) => {
  return <input {...props} id={name} className="form-input" />;
};

export default Input;
