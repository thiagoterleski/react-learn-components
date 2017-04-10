import { TOOGLE_DAY_NIGHT } from '../actions/types';

const INITIAL_STATE = {
  isNight: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOOGLE_DAY_NIGHT:
      const isNight = !state.isNight;
      return [ ...state, isNight ];
    default:
      return state;
  }
};
