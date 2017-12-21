import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

// application reducers
import AppReducer from './reducer_app';

const rootReducer = combineReducers({
  app: AppReducer,
  form: formReducer
});

export default rootReducer;
