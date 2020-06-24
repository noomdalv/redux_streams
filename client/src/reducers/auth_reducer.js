import { SIGN_IN, SIGN_OUT } from '../actions/types';

const INIT_STATE = {
	isSignedIn: null
};

export default (state = INIT_STATE, action) => {
	switch (action.type) {
		case SIGN_IN:
			return { ...state, isSignedIn: true };
		case SIGN_OUT:
		return { ...state, isSignedIn: false };
		default:
			return state;
	}
};
