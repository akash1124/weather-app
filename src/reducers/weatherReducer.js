import * as constant from '../constants';

const initialState = {
  data: {}
};

export function weatherReducer(state = initialState, action) {
  switch (action.type) {
    case constant.SET_WEATHER: {
      return {
        ...state,
        data: action.payload.data,
      };
    }
    default:
      return state;
  }
}
