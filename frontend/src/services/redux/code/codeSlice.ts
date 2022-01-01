import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IBaseState } from "../../../lib/data/interfaces/state.interface";
import { retrieveAvailableCodesForDimensions } from "../../api/dimension.service";

const initialState: IBaseState<any> = {
  data: [],
  status: "idle",
  selected: null,
};

const codeSlice = createSlice({
  name: "codes",
  initialState,
  reducers: {
    setDimensionRequestData: (previousState) => {},
    selectActiveCodeAction: (previousState, action) => {
      return {
        ...previousState,
        selected: action.payload,
      };
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchDimensionsCodeData.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchDimensionsCodeData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = state.data.concat(action.payload);
      })
      .addCase(fetchDimensionsCodeData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const fetchDimensionsCodeData = createAsyncThunk(
  "codes/fetchDimensionsCodeData",
  async (code: any) => {
    return await retrieveAvailableCodesForDimensions(code);
  }
);

/**
 * Export the actions
 */
export const { setDimensionRequestData, selectActiveCodeAction } =
  codeSlice.actions;

export default codeSlice.reducer;
