import { useEffect, useState } from "react";
import api from "../../api/posts";

export default function Home() {
  const [products, setProducts] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await api.get("/products?offset=0&limit=15");
        setProducts(res.data);
      } catch (err) {
        if (err.response) {
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        } else {
          console.log(`Error: ${err.message}`);
        }
      }
    };
    fetchProducts();
  }, []);

  if (products) {
    return (
      <main className="home container">
        <ul className="home__products">
          {products.map((product, idx) => (
            <li className="product-card" key={idx}>
              <h3>{product.title}</h3>
              <img src={product.images[0]} alt="product image" width={300} />
              <p>
                {product.description.length > 80
                  ? `${product.description.slice(0, 70)}...`
                  : product.description}
              </p>
              <p>{`£${product.price}`}</p>
              <button className="atc-button">ADD TO CART</button>
            </li>
          ))}
        </ul>
      </main>
    );
  }
}
