import { combineReducers } from 'redux';
import weather from './weather';

// Future-proofing!
export default combineReducers({
	weather,
});