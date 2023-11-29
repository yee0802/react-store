import { useEffect, useState } from "react";
import api from "../../api/posts";
import ProductListItem from "./components/productListItem";

export default function Home() {
  const [products, setProducts] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await api.get("/products");
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
            <ProductListItem product={product} key={idx} />
          ))}
        </ul>
      </main>
    );
  }
}
