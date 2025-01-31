interface TextInputProps {
  label: string;
  placeholder: string;
  id: string;
  type?: string;
  required?: boolean;
  value: string;
}

const TextInput = ({
  label,
  placeholder,
  id,
  type = "text",
  required,
}: TextInputProps) => {
  return (
    <div className="flex flex-col space-y-4 w-64">
      <label htmlFor={id} className="text-gray-700 font-semibold">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        required={required}
        className="text-gray-700 border-2 border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out"
      />
    </div>
  );
};

export default TextInput;
