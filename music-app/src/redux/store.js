import { createStore, combineReducers } from 'redux';
import libraryReducer from './libraryReducer';

// El estado global queda como { library: [...] }
const rootReducer = combineReducers({
  library: libraryReducer,
});

const store = createStore(
  rootReducer,
  // Habilita Redux DevTools si la extensión está instalada
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
