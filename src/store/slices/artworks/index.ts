export {
  default as artworksReducer,
  artworksSlice,
  fetchArtworks,
  fetchArtwork,
  searchArtworks,
  setError,
  setLoading,
  setPayload,
  setfetching,
  setArtworkPayload,
} from './slice';

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
