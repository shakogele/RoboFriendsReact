import { CHANGE_SEARCH_FIELD, REQUEST_ROBOTS_FAILED, REQUEST_ROBOTS_SUCCESS, REQUEST_ROBOTS_PENDING } from './actionTypes';

const initialStateSearchRobots = {
  searchField: ''
};
const initialStateRequestRobots = {
  isPending: false,
  robots: [],
  error: ''
};

export const searchRobots = (state = initialStateSearchRobots, action = {}) => {
  switch (action.type){
    case CHANGE_SEARCH_FIELD:
      return {
        ...state,
        searchField: action.payload
      };
    default:
      return state
  }
}

export const requestRobots = (state=initialStateRequestRobots, action={}) => {
  switch (action.type){
    case REQUEST_ROBOTS_PENDING:
      return{
        ...state,
        isPending: true
      };
    case REQUEST_ROBOTS_SUCCESS:
      return{
        ...state,
        robots: action.payload,
        isPending: false
      };
    case REQUEST_ROBOTS_FAILED:
      return{
        ...state,
        error: action.payload,
        isPending: false
      };
    default:
      return state
  }
}
