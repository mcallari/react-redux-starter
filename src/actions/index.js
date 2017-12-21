import axios from 'axios';

// action types
export const FETCH_APP = 'fetch_app';
export const FETCH_PAGE = 'fetch_page';

// action creators
export function fetchApp() {
  // for an api call:
  // const request = axios.get('api_url')'
  const request = 'Action Payload';
  return {
    type: FETCH_APP,
    payload: { message: request }
  };
}

export function fetchPage() {
  const request = 'About Payload';
  return {
    type: FETCH_PAGE,
    payload: { text: request }
  };
}
