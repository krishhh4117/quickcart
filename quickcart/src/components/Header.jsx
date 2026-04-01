import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Header() {
  const { cart } = useCart();

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav style={{ display: "flex", gap: "20px" }}>
      <Link to="/">Home</Link>
      <Link to="/category/phone">Phones</Link>
      <Link to="/category/laptop">Laptops</Link>
      <Link to="/cart">Cart ({totalItems})</Link>
    </nav>
  );
}

export default Header;