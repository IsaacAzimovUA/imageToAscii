import React from 'react';

const InputField = ({ label, name, type, value, onChange }) => {
  return (
    <div className="mb-4">
      <label
        className="block text-gray-700 font-bold mb-2 capitalize"
        htmlFor={name}
      >
        {label}
      </label>
      <input
        className="appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type={type}
        value={value}
        onChange={onChange}
        id={name}
        name={name}
      />
    </div>
  );
};

export default InputField;
