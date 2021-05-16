import { configureStore } from '@reduxjs/toolkit';
import countReducer from './slices/countSlice';

export default configureStore({
    reducer: {
        count: countReducer
    },
});