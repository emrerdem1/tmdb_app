interface IMovie {
  id: number;
  adult: boolean;
  title: string;
  backdrop_path: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

interface IProdCompanies {
  id: number;
  logo_path: null | string;
  name: string;
  origin_country: string;
}

interface IProdCountries {
  iso_3166_1: string;
  name: string;
}

interface ISpokenLanguages {
  english_name: string;
  iso_639_1: string;
  name: string;
}

export interface IGenres {
  id: number;
  name: string;
}

export interface ICastInfo {
  id: number;
  character: string;
  name: string;
  profile_path: string;
}

export interface ICastSpec {
  cast: ICastInfo[];
}

export interface IReviewInfo {
  id: number;
  author: string;
  content: string;
  created_at: string;
}

export interface IReviewSpec {
  id: number;
  results: IReviewInfo[];
}

export type TMovieListItemProps = { genre_ids: number[] } & IMovie;

export interface IMovieDetailProps extends IMovie {
  belongs_to_collection: null | boolean;
  budget: number;
  genres: IGenres[];
  homepage: string;
  imdb_id: string;
  revenue: number;
  runtime: number;
  status: string;
  tagline: string;
  production_companies: IProdCompanies[];
  production_countries: IProdCountries[];
  spoken_languages: ISpokenLanguages[];
}

export interface IMovieListResponseSpec {
  page: number;
  results: TMovieListItemProps[];
  total_pages: number;
  total_results: number;
}
