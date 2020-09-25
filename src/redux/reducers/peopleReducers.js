import {
  FETCHING_PEOPLE_FAILURE,
  FETCHING_PEOPLE_SUCCESS,
  FETCHING_PEOPLE_REQUEST,
} from '../action/types';
const initialState = {
  isFetching: false,
  errorMessage: null,
  data: null,
};

export const peopleReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_PEOPLE_REQUEST:
      return {...state, isFetching: true};
    case FETCHING_PEOPLE_FAILURE:
      return {...state, isFetching: false, errorMessage: action.errorMessage};
    case FETCHING_PEOPLE_SUCCESS:
      return {...state, isFetching: false, data: action.payload};
    default:
      return state;
  }
};
