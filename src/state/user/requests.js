import http from "../../libs/http";

export const requestLoginUser = (payload = {}) => {
  const endpoint = payload.rememberToken ? "login-token" : "login";
  return http.route(endpoint).post({ ...payload });
};

export const requestGetUser = () => {
  return http.route("user").get();
};
