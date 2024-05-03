import { configureStore } from "@reduxjs/toolkit";
import { storeSlice } from "./store";

const store = configureStore({
  reducer: {
    STORE: storeSlice.reducer,
  },
});
export { store };
