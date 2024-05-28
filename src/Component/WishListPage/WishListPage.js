import React, { useState } from "react";
import { useSelector } from "react-redux";
import ItemCard from "../ProductPage/ItemCard";
import "./WishListPage.scss";

function WishListPage() {
  const showWishListResp = useSelector((store) => store.STORE.wishlist);
  const itemData = useSelector((store) => store.STORE.itemData);
  let wishListDetails = showWishListResp.map((i) => {
    return itemData.filter((data) => {
      return data.id === i;
    });
  });
  return (
    <>
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
