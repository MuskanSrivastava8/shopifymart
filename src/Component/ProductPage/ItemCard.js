import React from "react";
import { FaHeart } from "react-icons/fa";
import "./itemCard.scss";

function ItemCard(itemsData) {
  const itemsDataRes = itemsData.itemsData;
  console.log(itemsDataRes);
  const priceBeforeDiscount = (
    ((itemsDataRes.discountPercentage + 100) * itemsDataRes.price) /
    100
  ).toFixed(2);
  return (
    <div className="main_ItemCard">
      <div>
        <img
          src={itemsDataRes.images[0]}
          alt="productImage"
          style={{ height: "10rem", width: "16rem" }}
        />
      </div>
      <div>
        <div className="ItemCard_info">
          <div className="ItemCard_info_data">
            <div style={{ fontWeight: "700", fontSize: "1rem" }}>
              {itemsDataRes.title}
            </div>
            <div style={{ fontSize: "small", color: "gray" }}>
              {itemsDataRes.brand}
            </div>
            <div style={{ display: "flex", gap: ".5rem" }}>
              <div style={{ fontWeight: "700", fontSize: ".8rem" }}>
                Rs {itemsDataRes.price}
              </div>
              <div
                style={{
                  fontWeight: "200",
                  fontSize: "small",
                  color: "gray",
                  textDecoration: "line-through",
                }}
              >
                ({priceBeforeDiscount})
              </div>
              <div
                style={{ fontWeight: "100", fontSize: ".7rem", color: "red" }}
              >
                ({itemsDataRes.discountPercentage} % OFF)
              </div>
            </div>
            <div>{itemsDataRes.rating}</div>
          </div>
          <div className="ItemCard_info_wishlist">
            <FaHeart style={{ color: "red", fontSize: "1.5rem" }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemCard;
