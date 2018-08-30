import { combineReducers } from 'redux';

import user from './reducers/user';
import common from './reducers/common';

export default combineReducers({
  user,
  common
});