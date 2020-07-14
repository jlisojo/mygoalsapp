import * as firebase from 'firebase';
import * as RootNavigation from '../navigation/RootNavigation.js';
import {
  GOAL_TITLE_CHANGED,
  GOAL_DESCRIPTION_CHANGED,
  GOAL_CREATE_SUCCESS,
  GOAL_CREATE_FAILED,
  GOAL_CREATE,
  GOAL_FETCH_SUCCESS
} from './types';

export const goalTitleChanged = (text) => {
  return {
    type: GOAL_TITLE_CHANGED,
    payload: text
  };
};

export const goalDescriptionChanged = (text) => {
  return {
    type: GOAL_DESCRIPTION_CHANGED,
    payload: text
  };
};

export const createGoal = ({ goalTitle, goalDescription }) => {
  return (dispatch) => {
    dispatch({ type: GOAL_CREATE });
    // create/save a goal to firebase db
    const { currentUser } = firebase.auth();
    firebase.database().ref(`users/${currentUser.uid}/goals`)
    .push({ goalTitle, goalDescription });
  };
};

export const fetchGoals = () => {
  return (dispatch) => {
    // fetch goals from firebase db
    const { currentUser } = firebase.auth();
    firebase.database().ref(`users/${currentUser.uid}/goals`)
    .on('value', snapshot => {
      dispatch({ type: GOAL_FETCH_SUCCESS, payload: snapshot.val() })
    });
  };
};

const goalCreateSuccess = (dispatch, goals) => {
  dispatch({
    type: GOAL_CREATE_SUCCESS,
    payload: goals
  });
  RootNavigation.navigate('Profile',{});
};

const goalCreateFailed = (dispatch) => {
  dispatch({
    type: GOAL_CREATE_FAILED
  });
};
