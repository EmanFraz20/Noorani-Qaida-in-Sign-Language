import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from './user/userSlice';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import questionReducer from './question-reducer'
import resultReducer from './result-reducer'

const rootReducer = combineReducers({user: userReducer,questions:questionReducer,result:resultReducer});

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
   
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    }),
});

export const persistor = persistStore(store);