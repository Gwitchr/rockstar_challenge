import useSWR from "swr";
import { fetcher } from "../utils";

interface IQueryContent {
  [key: string]: string | undefined;
  query?: string;
}

const API_KEY = process.env.REACT_APP_MOVIE_API_KEY || "";

const API_URL = "https://api.themoviedb.org/3/discover/movie";
const API_URL_SEARCH = "https://api.themoviedb.org/3/search/movie";

const posterPath = "https://image.tmdb.org/t/p/original";

export function useMovies(queryObj: IQueryContent) {
  const queryParams = new URLSearchParams();

  queryParams.set("api_key", API_KEY);

  Object.keys(queryObj).forEach((key) => {
    if (key !== "") {
      queryParams.set(key, queryObj[key as string] || "");
    }
  });

  const { data, error } = useSWR(
    `${
      queryObj.query !== "" ? API_URL_SEARCH : API_URL
    }?${queryParams.toString()}`,
    fetcher
  );

  return { data, error, posterPath };
}
