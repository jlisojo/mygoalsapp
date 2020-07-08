import {
  LOGIN_EMAIL_CHANGED,
  LOGIN_PASSWORD_CHANGED
} from './types';

export const loginEmailChanged = (text) => {
  return {
    type: LOGIN_EMAIL_CHANGED,
    payload: text
  };
};

export const loginPasswordChanged = (text) => {
  return {
    type: LOGIN_PASSWORD_CHANGED,
    payload: text
  };
};
