import {
  GOAL_FETCH_SUCCESS
} from '../actions/types';

const INITIAL_STATE = { goalsData: {} };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GOAL_FETCH_SUCCESS:
      // console.log(action);
      return { ...state, goalsData: action.payload }
    default:
      return state;
  }
};
