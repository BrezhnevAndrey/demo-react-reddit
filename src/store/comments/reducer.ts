import axios from "axios";
import { Reducer } from "react";
import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { TRootState } from "../reducer";

import {
  TCommentsRequestError,
  TCommentsRequest,
  TCommentsRequestSuccess,
  COMMENTS_REQUEST,
  COMMENTS_REQUEST_SUCCESS,
  COMMENTS_REQUEST_ERROR,
  commentsRequest,
  commentsRequestSuccess,
  commentsRequestError,
} from "./comments";

export type TCommentsState = {
  loading: boolean;
  error: Error | string;
  data: any;
};

type TCommentsActions =
  | TCommentsRequestError
  | TCommentsRequestSuccess
  | TCommentsRequest;
export const commentsReducer: Reducer<TCommentsState, TCommentsActions> = (
  state,
  action
) => {
  switch (action.type) {
    case COMMENTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case COMMENTS_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.data,
      };
    case COMMENTS_REQUEST_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export const commentsRequestAsync =
  (): ThunkAction<void, TRootState, unknown, Action<any>> =>
  (dispatch, getState) => {
    dispatch(commentsRequest());
    axios
      .get(`https://oauth.reddit.com/comments/${getState().userId}`, {
        headers: { Authorization: `Bearer ${getState().token}` },
      })
      .then((resp) => {
        const postData = resp.data[0].data.children[0].data;
        const commentData = resp.data[1].data.children;
        dispatch(commentsRequestSuccess({ commentData, postData }));
      })
      .catch((error) => {
        console.log(error);
        dispatch(commentsRequestError(error));
      });
  };
