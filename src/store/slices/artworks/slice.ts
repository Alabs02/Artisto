import { createSlice, PayloadAction } from '@reduxjs/toolkit';


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

const artworksReducer = artworksSlice.reducer;

export { artworksReducer as default };

export const {
  setLoading,
  setfetching,
  setPayload,
  setArtworkPayload,
  setError,
} = artworksSlice.actions;
