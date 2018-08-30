import { UPDATE_NAV_TITLE } from '../types';
// import api from '../api';

export const updateNavTitle = (title) => ({
  type: UPDATE_NAV_TITLE,
  title
});

export const changeNavTitle = (title) => (dispatch) => {
  dispatch(updateNavTitle(title));
};