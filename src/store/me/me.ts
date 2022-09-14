import { ActionCreator } from "redux";

export interface IUserData {
  name?: string;
  iconImg?: string;
}

export const ME_REQUEST = "ME_REQUEST";
export type TMeRequest = {
  type: typeof ME_REQUEST;
};
export const meRequest: ActionCreator<TMeRequest> = () => ({
  type: ME_REQUEST,
});

export const ME_REQUEST_SUCCESS = "ME_REQUEST_SUCCESS";
export type TMeRequestSuccess = {
  type: typeof ME_REQUEST_SUCCESS;
  data: IUserData;
};
export const meRequestSuccess: ActionCreator<TMeRequestSuccess> = (
  data: IUserData
) => ({
  type: ME_REQUEST_SUCCESS,
  data,
});

export const ME_REQUEST_ERROR = "ME_REQUEST_ERROR";
export type TMeRequestError = {
  type: typeof ME_REQUEST_ERROR;
  error: Error;
};
export const meRequestError: ActionCreator<TMeRequestError> = (
  error: Error
) => ({
  type: ME_REQUEST_ERROR,
  error,
});
