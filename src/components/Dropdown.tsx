import React from 'react';

interface DropdownOption {
  value: string;
  label: string;
}

interface DropdownProps {
  label: string;
  name: string;
  options: DropdownOption[];
  required?: boolean;
  placeholder?: string;
  value: string,
}

const Dropdown: React.FC<DropdownProps> = ({ label, name, options, required = false, placeholder = "Select an option" }) => {
  return (
    <div className="flex flex-col space-y-4 w-64">
      <label htmlFor={name} className="text-gray-700 font-semibold">
        {label}
        {required && <span className="text-red-500">*</span>}
      </label>
      <select
        name={name}
        id={name}
        className="border-2 border-gray-300 rounded-lg p-3 text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out"
        required={required}
      >
        <option value="" disabled defaultValue={placeholder} className="text-gray-400">
          {placeholder}
        </option>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
