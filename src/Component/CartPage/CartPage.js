import React from "react";
import { useSelector } from "react-redux";
import ItemCard from "../ProductPage/ItemCard";
import { Navigate } from "react-router-dom";

function CartPage() {
  //   const showWishListResp = useSelector((store) => store.STORE.wishlist);
  //   const itemData = useSelector((store) => store.STORE.itemData);
  //   let wishListDetails = showWishListResp.map((i) => {
  //     return itemData.filter((data) => {
  //       return data.id === i;
  //     });
  //   });
  const showHomePageComponentResp = useSelector(
    (store) => store.STORE.showHomePageComponent
  );
  const showWishListComponentResp = useSelector(
    (store) => store.STORE.showWishListComponent
  );
  return (
    <>
      {showHomePageComponentResp ? (
        <Navigate to="/ProductPage" replace={true} />
      ) : null}
      {showWishListComponentResp ? (
        <Navigate to="/WishListPage" replace={true} />
      ) : null}
      hi
    </>
  );
}

export default CartPage;
