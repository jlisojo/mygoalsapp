import { combineReducers } from 'redux';
import LoginReducer from './LoginReducer';
import RegisterReducer from './RegisterReducer';

export default combineReducers({
  login: LoginReducer,
  register: RegisterReducer
});
