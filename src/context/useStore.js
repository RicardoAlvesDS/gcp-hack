import { useContext } from "react";
import { store } from "./store";
import useActions from "./useActions";

const useStore = () => {
  const { state, dispatch } = useContext(store);
  const { data, options, loader } = state;
  const actions = useActions(state, dispatch);
  
  return {
    data,
    options,
    loader,
    ...state,
    ...actions
  };
};

export { useStore };
