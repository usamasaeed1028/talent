import React from "react";

interface InputProps {
  type: string;
  text: string;
  placeholder: string;
}

const Input = ({ type, text, placeholder }: InputProps) => {
  return (
    <label
      htmlFor={type}
      className="text-[16px] font-bold text-[#666666] flex flex-col gap-y-[8px]"
    >
      {text}
      <input
        type="text"
        placeholder={placeholder}
        id={type}
        className="bg-[#F7F7F7]   h-[52px] rounded-[48px] text-[15px] px-[16px]  outline-none"
      />
    </label>
  );
};

export default Input;
