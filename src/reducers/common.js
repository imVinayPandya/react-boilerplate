import { UPDATE_NAV_TITLE } from '../types';

export default function common(state = {}, action = {}) {
  switch (action.type) {
    case UPDATE_NAV_TITLE:
      return action.title;

    default: return state;
  }
}