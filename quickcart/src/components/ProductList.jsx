import ProductCard from "./ProductCard";
import products from "../data/products";

function ProductList({ onAddToCart }) {
  return (
    <div style={{ display: "flex", gap: "20px", padding: "20px" }}>
      {products.map(product => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  );
}

export default ProductList;