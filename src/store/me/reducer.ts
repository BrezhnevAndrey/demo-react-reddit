import axios from "axios";
import { Reducer } from "react";
import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { TRootState } from "../reducer";
import {
  IUserData,
  meRequest,
  meRequestError,
  meRequestSuccess,
  ME_REQUEST,
  ME_REQUEST_ERROR,
  ME_REQUEST_SUCCESS,
  TMeRequest,
  TMeRequestError,
  TMeRequestSuccess,
} from "./me";

export type TMeState = {
  loading: boolean;
  error: Error | string;
  data: IUserData;
};

type TMeActions = TMeRequest | TMeRequestSuccess | TMeRequestError;

export const meReducer: Reducer<TMeState, TMeActions> = (state, action) => {
  switch (action.type) {
    case ME_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ME_REQUEST_SUCCESS:
      return {
        ...state,
        data: action.data,
        loading: false,
      };
    case ME_REQUEST_ERROR:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    default:
      return state;
  }
};

export const meRequestAsync =
  (): ThunkAction<void, TRootState, unknown, Action<any>> =>
  (dispatch, getState) => {
    dispatch(meRequest());
    axios
      .get("https://oauth.reddit.com/api/v1/me.json", {
        headers: { Authorization: `Bearer ${getState().token}` },
      })
      .then((resp) => {
        const userData = resp.data;
        const result: IUserData = {
          name: userData.name,
          iconImg: userData.snoovatar_img,
        };
        dispatch(meRequestSuccess(result));
      })
      .catch((error) => {
        console.log(error);
        dispatch(meRequestError(error));
      });
  };
