import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IUserData } from "../store/me/me";
import { meRequestAsync} from "../store/me/reducer";
import { TRootState } from "../store/reducer";
import { useToken } from './useToken';

export function useUserData() {
  const data = useSelector<TRootState, IUserData>((state) => state.me.data);
  const loading = useSelector<TRootState, boolean>((state) => state.me.loading);
  const token = useToken();
  const dispatch = useDispatch();
  useEffect(() => {
    if (!token) return;
    dispatch(meRequestAsync());
  }, [token]);

  return {
    data,
    loading,
  };
}
