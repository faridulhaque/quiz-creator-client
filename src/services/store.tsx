import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from '../api/rooApi/apiSlice';



const store = configureStore({
  reducer: {
    // users: usersSlice,
    [apiSlice.reducerPath]: apiSlice.reducer

  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware)

})
export default store;


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;