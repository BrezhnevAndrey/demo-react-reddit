import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { TRootState, setToken } from "../reducer";

export const saveToken =
  (): ThunkAction<void, TRootState, unknown, Action<any>> => (dispatch) => {
    if (window.__token__ && window.__token__ !== "undefined") {
      localStorage.setItem("token", window.__token__);
      dispatch(setToken(window.__token__));
    }
  };
