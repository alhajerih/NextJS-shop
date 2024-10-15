import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="text-center">
        <div className="text-5xl">
          <h1>Bakery store</h1>
        </div>
        <p>We are the best</p>
      </div>
      <div style={{ textAlign: "center" }}>
        <img
          src="https://media.istockphoto.com/id/1176946222/vector/bakery-shop-building-facade-with-signboard.jpg?s=1024x1024&w=is&k=20&c=IzsGDdFgHeX-IjtCHH0zJ0wQD06Yl4CVTp01Ix2O7sw="
          alt=""
        />
      </div>
    </>
  );
}
