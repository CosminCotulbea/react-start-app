import React, {useState} from "react";
import {Redirect} from "react-router-dom";

export const GuestWrapper = (WrappedComponent) => {
    return function ProtectedWrapper(props) {
        const [redirect] = useState(() => {
            const rememberToken = localStorage.getItem("rememberToken");
            const token = sessionStorage.getItem("token");

            return !!(rememberToken || token);
        });

        return (
            (redirect && <Redirect to={'/'}/>) || <WrappedComponent {...props} />
        );
    };
};
