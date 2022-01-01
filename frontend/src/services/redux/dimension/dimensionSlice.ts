import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IBaseState } from "../../../lib/data/interfaces/state.interface";
import { retrieveAvailableDimensions } from "../../api/dimension.service";

const initialState: IBaseState<any> = {
  data: {},
  status: "idle",
  selected: null
};

const dimensionSlice = createSlice({
  name: "dimensions",
  initialState,
  reducers: {
    setDimensionRequestData: (previousState) => {},
    selectActiveDimensionAction: (previousState, action) => {
      return {
        ...previousState,
        selected: action.payload,
      };
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchDimensionsData.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchDimensionsData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchDimensionsData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const fetchDimensionsData = createAsyncThunk(
  "dimensions/fetchDimensionsData",
  async () => {
    return await retrieveAvailableDimensions();
  }
);

/**
 * Export the actions
 */
export const { setDimensionRequestData, selectActiveDimensionAction } = dimensionSlice.actions;

export default dimensionSlice.reducer;
