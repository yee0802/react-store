import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import chevronLeft from "../../assets/chevron-left.svg";
import api from "../../api/posts";
import "./index.css";
import AddToCartBtn from "../../components/AddToCartBtn";

export default function ProductPage() {
  const [product, setProduct] = useState("");

  const param = useParams();
  const { id } = param;

  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await api.get(`/products/${id}`);
        setProduct(res.data);
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
        <section className="product-page__info">
          <button className="go-back" onClick={() => navigate(-1)}>
            <img src={chevronLeft} alt="chevron-left" />
          </button>
          <img src={product.images[0]} alt="" />
          <h1>{product.title}</h1>
          <h4>{product.category.name}</h4>
          <p>{product.description}</p>
          <section className="product-page__checkout">
            <p className="product--price">{`£${product.price}`}</p>
            <AddToCartBtn product={product} />
          </section>
        </section>
      </main>
    );
  }
}
