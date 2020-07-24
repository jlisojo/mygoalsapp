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
    .push({ goalTitle, goalDescription })

    // console.log("goalId");
    // console.log(goalId.split("/").pop());

    .then((goal) => {

      // const goalUrl = JSON.stringify(goal);
      // var index = goalUrl.lastIndexOf("/") + 1;
      // var goalId = goalUrl.substr(index);
      //
      // console.log("goal");
      // console.log(goal);
      //
      // console.log("goalId");
      // console.log(goalId);
      //
      // console.log("goalImage");
      // console.log(goalImage);

      // Get a reference to the storage service, which is used to create references in your storage bucket
      // var storage = firebase.storage();

      // // Create a root reference
      // var storageRef = firebase.storage().ref();
      //
      // // Create a reference to 'mountains.jpg'
      // var mountainsRef = storageRef.child('mountains.jpg');
      //
      // // Create a reference to 'images/mountains.jpg'
      // var mountainImagesRef = storageRef.child('images/mountains.jpg');
      //
      // // While the file names are the same, the references point to different files
      // mountainsRef.name === mountainImagesRef.name            // true
      // mountainsRef.fullPath === mountainImagesRef.fullPath    // false

    });
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
