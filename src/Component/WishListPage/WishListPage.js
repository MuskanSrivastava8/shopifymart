import React, { useState } from "react";
import { useSelector } from "react-redux";
import ItemCard from "../ProductPage/ItemCard";
import "./WishListPage.scss";
import { Navigate } from "react-router-dom";


function WishListPage() {
  const showWishListResp = useSelector((store) => store.STORE.wishlist);
  const itemData = useSelector((store) => store.STORE.itemData);
  let wishListDetails = showWishListResp.map((i) => {
    return itemData.filter((data) => {
      return data.id === i;
    });
  });
  const showHomePageComponentResp = useSelector(
    (store) => store.STORE.showHomePageComponent
  );
  return (
    <>
    {showHomePageComponentResp ? <Navigate to="/ProductPage" replace={true} /> : null}
      <div className="Wishlist_main_div">
        {wishListDetails &&
          wishListDetails.map((i) => {
            return i.map((item) => {
              return <ItemCard itemsData={item} />;
            });
          })}
      </div>
    </>
  );
}

export default WishListPage;
