import {
  GOAL_TITLE_CHANGED,
  GOAL_DESCRIPTION_CHANGED,
  GOAL_IMAGE_CHANGED,
  GOAL_CREATE_SUCCESS,
  GOAL_CREATE_FAILED,
  GOAL_CREATE,
  GOAL_UPDATE,
  GOAL_SAVE,
  GOAL_SAVE_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
  goalID: '',
  goalTitle: '',
  goalDescription: '',
  fileName: '',
  goalImage: null,
  prevGoalImage: null,
  hasNewGoalImage: false,
  user: null,
  errorMessage: '',
  isLoading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GOAL_TITLE_CHANGED:
      return { ...state, goalTitle: action.payload };
    case GOAL_DESCRIPTION_CHANGED:
      return { ...state, goalDescription: action.payload };
    case GOAL_IMAGE_CHANGED:
      return { ...state, goalImage: action.payload };
    case GOAL_CREATE:
      return { ...state, ...INITIAL_STATE, goals: action.payload };
    case GOAL_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value };
    case GOAL_SAVE:
      return { ...state, goals: action.payload };
    case GOAL_SAVE_SUCCESS:
      return { ...state, ...INITIAL_STATE, goals: action.payload };
    case GOAL_CREATE_SUCCESS:
      return { ...state, goals: action.payload, errorMessage: '', isLoading: false };
    case GOAL_CREATE_FAILED:
      return { ...state, errorMessage: 'Goal Creation Failed', isLoading: false };
    default:
      return state;
  }
};
