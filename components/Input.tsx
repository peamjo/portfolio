import React from "react";

interface InputProps {
  name: string;
  placeholder: string;
}

const Input = ({ name, placeholder }: InputProps) => {
  return (
    <div className="flex flex-col">
      <label className="py-2 text-sm uppercase">{name}</label>
      <input
        className="flex p-3 border-2 border-gray-300 rounded-lg"
        type="text"
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
