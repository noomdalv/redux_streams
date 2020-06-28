import { combineReducers } from 'redux';
import auth_reducer from './auth_reducer';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
	auth: auth_reducer,
	form: formReducer
})
