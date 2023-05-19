import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { contactsReducer } from './contacts/contactsSlice';
import { authReducer } from './auth/authSlice';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  persistReducer,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// import { contacts } from './contactsSlice';

const contactConfigure = { key: 'contacts', storage, blacklist: ['filter'] };

const authPersistConfig = {
  key: 'token',
  storage,
  whitelist: ['token'],
};

const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);

const rootReducer = combineReducers({
  contacts: persistReducer(contactConfigure, contactsReducer),
  auth: persistedAuthReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  // [contacts.reducerPath]: contacts.reducer,
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    // contacts.middleware,
  ],
});

export const persistor = persistStore(store);
