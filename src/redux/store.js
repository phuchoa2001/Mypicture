import { configureStore } from '@reduxjs/toolkit';
import List from './useList';
export default configureStore({
    reducer: {
        List,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    }),
})