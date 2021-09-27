export enum EAppContent {
  MOVIE_DETAILS = "MOVIE_DETAILS",
}

export const AppContentNames: { [key in EAppContent]: string } = {
  [EAppContent.MOVIE_DETAILS]: "Movie Details",
} as const;
