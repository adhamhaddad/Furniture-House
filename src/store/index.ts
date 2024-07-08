// ** Toolkit imports
import { configureStore } from '@reduxjs/toolkit'

// ** Reducers
import products from 'src/store/products'

export const store = configureStore({
  reducer: {
    products
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false
    })
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
