import Product from "./Product";

export default function ProductList({ products }) {
  const duplicatedProducts = Array(6).fill(products[0]);
  return (
    <div className="product-list">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}
