interface LabelType {
  title: string;
  htmlFor: string;
}

const Label = ({ title, ...props }: LabelType) => {
  return (
    <label {...props} className="mb-1">
      {title}
    </label>
  );
};

export default Label;
