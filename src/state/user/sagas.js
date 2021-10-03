import { takeLatest, call, put } from "redux-saga/effects";
import { requestLoginUser, requestGetUser } from "./requests";
import { loginUser, setError, setUser, getUser } from "./reducer";

function* handleLoginUser({ payload }) {
  try {
    const { data, isError, errorMessages } = yield call(
      requestLoginUser,
      payload
    );

    if (!isError) {
      yield put(setUser({ data }));
      sessionStorage.setItem("token", data.token);
      if (data.rememberToken) {
        localStorage.setItem("rememberToken", data.rememberToken);
      }
    } else {
      yield put(setError(errorMessages));
    }
  } catch (error) {
    console.log(error);
  }
}

function* handleGetUser() {
  try {
    const { data, isError, errorMessages } = yield call(requestGetUser);
    if (!isError) {
      yield put(setUser({ data }));
      sessionStorage.setItem("token", data.token);
      if (data.rememberToken) {
        localStorage.setItem("rememberToken", data.rememberToken);
      }
    } else {
      yield put(setError(errorMessages));
    }
  } catch (error) {
    console.log(error);
  }
}

const exportArray = [
  takeLatest(loginUser.type, handleLoginUser),
  takeLatest(getUser.type, handleGetUser),
];

export default exportArray;
