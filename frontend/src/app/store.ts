import { configureStore } from "@reduxjs/toolkit";
import codeSlice from "../services/redux/code/codeSlice";
import dimensionSlice from "../services/redux/dimension/dimensionSlice";

export default configureStore({
  reducer: {
    dimensions: dimensionSlice,
    codes: codeSlice
  },
});
