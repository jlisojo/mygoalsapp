import { combineReducers } from 'redux';
import LoginReducer from './LoginReducer';
import RegisterReducer from './RegisterReducer';
import GoalCreateReducer from './GoalCreateReducer';
import GoalsReducer from './GoalsReducer';

export default combineReducers({
  login: LoginReducer,
  register: RegisterReducer,
  goal: GoalCreateReducer,
  goals: GoalsReducer
});
