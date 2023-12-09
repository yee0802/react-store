import AddToCartBtn from "../../../components/AddToCartBtn";
import truckIcon from "../../../assets/truck.svg";
import boxIcon from "../../../assets/box.svg";
import AddToSavedBtn from "../../../components/AddToSavedBtn";

export default function ProductPageInfo({ product }) {
  return (
    <section className="product-page__info">
      <h1>{product.title}</h1>
      <em>{product.category.name}</em>
      <p>{product.description}</p>
      <p className="product--price">{`£${product.price}`}</p>

      <section className="product-page__checkout">
        <AddToSavedBtn item={product} />
        <AddToCartBtn product={product} />
      </section>

      <section className="product-page__deliverys">
        <section className="pr-pg__container">
          <img src={truckIcon} alt="truck-icon" />
          <p>Free Delivery</p>
        </section>

        <section className="pr-pg__container">
          <img src={boxIcon} alt="box-icon" />
          <p>Free Returns</p>
        </section>
      </section>
    </section>
  );
}
