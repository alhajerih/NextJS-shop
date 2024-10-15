import ProductList from "./components/ProductList";

import ProductItems from "./components/ProductItems";

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

      <ProductList products={ProductItems} />
    </>
  );
}
