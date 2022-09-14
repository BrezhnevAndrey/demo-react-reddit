import { ActionCreator } from "redux";

export const SET_COMMENTS = "SET_COMMENTS";
export type TSetComments = {
  type: typeof SET_COMMENTS;
  value: string;
};
export const setComments: ActionCreator<TSetComments> = (value: string) => ({
  type: SET_COMMENTS,
  value,
});

export const COMMENTS_REQUEST = "COMMENTS_REQUEST";
export type TCommentsRequest = {
  type: typeof COMMENTS_REQUEST;
};
export const commentsRequest: ActionCreator<TCommentsRequest> = () => ({
  type: COMMENTS_REQUEST,
});

export const COMMENTS_REQUEST_SUCCESS = "COMMENTS_REQUEST_SUCCESS";
export type TCommentsRequestSuccess = {
  type: typeof COMMENTS_REQUEST_SUCCESS;
  data: any;
};
export const commentsRequestSuccess = (data: any) => ({
  type: COMMENTS_REQUEST_SUCCESS,
  data,
});

export const COMMENTS_REQUEST_ERROR = "COMMENTS_REQUEST_ERROR";
export type TCommentsRequestError = {
  type: typeof COMMENTS_REQUEST_ERROR;
  error: Error;
};
export const commentsRequestError = (error: Error | string) => ({
  type: COMMENTS_REQUEST_ERROR,
  error,
});
