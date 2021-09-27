import { useMemo } from "react";
import { Container } from "../atoms";
import { Filter } from "../molecules";
import { useMovies } from "../../hooks";
import { IMovie, EAppContent } from "../../types";
import { useAppContext } from "../../context";

function MovieRoster() {
  const ctx = useAppContext();
  const { data, posterPath, error } = useMovies({
    query: ctx.appState.searchTerm,
  });

  const movies: IMovie[] = useMemo(() => {
    const filterFn = (el: IMovie) =>
      ctx.appState.filter ? el.vote_average <= ctx.appState.filter : el;

    return data?.results ? data.results.filter(filterFn) : [];
  }, [data?.results, ctx.appState.filter]);

  if (error) {
    return (
      <Container>
        <h1>Sorry there was an error... </h1>
      </Container>
    );
  }

  return (
    <Container className="min-h-screen" fluid>
      <Container className="flex justify-center items-center">
        <h1 className="text-2xl md:text-4xl">Discover featured films 🍿🎬</h1>
      </Container>
      <Filter />
      <Container className="flex flex-wrap" tag="section">
        <div className="w-4/12">
          {movies.slice(0, 1).map((el) => (
            <MovieItem main key={el.id} posterPath={posterPath} data={el} />
          ))}
        </div>
        <div className="w-8/12 flex flex-wrap">
          {movies.slice(1, 9).map((el) => (
            <MovieItem key={el.id} posterPath={posterPath} data={el} />
          ))}
        </div>
      </Container>
    </Container>
  );
}

interface IMovieItemProps {
  posterPath?: string;
  data: { poster_path?: string; title?: string };
  main?: boolean;
}

function MovieItem({
  posterPath,
  data,
  data: { poster_path, title },
  main,
}: IMovieItemProps) {
  const ctx = useAppContext();
  const handleClick = () => {
    ctx.setAppState({
      ...ctx.appState,
      selContent: EAppContent.MOVIE_DETAILS,
      selMovie: data,
      sliderOpen: true,
    });
  };

  return (
    <div onClick={handleClick} className={`${main ? "pt-1" : "w-1/4 p-1"}`}>
      <img
        className="object-contain"
        src={`${posterPath}/${poster_path}`}
        alt={`${title} movie poster`}
      />
    </div>
  );
}

export default MovieRoster;
