import { LOGIN_EMAIL_CHANGED } from '../actions/types';

const INITIAL_STATE = { loginEmail: '' };

export default (state = INITIAL_STATE, action) => {
  swith (action.type) {
    case LOGIN_EMAIL_CHANGED:
      return { ...state, loginEmail: action.payload };
    default:
      return state;
  }
};
