import { useCallback } from "react";
import { SET_LOADER, SET_DATA } from "../constants";

const useActions = (state, dispatch) => {
  // Setters
  const setLoader = payload => dispatch({ type: SET_LOADER, payload });
  const setData = payload => {
    console.log('storing data', payload);
    return dispatch({ type: SET_DATA, payload });
  };

  const useAction = action => useCallback(action, [dispatch, action]);

  return {
    setData: useAction(setData),
    setLoader: useAction(setLoader)
  };
};

export default useActions;
