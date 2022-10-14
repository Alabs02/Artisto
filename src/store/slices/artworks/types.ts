export interface IThumbnail {
  lqip: string;
  width: number;
  height: number;
  alt_text: string;
}

export interface IArtwork {
  id: number;
  api_model: string;
  api_link: string;
  is_boosted: boolean;
  title: string;
  thumbnail: IThumbnail;
  main_reference_number: string;
  has_not_been_viewed_much: boolean;
  boost_rank: number;
  date_start: number;
  date_end: number;
  fiscal_year: number;
  date_display: string;
  artist_display: string;
  place_of_origin: string;
  medium_display: string;
  credit_line: string;
  artwork_type_title: string;
  artwork_type_id: number;
  department_title: string;
  department_id: string;
  artist_id: number;
  artist_title: string;
  alt_artist_ids: number[];
  artist_ids: number[];
  artist_titles: string[];
  category_ids: string[];
  category_titles: string[];
  style_id: string;
  timestamp: string;
  style_title: string;
}

export interface IPaginate {
  total: number;
  limit: number;
  offset: number;
  total_pages: number;
  current_page: number;
  next_url: string;
}

export interface IInfo {
  version: string;
  license_text: string;
  license_links: string[];
}

export interface IConfig {
  iiif_url: string;
  website_url: string;
}

export interface IResponse {
  pagination: IPaginate;
  data: IArtwork[];
  info: IInfo;
  config: IConfig;
}

export interface ISingleResponse {
  pagination: IPaginate;
  data: IArtwork;
  info: IInfo;
  config: IConfig;
}

export interface IError {
  message: string;
}

export interface IArtworkState {
  loading: boolean;
  fetching: boolean;
  payload: IResponse;
  artworkPayload: ISingleResponse;
  error: IError;
}
