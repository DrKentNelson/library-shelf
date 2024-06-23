import { createStore, combineReducers } from 'redux';
import { cartReducer } from '../reducers/reducers';

const rootReducer = combineReducers({
    cart: cartReducer,
});

const store = createStore(rootReducer);

export default store;