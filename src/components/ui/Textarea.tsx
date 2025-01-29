type TextareaType = {
  name: string;
  id: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

const Textarea = ({ ...props }: TextareaType) => {
  return <textarea {...props} className="form-textarea"></textarea>;
};

export default Textarea;
