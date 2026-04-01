function Header({ totalItems, onCartClick }) {
  return (
    <header style={{ display: "flex", justifyContent: "space-between", padding: "10px" }}>
      <h1>QuickCart</h1>

      <button onClick={onCartClick}>
        🛒 Cart ({totalItems})
      </button>
    </header>
  );
}

export default Header;