import HeartLogo from "../../../assets/heart";
import { Link } from "react-router-dom";
import AddToCartBtn from "../../../components/AddToCartBtn";

export default function ProductListItem({ product }) {
  return (
    <li className="product--card">
      <img src={product.images[0]} alt="product image" />

      <section className="product--card__bottom">
        <section className="product--info">
          <Link to={`/products/${product.id}`} className="product--card__link">
            <p className="product--title">{product.title}</p>
          </Link>
          <p className="product--price">{`£${product.price}`}</p>
        </section>

        <section className="product--btns">
          <button className="fav">
            <HeartLogo />
          </button>
          <AddToCartBtn product={product} />
        </section>
      </section>
    </li>
  );
}
