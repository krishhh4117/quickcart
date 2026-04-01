import { useCart } from "../context/CartContext";

function CartPage() {
  const { cart, updateQuantity, removeFromCart } = useCart();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div>
      <h2>Your Cart</h2>

      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        cart.map(item => (
          <div key={item.id}>
            <h3>{item.name}</h3>
            <p>₹{item.price}</p>

            <button onClick={() => updateQuantity(item.id, -1)}>-</button>
            {item.quantity}
            <button onClick={() => updateQuantity(item.id, 1)}>+</button>

            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </div>
        ))
      )}

      <h3>Total: ₹{total}</h3>
    </div>
  );
}

export default CartPage;