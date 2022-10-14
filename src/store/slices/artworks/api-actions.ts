import { AppThunk } from '@/store';

// SERVICE
import { $api } from '@/services';
import apiRoutes from '@/store/slices/api-routes';

// ACTIONS
import {
  setLoading,
  setfetching,
  setPayload,
  setArtworkPayload
} from './slice';


export const fetchArtworks =
  ({ page, limit }: { page: number; limit: number }): AppThunk =>
    async (dispatch) => {
      dispatch(setLoading(true));
      const response = await $api
        .service()
        .fetch(`${apiRoutes.artworksRoute}?page=${page}&limit=${limit}`, true);

      if ($api.isSuccessful(response)) {
        dispatch(setPayload(response?.data));
      }

      dispatch(setLoading(false));
    };

export const fetchArtwork =
  ({ id }: { id: number }): AppThunk =>
    async (dispatch) => {
      dispatch(setfetching(true));
      const response = await $api.service().fetch(`${apiRoutes.artworksRoute}/${id}`, true);

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
        .fetch(`${apiRoutes.searchArtworksRoute}?q=${query.toLowerCase()}`, true);

      if ($api.isSuccessful(response)) {
        dispatch(setPayload(response?.data));
      }

      dispatch(setLoading(false));
    };