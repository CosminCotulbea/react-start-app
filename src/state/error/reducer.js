import {createSlice} from "@reduxjs/toolkit";

const initialState = Object.freeze({
    error: false
});

const error = createSlice(
    {
        name: "error",
        initialState,
        reducers: {
            resetError: () => initialState,
            setError: (state, action) => {
                state.error = action.payload;
            }
        }
    }
);

export const {
    getError,
    setError
} = error.actions;

export default error.reducer;
