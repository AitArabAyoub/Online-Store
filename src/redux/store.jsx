import { configureStore,combineReducers } from '@reduxjs/toolkit'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import cartReducer from './cartSlice'
const storage = {
  getItem: (key) => {
    const value = window.localStorage.getItem(key)
    return Promise.resolve(value)
  },
  setItem: (key, value) => {
    window.localStorage.setItem(key, value)
    return Promise.resolve(value)
  },
  removeItem: (key) => {
    window.localStorage.removeItem(key)
    return Promise.resolve()
  },
}
const persistConfig = {
  key: 'root',
  storage, // This should work
  version: 1,
}
const rootReducer = combineReducers({
  cart: cartReducer,
})
const persistedReducer = persistReducer(persistConfig, rootReducer)
export const store =  configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})
export const persistor = persistStore(store)