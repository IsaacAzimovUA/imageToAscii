import React, { useMemo } from 'react';

const SelectField = ({ label, name, value, onChange, imageOptions }) => {
  const memoizedOptions = useMemo(() => {
    return imageOptions.map((option, index) => (
      <option key={index} value={option}>
        {option}
      </option>
    ));
  }, [imageOptions]);
  return (
    <div className="mb-4">
      <label
        className="block text-gray-700 font-bold mb-2 capitalize"
        htmlFor={name}
      >
        {label}
      </label>
      <select
        className="bg-white appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        value={value}
        onChange={onChange}
        id={name}
        name={name}
      >
        {memoizedOptions}
      </select>
    </div>
  );
};

export default SelectField;
