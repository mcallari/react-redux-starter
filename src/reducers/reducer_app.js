import { FETCH_APP, FETCH_PAGE } from '../actions';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_APP:
      return { ...state, message: action.payload.message }
    case FETCH_PAGE:
      return { ...state, text: action.payload.text }
    default:
      return state;
  }
}
