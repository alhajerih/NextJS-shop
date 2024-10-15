export default function Product({ product }) {
  return (
    <div className="product-card">
      <div className="image-container">
        <img
          className="image-product"
          src={product.image}
          alt={product.name}
          width={200}
          height={300}
        />
      </div>
      <h2 className="product-name">{product.name}</h2>
      <p className="product-price">{product.price} KD</p>
    </div>
  );
}
