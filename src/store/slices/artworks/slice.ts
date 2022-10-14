import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from '@/store';

// SERVICE
import { $api } from '@/services';

// TYPES
import { IResponse, ISingleResponse, IError, IArtworkState } from './types';

const initialState: IArtworkState = {
  loading: false,
  fetching: false,
  payload: {} as IResponse,
  artworkPayload: {} as ISingleResponse,
  error: {
    message: 'An error occurred, please try again!',
  },
};

export const artworksSlice = createSlice({
  name: 'artworks',
  initialState,
  reducers: {
    setLoading: (state, { payload }: PayloadAction<boolean>) => {
      state.loading = payload;
    },

    setfetching: (state, { payload }: PayloadAction<boolean>) => {
      state.fetching = payload;
    },

    setPayload: (state, { payload }: PayloadAction<IResponse>) => {
      state.payload = payload;
    },

    setArtworkPayload: (state, { payload }: PayloadAction<ISingleResponse>) => {
      state.artworkPayload = payload;
    },

    setError: (state, { payload }: PayloadAction<IError>) => {
      state.error = payload;
    },
  },
});

export const fetchArtworks =
  ({ page, limit }: { page: number; limit: number }): AppThunk =>
  async (dispatch) => {
    dispatch(setLoading(true));
    const response = await $api
      .service()
      .fetch(`/artworks?page=${page}&limit=${limit}`, true);

    if ($api.isSuccessful(response)) {
      dispatch(setPayload(response?.data));
    }

    dispatch(setLoading(false));
  };

export const fetchArtwork =
  ({ id }: { id: number }): AppThunk =>
  async (dispatch) => {
    dispatch(setfetching(true));
    const response = await $api.service().fetch(`/artworks/${id}`, true);

    if ($api.isSuccessful(response)) {
      dispatch(setArtworkPayload(response?.data));
    }

    dispatch(setfetching(false));
  };

export const searchArtworks =
  ({ query }: { query: string }): AppThunk =>
  async (dispatch) => {
    dispatch(setLoading(true));
    const response = await $api
      .service()
      .fetch(`/search?q=${query.toLowerCase()}`, true);

    if ($api.isSuccessful(response)) {
      dispatch(setPayload(response?.data));
    }

    dispatch(setLoading(false));
  };

const artworksReducer = artworksSlice.reducer;

export { artworksReducer as default };

export const {
  setLoading,
  setfetching,
  setPayload,
  setArtworkPayload,
  setError,
} = artworksSlice.actions;
