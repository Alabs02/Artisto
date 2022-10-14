export {
  default as artworksReducer,
  artworksSlice,
  setError,
  setLoading,
  setPayload,
  setfetching,
  setArtworkPayload,
} from './slice';

export {
  fetchArtworks,
  fetchArtwork,
  searchArtworks,
} from './api-actions';

export type {
  IArtwork,
  IConfig,
  IError,
  IInfo,
  IPaginate,
  IArtworkState,
  IResponse,
  IThumbnail,
} from './types';
