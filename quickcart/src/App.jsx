import Header from "./components/Header";
import "./styles/styles.css";
import React from "react";
import ProductList from "./components/ProductList";
import products from "./data/products";

function App() {
  return (
    <div>
      <Header />   {/* ✅ use Header here */}
      <ProductList products={products} />
    </div>
  );
}

export default App;