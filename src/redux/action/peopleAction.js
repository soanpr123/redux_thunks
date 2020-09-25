import {
  FETCHING_PEOPLE_FAILURE,
  FETCHING_PEOPLE_SUCCESS,
  FETCHING_PEOPLE_REQUEST,
} from './types';

export const fetchingPeopleRequest = () => ({
  type: FETCHING_PEOPLE_REQUEST,
});

export const fetchingPeopleSuccess = (json) => ({
  type: FETCHING_PEOPLE_SUCCESS,
  payload: json,
});

export const fetchingPeopleFailure = (error) => ({
  type: FETCHING_PEOPLE_FAILURE,
  payload: error,
});

export const fetchPeople = () => async (dispatch) => {
  try {
    dispatch({type: FETCHING_PEOPLE_REQUEST});
    const requestUrl =
      'http://js-post-api.herokuapp.com/api/posts?_limit=50&_page=1';
    const response = await fetch(requestUrl);
    const responseJSON = await response.json();
    console.log(responseJSON);
    dispatch(fetchingPeopleSuccess(responseJSON));
  } catch (error) {
    dispatch(fetchingPeopleFailure(error));
  }
};
