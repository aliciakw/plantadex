import { createStore, combineReducers } from 'redux'
import plant, { plantInitialState } from './plant';

export const initialState = {
  plant: plantInitialState
};
const reducers = combineReducers({
  plant
});
export const configureStore = () => {
  return createStore(
    reducers,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
};
