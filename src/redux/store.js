import { createStore, combineReducers } from 'redux';
import basketReducer from './basket/reducer.js';
import itemIdReducer from './itemId/reducer.js';

const store = createStore(combineReducers({
    basketReducer,
    itemIdReducer
}))

export default store;