import Navbar from "./Navbar";
import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import ProductsPage from "./ProductsPage";
import ProductsDetailsPage from "./ProductsDetailsPage";
export const Routes2 = () => {
  return (
    <>
      <Navbar />
      {/* Add Routes here */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:id" element={<ProductsDetailsPage />} />
      </Routes>
    </>
  );
};
