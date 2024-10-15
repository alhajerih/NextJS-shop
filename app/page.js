import ProductList from "./components/ProductList";

import ProductItems from "./components/ProductItems";
import Header from "./components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <ProductList products={ProductItems} />
    </>
  );
}
