import AddToCartBtn from "../../../components/AddToCartBtn";
import x from "../../../assets/x-icon.svg";
import useAuth from "../../../hooks/useAuth";

export default function SavedItemsListItem({ item }) {
  const { removeSavedItemById } = useAuth();

  return (
    <li className="saved-item__card">
      <button
        className="saved-item__delete-btn"
        title="Remove Item"
        onClick={() => removeSavedItemById(item.id)}
      >
        <img src={x} alt="close-icon" />
      </button>
      <img src={item.imageURL} alt="product-image" />
      <section className="saved-card__info">
        <section className="saved-card__info--title">
          <p>{item.title}</p>
          <p>{`£${item.price}`}</p>
        </section>

        <p>{item.description}</p>
        <AddToCartBtn product={item} />
      </section>
    </li>
  );
}
