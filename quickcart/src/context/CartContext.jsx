import { createContext, useContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const CartContext = createContext();

export const CartProvider = ({ children }) => {

  // ✅ using localStorage instead of useState
  const [cart, setCart] = useLocalStorage("cart", []);

  // ✅ Add to cart
  const addToCart = (product) => {
    const existing = cart.find(item => item.id === product.id);

    if (existing) {
      setCart(cart.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  // ✅ Update quantity
  const updateQuantity = (id, change) => {
    setCart(
      cart
        .map(item =>
          item.id === id
            ? { ...item, quantity: item.quantity + change }
            : item
        )
        .filter(item => item.quantity > 0)
    );
  };

  // ✅ Remove item
  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        updateQuantity,
        removeFromCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// ✅ custom hook
export const useCart = () => useContext(CartContext);