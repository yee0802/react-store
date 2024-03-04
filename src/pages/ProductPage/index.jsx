import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import chevronLeft from "../../assets/chevron-left.svg";
import api from "../../api";
import "./index.css";
import ProductPageInfo from "./components/ProductPageInfo";

export default function ProductPage() {
  const [product, setProduct] = useState("");

  const param = useParams();
  const { id } = param;

  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await api.get(`/products/${id}`);
        setProduct(res.data.product);
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
    fetchProduct();
  }, []);

  if (product) {
    return (
      <main className="product-page container">
        <button
          className="go-back"
          onClick={() => navigate(-1)}
          title="Go Back"
        >
          <img src={chevronLeft} alt="chevron-left" />
        </button>
        <img src={product.imageURL} alt="product-image" />

        <ProductPageInfo product={product} />
      </main>
    );
  }
}
