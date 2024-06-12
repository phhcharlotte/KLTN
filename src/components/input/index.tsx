import { ChangeEvent, FC } from "react";

interface InputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: string;
}

const Input: FC<InputProps> = ({
  value,
  onChange,
  placeholder = "",
  type = "text",
}) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };
  return (
    <input
      type={type}
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
      className="w-full h-8 border-solid border-2 p-2 rounded-md"
    />
  );
};

export default Input;
