import {combineReducers} from "redux";
import {reducer as waiterReducer} from '../features/Waiters/store/reducer';

export const reducer = combineReducers({
    waiter: waiterReducer,
});
