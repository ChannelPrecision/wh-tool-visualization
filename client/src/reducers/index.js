import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import responses from './responses';

export default combineReducers({
    alert,
    auth,
    responses
});