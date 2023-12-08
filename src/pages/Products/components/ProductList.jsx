import { useEffect, useState } from "react";
import api from "../../../api/posts";
import ProductListItem from "../components/ProductListItem";
import ProductFilter from "./ProductFilter";

export default function ProductList() {
  const [defaultProducts, setDefaultProducts] = useState("");
  const [products, setProducts] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await api.get("/products");
        setProducts(res.data);
        setDefaultProducts(res.data);
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
      <>
        <ProductFilter
          products={products}
          setProducts={setProducts}
          defaultProducts={defaultProducts}
        />
        <ul className="products-list">
          {products.map((product, idx) => (
            <ProductListItem product={product} key={idx} />
          ))}
        </ul>
      </>
    );
  }
}
