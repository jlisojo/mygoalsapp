import { LOGIN_EMAIL_CHANGED } from './types';

export const loginEmailChanged = (text) => {
  return {
    type: LOGIN_EMAIL_CHANGED,
    payload: text
  };
};
