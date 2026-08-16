import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useGetProfileQuery } from "../features/auth/authAPI";
import { setUser } from "../features/auth/authSlice";

function useAuthLoader() {
  const dispatch = useDispatch();

  const token = useSelector((state) => state.auth.token);

  const { data } = useGetProfileQuery(undefined, {
    skip: !token,
  });

  useEffect(() => {
    if (data?.user && token) {
      dispatch(
        setUser({
          user: data.user,
          token,
        }),
      );
    }
  }, [data, token, dispatch]);
}

export default useAuthLoader;
