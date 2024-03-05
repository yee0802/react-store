import { Link } from "react-router-dom";
import AddToCartBtn from "../../../components/AddToCartBtn";
import AddToSavedBtn from "../../../components/AddToSavedBtn";

export default function ProductListItem({ product }) {
  return (
    <li className="product--card">
      <Link to={`/products/${product.id}`} className="product--card__link">
        <img src={product.imageURL} alt="product image" />
      </Link>

      <section className="product--card__bottom">
        <section className="product--info">
          <p className="product--title">{product.title}</p>
          <p className="product--price">{`£${product.price}`}</p>
        </section>

        <section className="product--btns">
          <AddToSavedBtn item={product} />
          <AddToCartBtn product={product} />
        </section>
      </section>
    </li>
  );
}
