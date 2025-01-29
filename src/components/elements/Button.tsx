type ButtonType = {
  children: React.ReactNode;
  type?: string;
};

const Button = ({ children, type = "submit" }: ButtonType) => {
  return (
    <button typeof={type} className="form-btn">
      {children}
    </button>
  );
};

export default Button;
