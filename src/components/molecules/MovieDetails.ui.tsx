import { IMovie } from "../../types/";
import { useAppContext } from "../../context";
import { useMovies } from "../../hooks";

function MovieDetails() {
  const ctx = useAppContext();
  const { posterPath } = useMovies({});
  if (!ctx.appState.selMovie) return null;
  const {
    // id,
    poster_path,
    title,
    // adult,
    // backdrop_path,
    original_title,
    original_language,
    overview,
    popularity,
    release_date,
    // video,
    vote_average,
    vote_count,
  }: IMovie = ctx.appState.selMovie;
  return (
    <section className="flex flex-col items-center text-white">
      <img
        className="w-20 md:w-40"
        src={`${posterPath}/${poster_path}`}
        alt={`${title} movie poster`}
      />
      <h2 className="text-xl md:text-3xl">{title}</h2>
      <h3 className="text-lg md:text-xl">{`Released ${release_date}`}</h3>
      <p>{overview}</p>
      <b>{`Avg vote ${vote_average} based on ${vote_count} votes`}</b>
      <p>{`Original title: "${original_title}"`}</p>
      <p>{`Original language: "${original_language}"`}</p>
      <p>{`Popularity: "${popularity}"`}</p>
    </section>
  );
}

export default MovieDetails;
