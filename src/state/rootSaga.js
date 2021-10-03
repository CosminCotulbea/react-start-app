import { all } from "redux-saga/effects";
import userSagas from "./user/sagas";

export default function* rootSaga() {
  const sagas = [...userSagas];
  yield all(sagas);
}
