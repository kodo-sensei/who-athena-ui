import { combineReducers } from "@reduxjs/toolkit";
import codeSlice from "../services/redux/code/codeSlice";
import dimensionSlice from "../services/redux/dimension/dimensionSlice";

export const rootReducer = combineReducers({
  dimensions: dimensionSlice,
  codes: codeSlice
});

export type RootState = ReturnType<typeof rootReducer>;
