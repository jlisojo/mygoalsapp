import {
  REGISTER_EMAIL_CHANGED,
  REGISTER_PASSWORD_CHANGED,
  REGISTER_CONFIRM_PASSWORD_CHANGED,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILED,
  REGISTER_USER
} from '../actions/types';

const INITIAL_STATE = {
  registerEmail: 'register@test.com',
  registerPassword: 'register',
  registerConfirmPassword: 'r',
  user: null,
  errorMessage: '',
  isLoading: false
};

export default (state = INITIAL_STATE, action) => {
  console.log(action);
  switch (action.type) {
    case REGISTER_EMAIL_CHANGED:
      return { ...state, registerEmail: action.payload };
    case REGISTER_PASSWORD_CHANGED:
      return { ...state, registerPassword: action.payload };
    case REGISTER_CONFIRM_PASSWORD_CHANGED:
      return { ...state, registerConfirmPassword: action.payload };
    case REGISTER_USER:
      return { ...state, ...INITIAL_STATE, user: action.payload };
    case REGISTER_USER_SUCCESS:
      return { ...state, user: action.payload, errorMessage: '', isLoading: false };
    case REGISTER_USER_FAILED:
      return { ...state, errorMessage: 'Authentication Failed', registerPassword: '', isLoading: false };
    default:
      return state;
  }
};
