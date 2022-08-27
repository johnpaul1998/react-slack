import { configureStore } from '@reduxjs/toolkit';
import appReducer from './features/appSlice';
// npm install @reduxjs/toolkit
export const store = configureStore({
    reducer:{
        app: appReducer,
    }
})