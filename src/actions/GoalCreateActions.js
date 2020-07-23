import * as firebase from 'firebase';
import * as RootNavigation from '../navigation/RootNavigation.js';
import {
  GOAL_TITLE_CHANGED,
  GOAL_DESCRIPTION_CHANGED,
  GOAL_IMAGE_CHANGED,
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

export const goalImageChanged = (image) => {
  return {
    type: GOAL_IMAGE_CHANGED,
    payload: image
  };
};

// uploadImage = async(uri) => {
//   const response = await fetch(uri);
//   const blob = await response.blob();
//   var ref = firebase.storage().ref().child("my-image");
//   return ref.put(blob);
// }

export const createGoal = ({ goalTitle, goalDescription, goalImage }) => {
  return (dispatch) => {
    dispatch({ type: GOAL_CREATE });
    // create/save a goal to firebase db
    const { currentUser } = firebase.auth();

    const goalId = firebase.database().ref(`users/${currentUser.uid}/goals`)
    .push({ goalTitle, goalDescription });
    console.log("goalId");
    console.log(goalId.split("/").pop());

    // .then(goal => {
    //   console.log("goal");
    //   console.log(goal);
    //   // const response = fetch(goalImage.uri);
    //   // const blob = response.blob();
    //   // var ref = firebase.storage().ref(`users/${currentUser.uid}/goal_images`).child("my-image");
    // });
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
