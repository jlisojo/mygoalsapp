import * as firebase from 'firebase';
import uuid from 'uuid';
import * as RootNavigation from '../navigation/RootNavigation.js';
import {
  GOAL_TITLE_CHANGED,
  GOAL_DESCRIPTION_CHANGED,
  GOAL_IMAGE_CHANGED,
  GOAL_CREATE_SUCCESS,
  GOAL_CREATE_FAILED,
  GOAL_CREATE,
  GOAL_UPDATE,
  GOAL_SAVE,
  GOAL_FETCH_SUCCESS
} from './types';

export const goalUpdate = ({ prop, value }) => {
  return {
    type: GOAL_UPDATE,
    payload: { prop, value }
  };
};

// export const goalTitleChanged = (text) => {
//   return {
//     type: GOAL_TITLE_CHANGED,
//     payload: text
//   };
// };
//
// export const goalDescriptionChanged = (text) => {
//   return {
//     type: GOAL_DESCRIPTION_CHANGED,
//     payload: text
//   };
// };
//
// export const goalImageChanged = (image) => {
//   return {
//     type: GOAL_IMAGE_CHANGED,
//     payload: image
//   };
// };

function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

async function uploadImageAsync(uri) {
  // Why are we using XMLHttpRequest? See:
  // https://github.com/expo/expo/issues/2402#issuecomment-443726662
  const blob = await new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.onload = function() {
      resolve(xhr.response);
    };
    xhr.onerror = function(e) {
      console.log(e);
      reject(new TypeError('Network request failed'));
    };
    xhr.responseType = 'blob';
    xhr.open('GET', uri, true);
    xhr.send(null);
  });

  const { currentUser } = firebase.auth();
  const fileExtension = uri.split('.').pop();
  const uuid = uuidv4();//uuid.v4();
  const fileName = `${uuid}.${fileExtension}`;
  const ref = firebase
    .storage()
    .ref(`users/${currentUser.uid}/goal_images`)
    .child(fileName);
  const snapshot = await ref.put(blob);

  // We're done with the blob, close and release it
  blob.close();
  const goalImageURL = await snapshot.ref.getDownloadURL();

  return { fileName, goalImageURL };
}


export const createGoal = ({ goalTitle, goalDescription, goalImage }) => {
  return async (dispatch) => {
    dispatch({ type: GOAL_CREATE });
    // create/save a goal to firebase db
    const { currentUser } = firebase.auth();
    if(goalImage) {
      const { fileName, goalImageURL } = await uploadImageAsync(goalImage);
      //console.log("goalImageURL: " + goalImageURL);

      firebase.database().ref(`users/${currentUser.uid}/goals`)
      .push({ goalTitle, goalDescription, goalImage: goalImageURL })
      .then((snap) => {
        const goalID = snap.key;
        firebase.database().ref(`users/${currentUser.uid}/goals/${goalID}`)
        .set({ goalID, goalTitle, goalDescription, fileName, goalImage: goalImageURL });
      });
    } else {
      //firebase.database().ref(`users/${currentUser.uid}/goals`)
      //.push({ goalTitle, goalDescription });
    }
  };
};

export const editGoal = ({ goalTitle, goalDescription, fileName, goalImage, key }) => {
  return async (dispatch) => {
    dispatch({ type: GOAL_SAVE });
    // create/save a goal to firebase db
    const { currentUser } = firebase.auth();
    if(goalImage) {
      const goalImageURL = await uploadImageAsync(goalImage);
      //console.log("goalImageURL: " + goalImageURL);
      firebase.database().ref(`users/${currentUser.uid}/goals/${key}`)
      .set({ key, goalTitle, goalDescription, fileName, goalImage: goalImageURL });
    } else {
      //firebase.database().ref(`users/${currentUser.uid}/goals`)
      //.push({ goalTitle, goalDescription });
    }
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
  return (dispatch) => {
    dispatch({
      type: GOAL_CREATE_SUCCESS,
      payload: goals
    });
    RootNavigation.navigate('Profile',{});
  };
};

const goalCreateFailed = (dispatch) => {
  dispatch({
    type: GOAL_CREATE_FAILED
  });
};
