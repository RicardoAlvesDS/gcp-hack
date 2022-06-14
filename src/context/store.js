import React, { createContext, useReducer } from 'react';
import PropTypes from 'prop-types';
import { SESSION_STORAGE_ENABLED, STORAGE_KEY } from '../constants';
import { loaderReducer, dataReducer, optionsReducer } from './reducers';
/**
 *
 * @returns Session storage items
 */
// const storage = () => {
//   return SESSION_STORAGE_ENABLED
//     ? JSON.parse(sessionStorage.getItem(STORAGE_KEY))
//     : {};
// };

// Defining initial state
export const initialState = {
  data: undefined,
  options: null,
  loader: { loading: true, message: undefined }
};

const store = createContext({
  state: initialState,
  dispatch: () => null
});

const { Provider } = store;

// const applicationState = { ...initialState };

// const storeReducer = (state, action) => {
//   switch (action.type) {
//     case SET_LOADER:
//       return { ...state, loader: action.loader };
//     default:
//       return state;
//   }
// };

const mainReducer = ({ data, options, loader }, action) => ({
  data: dataReducer(data, action),
  options: optionsReducer(options, action),
  loader: loaderReducer(loader, action)
});

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(mainReducer, initialState);

  window.addEventListener('beforeunload', () => {
    if (SESSION_STORAGE_ENABLED) {
      sessionStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ ...state, loader: { loading: false } })
      );
    }
  });

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

StateProvider.propTypes = {
  children: PropTypes.node
};


export { store, StateProvider };
