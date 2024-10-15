import Product from "./Product";

export default function ProductItems({ products }) {
  const duplicatedProducts = Array(6).fill(products[0]);
  return (
    <div className="product-list">
      {duplicatedProducts.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}
