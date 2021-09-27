import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

interface IInputProps {
  search: boolean;
  placeholder?: string;
  label?: string;
}

function Input({ search, placeholder, label }: IInputProps) {
  return (
    <div className="relative text-gray-600">
      <label hidden htmlFor="">
        {label || ""}
      </label>
      {!!search && (
        <button className="absolute right-0 top-0 mt-2 mr-4">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      )}
      <input
        className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-full text-sm focus:outline-none"
        type="text"
        placeholder={`${placeholder || ""}...`}
      />
    </div>
  );
}

export default Input;
