import React from 'react'

interface TextAreaProps {
  name: string;
  placeholder: string;
}

const TextArea = ({name, placeholder}: TextAreaProps) => {
  return (
    <div className="flex flex-col py-2">
      <label className="py-2 text-sm uppercase">{name}</label>
      <textarea
        className="p-3 border-2 border-gray-300 rounded-lg"
        rows={10}
        style={{ resize: "none" }}
        placeholder={placeholder}
      ></textarea>
    </div>
  );
}

export default TextArea
