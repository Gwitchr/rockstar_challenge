import { InputHTMLAttributes } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  search: boolean;
  placeholder?: string;
  label?: string;
  onClear?: () => void;
  value: string;
}

function Input({
  search,
  placeholder,
  label,
  onChange,
  onClear,
  value,
}: IInputProps) {
  const notEmpty = value !== "";
  return (
    <div className="relative text-gray-600">
      <label hidden htmlFor="">
        {label || ""}
      </label>
      {!!search && (
        <button
          onClick={notEmpty ? onClear : undefined}
          className="absolute right-0 top-0 mt-2 mr-4"
        >
          {notEmpty ? (
            <FontAwesomeIcon icon={faTimes} />
          ) : (
            <FontAwesomeIcon icon={faSearch} />
          )}
        </button>
      )}
      <input
        className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-full text-sm focus:outline-none"
        type="text"
        placeholder={`${placeholder || ""}...`}
        onChange={onChange}
        value={value}
      />
    </div>
  );
}

export default Input;
