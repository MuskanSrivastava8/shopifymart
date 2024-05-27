import { createSlice } from "@reduxjs/toolkit";

export const storeSlice = createSlice({
  name: "storeSlice",
  initialState: {
    itemData: [],
    wishlist: [],
    cart: [],
    catagorySelected: undefined,
    itemSelected: undefined,
    theme: [],
  },
  reducers: {
    updateItemDataAction: (storeSlice, action) => {
      storeSlice.itemData = action.payload;
    },

    addWishlistAction: (storeSlice, action) => {
      storeSlice.expenseList.push(action.payload);
    },

    updateCatagorySelected: (storeSlice, action) => {
      storeSlice.catagorySelected = action.payload;
    },

    updateItemSelected: (storeSlice, action) => {
      storeSlice.itemSelected = action.payload;
    },
    updateWishList: (storeSlice, action) => {
      if (!storeSlice.wishlist.includes(action.payload)) {
        storeSlice.wishlist.push(action.payload);
      }
    },
  },
});
export const {
  addWishlistAction,
  updateItemDataAction,
  updateCatagorySelected,
  updateItemSelected,
  updateWishList,
} = storeSlice.actions;
