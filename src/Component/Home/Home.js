import React from "react";
import ProductPage from "../ProductPage/ProductPage";
import Menu from "../Menu/Menu";
import Footer from "../Footer/Footer";
import { Route, Routes } from "react-router-dom";
import CatagoryDetail from "../ProductPage/CatagoryDetail";

function Home() {
  return (
    <div>
      <Menu />
      <Routes>
        <Route exact path="/" element={<ProductPage />} />
        <Route exact path="/ProductPage" element={<ProductPage />} />
        <Route exact path="/CatagoryDetail" element={<CatagoryDetail />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default Home;
