import { configureStore } from '@reduxjs/toolkit'

import { mainApi } from './service/main-api'

export const store = configureStore({
  reducer: {
    [mainApi.reducerPath]: mainApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(mainApi.middleware)
})
