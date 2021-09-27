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

  const handleClear = () => {
    ctx.setAppState({
      ...ctx.appState,
      searchTerm: "",
    });
  };

  return (
    <div>
      <Input
        value={ctx.appState.searchTerm || ""}
        onClear={handleClear}
        onChange={handleChange}
        search
        placeholder="Search for a movie"
      />
    </div>
  );
}

export default SearchBar;
