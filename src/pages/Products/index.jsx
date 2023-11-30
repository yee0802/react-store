import { useEffect, useState } from "react";
import api from "../../api/posts";
import ProductListItem from "./components/ProductListItem";
import "./index.css";

export default function Products() {
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
      <main className="container">
        <ul className="products-list">
          {products.map((product, idx) => (
            <ProductListItem product={product} key={idx} />
          ))}
        </ul>
      </main>
    );
  }
}
