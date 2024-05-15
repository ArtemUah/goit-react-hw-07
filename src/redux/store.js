import { configureStore } from "@reduxjs/toolkit";
import { contactSliceReducer } from "./contactsSlice";
import { filterSliceReducer } from "./filtersSlice";

import { persistStore, persistReducer, FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key:'contactList',
    storage,
    whitelist: ['items'],
  }
const persistContactSliceReducer = persistReducer(persistConfig, contactSliceReducer)
export const store = configureStore({
    reducer: {
        contacts: persistContactSliceReducer,
        filters: filterSliceReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
          },
        })
});

export const persistor = persistStore(store);

