import { useEffect, useState } from "react";
import api from "../../../api";
import ProductListItem from "../components/ProductListItem";
import ProductFilter from "./ProductFilter";

export default function ProductList() {
  const [defaultProducts, setDefaultProducts] = useState("");
  const [products, setProducts] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await api.get("/products");
        setProducts(res.data.products);
        setDefaultProducts(res.data.products);
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
