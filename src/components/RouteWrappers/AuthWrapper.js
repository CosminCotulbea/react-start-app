import React, {useState} from "react";
import {Redirect} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {userSelector} from "../../state/user/selectors";
import {getUser, loginUser} from "../../state/user/reducer";

export const AuthWrapper = (WrappedComponent) => {
    return function ProtectedWrapper(props) {
        const user = useSelector(userSelector);
        const dispatch = useDispatch();
        const [redirect] = useState(() => {
            const rememberToken = localStorage.getItem("rememberToken");
            const token = sessionStorage.getItem("token");

            if (rememberToken && !user.data) {
                let credentials = {rememberToken};
                dispatch(loginUser(credentials));
            } else if (token && !user.data) {
                dispatch(getUser());
            } else if (window.location.pathname !== "/login") {
                return "/login";
            }

            return false;
        });

        return (
            (redirect && <Redirect to={redirect}/>) || <WrappedComponent {...props} />
        );
    };
};
