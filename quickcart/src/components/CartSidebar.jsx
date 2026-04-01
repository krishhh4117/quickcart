function CartSidebar({ isOpen, cart, onClose, updateQuantity, removeFromCart }) {
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div style={{
      position: "fixed",
      right: isOpen ? 0 : "-300px",
      top: 0,
      width: "300px",
      height: "100%",
      background: "#fff",
      padding: "20px",
      transition: "0.3s",
      borderLeft: "1px solid #ccc"
    }}>
      <button onClick={onClose}>Close</button>

      <h2>Your Cart</h2>

      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        cart.map(item => (
          <div key={item.id} style={{ marginBottom: "10px" }}>
            <h4>{item.name}</h4>
            <p>₹{item.price}</p>

            <button onClick={() => updateQuantity(item.id, -1)}>-</button>
            {item.quantity}
            <button onClick={() => updateQuantity(item.id, 1)}>+</button>

            <button onClick={() => removeFromCart(item.id)}>
              Remove
            </button>
          </div>
        ))
      )}

      <h3>Total: ₹{total}</h3>
    </div>
  );
}

export default CartSidebar;