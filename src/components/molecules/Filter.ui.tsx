import { Container } from "../atoms";
import { useAppContext } from "../../context/";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const filterVals = [
  { rating: 2 },
  { rating: 4 },
  { rating: 6 },
  { rating: 8 },
  { rating: 10 },
];

function Filter() {
  const ctx = useAppContext();

  const handleSetFilter = (filter: number) => {
    ctx.setAppState({
      ...ctx.appState,
      filter,
    });
  };

  const selRating = ctx.appState.filter;

  return (
    <Container className="flex justify-center">
      <h3 className="text-xl">
        Filter by rating: &nbsp;
        <span>
          {filterVals.map(({ rating }) => (
            <FontAwesomeIcon
              onClick={() => handleSetFilter(rating)}
              className={`text-${
                rating <= selRating ? "yellow-500" : "gray-200"
              }`}
              icon={faStar}
            />
          ))}
        </span>
      </h3>
    </Container>
  );
}

export default Filter;
