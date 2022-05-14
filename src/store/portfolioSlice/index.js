import { createSlice } from "@reduxjs/toolkit";
import { portfolio } from "./imeges"

export const { actions, reducer } = createSlice({
  name: "tasks",
  initialState: portfolio,
  reducers: {
  },
});
