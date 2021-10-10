import { combineReducers } from 'redux';
import account from '../reducers/account'

const rootReducer = combineReducers({
  account:account
});

export default rootReducer;