import { createSelector } from "@reduxjs/toolkit";

const userSelector = (state) => state.user;
const userNameSelector = (state) =>
  (state.user.data && state.user.data.name) || state.user.data;

const userParsedNameSelector = () =>
  createSelector(userNameSelector, (name) => "Mr." + name);

export { userSelector, userNameSelector, userParsedNameSelector };
