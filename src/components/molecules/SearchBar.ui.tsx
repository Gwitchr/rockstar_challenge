import { ChangeEvent } from "react";
import { Input } from "../atoms";
import { useAppContext } from "../../context";

//interface ISearchBarProps {}

function SearchBar() {
  const ctx = useAppContext();
  const handleChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>
  ): void => {
    const {
      target: { value },
    } = e;
    ctx.setAppState({
      ...ctx.appState,
      searchTerm: value,
    });
  };

  return (
    <div>
      <Input onChange={handleChange} search placeholder="Search for a movie" />
    </div>
  );
}

export default SearchBar;
