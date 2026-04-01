function ProductCard({ product, onAddToCart }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", width: "200px" }}>
      <img src={product.image} alt={product.name} width="100%" />

      <h3>{product.name}</h3>
      <p>₹{product.price}</p>

      <button onClick={() => onAddToCart(product)}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;