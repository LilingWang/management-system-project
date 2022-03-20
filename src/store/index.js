import { createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import { reducer } from '../reducers/index';
import { cartReducer } from '../reducers/cartReducer/index';

const rootReducer = combineReducers({
    reducer,
    cartReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk));
