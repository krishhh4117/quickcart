import { useParams } from "react-router-dom";
import products from "../data/products";
import ProductCard from "../components/ProductCard";

function CategoryPage() {
  const { category } = useParams();

  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(category.toLowerCase())
  );

  return (
    <div>
      <h2>{category}</h2>

      {filtered.length === 0 ? (
        <p>No products found</p>
      ) : (
        filtered.map(p => <ProductCard key={p.id} product={p} />)
      )}
    </div>
  );
}

export default CategoryPage;