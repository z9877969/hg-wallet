import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import transactions from "./transactions/transactionsReducer";
import authReducer from "./auth/authReducer";
import errorReducer from "./error/errorReducer";

const persistConfigAuth = {
  key: "token",
  storage,
  whitelist: ["idToken"],
};

const store = configureStore({
  reducer: {
    auth: persistReducer(persistConfigAuth, authReducer),
    transactions,
    error: errorReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

export const persistor = persistStore(store);

export default store;
