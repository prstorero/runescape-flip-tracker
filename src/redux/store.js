import { configureStore } from '@reduxjs/toolkit';
import flipsReducer from './slices/flipsSlice';

export default configureStore({
  reducer: {
    flips: flipsReducer,
  },
})