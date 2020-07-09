import * as firebase from 'firebase';
import {
  REGISTER_EMAIL_CHANGED,
  REGISTER_PASSWORD_CHANGED,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILED,
  REGISTER_USER
} from './types';

export const registerEmailChanged = (text) => {
  return {
    type: REGISTER_EMAIL_CHANGED,
    payload: text
  };
};

export const registerPasswordChanged = (text) => {
  return {
    type: REGISTER_PASSWORD_CHANGED,
    payload: text
  };
};

export const registerUser = ({ registerEmail, registerPassword }) => {
  return (dispatch) => {
    dispatch({ type: REGISTER_USER });
    firebase.auth().createUserWithEmailAndPassword(registerEmail, registerPassword)
    .then(user => registerUserSuccess(dispatch, user))
    .catch(() => registerUserFailed(dispatch));
  };
};

const registerUserSuccess = (dispatch, user) => {
  dispatch({
    type: REGISTER_USER_SUCCESS,
    payload: user
  });
};

const registerUserFailed = (dispatch) => {
  dispatch({
    type: REGISTER_USER_FAILED
  });
};
