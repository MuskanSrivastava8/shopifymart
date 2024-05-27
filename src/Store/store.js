import { createSlice } from "@reduxjs/toolkit";

export const storeSlice = createSlice({
  name: "storeSlice",
  initialState: {
    itemData: [],
    wishlist: [],
    cart: [],
    catagorySelected: undefined,
    itemSelected: undefined,
    showWishListComponent: false,
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
      else {
        const index = storeSlice.wishlist.indexOf(action.payload);
        if (index > -1) { 
          storeSlice.wishlist.splice(index, 1);
        }
        
      }
    },
    setShowWishListComponent: (storeSlice, action) => {
      storeSlice.showWishListComponent = !action.payload;
    },
    setShowWishListComponentBackBtn: (storeSlice, action) => {
      storeSlice.showWishListComponent = false;
    },
  },
});
export const {
  addWishlistAction,
  updateItemDataAction,
  updateCatagorySelected,
  updateItemSelected,
  updateWishList,
  setShowWishListComponent,
  setShowWishListComponentBackBtn,
} = storeSlice.actions;
