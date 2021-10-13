import http from "../../libs/http";

export const requestLoginUser = (payload = {}) => {
    return http
        .route(payload.rememberToken ? "login-token" : "login")
        .post({...payload});
};

export const requestGetUser = () => {
    return http
        .route("user")
        .get();
};
