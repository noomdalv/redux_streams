import { combineReducers } from 'redux';
import auth_reducer from './auth_reducer';
import stream_reducer from './stream_reducer';
import { reducer as form_reducer } from 'redux-form';

export default combineReducers({
	auth: auth_reducer,
	form: form_reducer,
	streams: stream_reducer
})
