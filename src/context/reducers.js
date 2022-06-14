import { SET_LOADER, SET_DATA, SET_OPTIONS } from '../constants';

export const dataReducer = (state, action) => {
  switch (action.type) {
    case SET_DATA:
      return { ...state, items: action.payload };
    default:
      return state;
  }
};

export const optionsReducer = (state, action) => {
  switch (action.type) {
    case SET_OPTIONS:
      return { ...state, options: action.payload };
    default:
      return state;
  }
};

export const loaderReducer = (state, action) => {
  switch (action.type) {
    case SET_LOADER:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
