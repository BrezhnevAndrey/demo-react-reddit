import { ActionCreator, Reducer } from "redux";
import {
  TMeRequest,
  TMeRequestSuccess,
  TMeRequestError,
  ME_REQUEST,
  ME_REQUEST_SUCCESS,
  ME_REQUEST_ERROR,
} from "./me/me";
import { meReducer, TMeState } from "./me/reducer";
import {
  COMMENTS_REQUEST,
  COMMENTS_REQUEST_ERROR,
  COMMENTS_REQUEST_SUCCESS,
  TCommentsRequest,
  TCommentsRequestError,
  TCommentsRequestSuccess,
} from "./comments/comments";
import { commentsReducer, TCommentsState } from './comments/reducer';


const SET_USERID = "SET_USERID";
export type TUserIdAction = {
  type: typeof SET_USERID;
  userId: string;
};
export const setUserId: ActionCreator<TUserIdAction> = (userId) => ({
  type: SET_USERID,
  userId,
});

const COMMENT_UPDATE = "COMMENT_UPDATE";
export type TCommentAction = {
  type: typeof COMMENT_UPDATE;
  commentText: string;
};
export const updateComment: ActionCreator<TCommentAction> = (
  commentText: string
) => ({
  type: COMMENT_UPDATE,
  commentText,
});

const SET_TOKEN = "SET_TOKEN";
export type TTokenAction = {
  type: typeof SET_TOKEN;
  token: string | null;
};
export const setToken: ActionCreator<TTokenAction> = (token: string) => ({
  type: SET_TOKEN,
  token,
});

export type TRootState = {
  commentText: string;
  token: string | null;
  me: TMeState;
  comments: TCommentsState;
  title: string;
  userId: string;
};
export const initialState: TRootState = {
  commentText: "Какой-то текст",
  token: null,
  title: "",
  userId: "",
  me: {
    loading: false,
    error: "",
    data: {},
  },
  comments: {
    loading: false,
    error: "",
    data: [],
  },
};

type TAction =
  | TTokenAction
  | TCommentAction
  | TMeRequest
  | TMeRequestSuccess
  | TMeRequestError
  | TCommentsRequest
  | TCommentsRequestSuccess
  | TCommentsRequestError
  | TUserIdAction;

export const mainReduser: Reducer<TRootState, TAction> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case COMMENT_UPDATE:
      return {
        ...state,
        commentText: action.commentText,
      };
    case SET_TOKEN:
      return {
        ...state,
        token: action.token,
      };
    case SET_USERID:
      return {
        ...state,
        userId: action.userId,
      };
    case ME_REQUEST:
    case ME_REQUEST_SUCCESS:
    case ME_REQUEST_ERROR:
      return {
        ...state,
        me: meReducer(state.me, action),
      };
    case COMMENTS_REQUEST:
    case COMMENTS_REQUEST_SUCCESS:
    case COMMENTS_REQUEST_ERROR:
      return {
        ...state,
        comments: commentsReducer(state.comments, action),
      };
    default:
      return state;
  }
};
