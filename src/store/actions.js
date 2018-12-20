import { CHANGE_SEARCH_FIELD, REQUEST_ROBOTS_FAILED, REQUEST_ROBOTS_SUCCESS, REQUEST_ROBOTS_PENDING } from './actionTypes';

export const setSearchField = (text) => ({
  type: CHANGE_SEARCH_FIELD,
  payload: text
})

export const requestRobots = () => {
  return (dispatch) => {
    dispatch({type: REQUEST_ROBOTS_PENDING});
    fetch('https://jsonplaceholder.typicode.com/users')
      .then( (response) => {
        return response.json();
      })
      .then( (users) => {
        dispatch({type: REQUEST_ROBOTS_SUCCESS, payload: users});
      })
      .catch( (error) => {
        dispatch({type: REQUEST_ROBOTS_FAILED, payload: error});
      })
  }
}
