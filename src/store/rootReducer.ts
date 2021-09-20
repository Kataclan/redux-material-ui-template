import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import farmReducer from './slices/farm';

const rootPersistConfig = {
  key: 'root',
  storage,
  keyPrefix: 'redux-',
  whitelist: []
};

const farmPersistConfig = {
  key: 'farm',
  storage,
  keyPrefix: 'redux-',
  whitelist: ['sortBy', 'checkout']
};

const rootReducer = combineReducers({
  farms: persistReducer(farmPersistConfig, farmReducer)
});

export { rootPersistConfig, rootReducer };
