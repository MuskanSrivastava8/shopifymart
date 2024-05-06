import React from "react";
import ItemCard from "./ItemCard";
import { useSelector } from "react-redux";
import "./catagoryDetail.scss"

const CatagoryDetail = () => {
  const catagorySelectedResp = useSelector(
    (store) => store.STORE.catagorySelected
  );
  const itemData = useSelector((store) => store.STORE.itemData);
  const catagoryFilterItems = itemData.filter((i) => {
    return i.category === catagorySelectedResp;
  });
  return (
    <div className="main_catagoryDetail">
      {catagorySelectedResp && catagoryFilterItems.map((i) => {
        return <ItemCard itemsData={i} />;
      })}
    </div>
  );
};

export default CatagoryDetail;
