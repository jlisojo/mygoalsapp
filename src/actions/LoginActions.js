import * as firebase from 'firebase';
import {
  LOGIN_EMAIL_CHANGED,
  LOGIN_PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILED,
  LOGIN_USER
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

export const loginUser = ({ loginEmail, loginPassword }) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_USER });

    firebase.auth().signInWithEmailAndPassword(loginEmail, loginPassword)
      .then(user => loginUserSuccess(dispatch, user))
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(loginEmail, loginPassword)
          .then(user => loginUserSuccess(dispatch, user))
          .catch(() => loginUserFailed(dispatch));
      });
  }
};

const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user
  });
};

const loginUserFailed = (dispatch) => {
  dispatch({
    type: LOGIN_USER_FAILED
  });
};
