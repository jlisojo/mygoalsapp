import {
  LOGIN_EMAIL_CHANGED,
  LOGIN_PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILED,
  LOGIN_USER
} from '../actions/types';

const INITIAL_STATE = {
  loginEmail: 'email@test.com',
  loginPassword: 'password',
  user: null,
  errorMessage: '',
  isLoading: false
};

export default (state = INITIAL_STATE, action) => {
  console.log(action);
  switch (action.type) {
    case LOGIN_EMAIL_CHANGED:
      return { ...state, loginEmail: action.payload };
    case LOGIN_PASSWORD_CHANGED:
      return { ...state, loginPassword: action.payload };
    case LOGIN_USER:
      return { ...state, ...INITIAL_STATE, user: action.payload };
    case LOGIN_USER_SUCCESS:
      return { ...state, user: action.payload, errorMessage: '', isLoading: false };
    case LOGIN_USER_FAILED:
      return { ...state, errorMessage: 'Authentication Failed', loginPassword: '', isLoading: false };
    default:
      return state;
  }
};
