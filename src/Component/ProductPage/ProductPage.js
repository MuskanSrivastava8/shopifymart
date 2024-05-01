import React from "react";
import OrderData from "../../Data Response/OrderData";

const ProductPage = () => {
  const OrderDataRes = OrderData;
  fetch("https://dummyjson.com/products")
    .then((res) => res.json())
    .then(console.log);
  return (
    <div>
      {OrderDataRes.map((i) => {
        return (
          <li>
            {i.category} 
            <img src={i.images[0]} alt="img"></img>
          </li>
        );
      })}
    </div>
  );
};

export default ProductPage;
