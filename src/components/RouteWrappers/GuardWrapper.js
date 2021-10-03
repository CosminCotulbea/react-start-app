import React, { useState } from "react";
import { Redirect } from "react-router-dom";

export const GuardWrapper = (WrappedComponent) => {
  return function ProtectedWrapper(props) {

    const [redirect] = useState(() => {
        const rememberToken = localStorage.getItem("rememberToken");
        const token = sessionStorage.getItem("token");

        if ((rememberToken || token) && window.location.pathname === "/login"){
            return "/";
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
