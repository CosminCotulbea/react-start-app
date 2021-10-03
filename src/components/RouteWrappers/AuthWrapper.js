import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { userSelector } from "../../state/user/selectors";
import { loginUser, getUser } from "../../state/user/reducer";

export const AuthWrapper = (WrappedComponent) => {
  return function ProtectedWrapper(props) {
    const user = useSelector(userSelector);
    const dispatch = useDispatch();
    const [redirect] = useState(() => {
      const rememberToken = localStorage.getItem("rememberToken");
      const token = sessionStorage.getItem("token");

      if (rememberToken && !user.data) {
        let credentials = {
          rememberToken,
        };
        dispatch(loginUser(credentials));
      } else {
        if (!user.data && token) {
          dispatch(getUser());
        } else {
          if (!token && window.location.pathname !== "/login") {
            return "/login";
          }
        }
      }

      return false;
    });

    return (
      (redirect && <Redirect to={redirect} />) || (
        <WrappedComponent {...props} />
      )
    );
  };
};
