import { combineReducers } from '@reduxjs/toolkit';

// REDUCERS
import { artworksReducer } from './slices/artworks';

const rootReducer = combineReducers({
  artwork: artworksReducer,
});

export { rootReducer as default };
