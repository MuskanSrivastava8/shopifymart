import { createSlice } from "@reduxjs/toolkit";

export const storeSlice = createSlice({
  name: "storeSlice",
  initialState: {
    itemData:[],
    wishlist: [],
    cart: [],
    catagorySelected: [],
    theme: [],
  },
  reducers: {
    updateItemDataAction: (storeSlice, action) => {
      storeSlice.itemData=action.payload;
    },

    addWishlistAction: (storeSlice, action) => {
      storeSlice.expenseList.push(action.payload);
    },

    updateCatagorySelected : (storeSlice, action) => {
      storeSlice.catagorySelected=action.payload;
    }
  },
});
export const { addWishlistAction, updateItemDataAction, updateCatagorySelected } = storeSlice.actions;
