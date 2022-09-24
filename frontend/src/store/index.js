import { configureStore } from '@reduxjs/toolkit';
import authReducer from './reducers/authReducer';
import authService from './services/authService';

const Store = configureStore({
  reducer: {
    [authService.reducerPath]: authService.reducer,
    authReducer: authReducer,
  },
});

export default Store;
