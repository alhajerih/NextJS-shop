import Image from "next/image";
import { products } from "./products";

export default function Home() {
  return (
    <>
      <div className="text-color">
        <h1>Bakery Store</h1>
        <p>We offer the best baked goods!</p>
      </div>
      <div className="center-image-container">
        <img
          src="https://media.istockphoto.com/id/1176946222/vector/bakery-shop-building-facade-with-signboard.jpg?s=1024x1024&w=is&k=20&c=IzsGDdFgHeX-IjtCHH0zJ0wQD06Yl4CVTp01Ix2O7sw="
          alt=""
        />
      </div>
      <div className="product-list">
        {products.map((product, index) => (
          <div key={index} className="product-card">
            <div className="image-container">
              <img
                src={product.image}
                alt={product.name}
                width={200}
                height={300}
              />
            </div>
            <h2 className="product-name">{product.name}</h2>
            <p className="product-price">${product.price}KD</p>
          </div>
        ))}
      </div>
    </>
  );
}
