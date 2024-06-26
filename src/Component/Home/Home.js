import React, { useEffect} from "react";
import ProductPage from "../ProductPage/ProductPage";
import Menu from "../Menu/Menu";
import Footer from "../Footer/Footer";
import { Route, Routes } from "react-router-dom";
import CatagoryDetail from "../ProductPage/CatagoryDetail";
import DetailPage from "../DetailPage/detailPage";
import WishListPage from "../WishListPage/WishListPage";
import CartPage from "../CartPage/CartPage";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import UserPage from "../UserPage/UserPage";
import CheckoutPage from "../CheckoutPage/CheckoutPage";
import OrderPlacedPage from "../OrderPlacedPage/OrderPlacedPage";

function Home() {
  const renderedComponentResp = useSelector(
    (store) => store.STORE.renderedComponent
  );
  const navigate = useNavigate();

  useEffect(() => {
    navigate(renderedComponentResp);
  }, [renderedComponentResp, navigate]);

  return (
    <div>
      <Menu />
      <Routes>
        <Route exact path="/" element={<ProductPage />} />
        <Route exact path="/ProductPage" element={<ProductPage />} />
        <Route exact path="/CatagoryDetail" element={<CatagoryDetail />} />
        <Route exact path="/DetailPage" element={<DetailPage />} />
        <Route exact path="/WishListPage" element={<WishListPage />} />
        <Route exact path="/CartPage" element={<CartPage />} />
        <Route exact path="/UserPage" element={<UserPage />} />
        <Route exact path="/CheckoutPage" element={<CheckoutPage />} />   
        <Route exact path="/OrderPlacedPage" element={<OrderPlacedPage />} />     
      </Routes>
      <Footer />
    </div>
  );
}

export default Home;
