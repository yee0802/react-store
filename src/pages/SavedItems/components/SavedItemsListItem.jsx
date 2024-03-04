import AddToCartBtn from "../../../components/AddToCartBtn";
import x from "../../../assets/x-icon.svg";
import { useContext } from "react";
import { SavedContext } from "../../../Contexts";

export default function SavedItemsListItem({ item }) {
  const { favourites, setFavourites } = useContext(SavedContext);

  localStorage.setItem("saved-items", JSON.stringify(favourites));

  const removeSavedItem = (item) => {
    const updatedCart = favourites.filter(
      (savedItem) => savedItem.id !== item.id
    );

    if (favourites.length > 1) {
      setFavourites(updatedCart);
      localStorage.setItem("saved-items", JSON.stringify(favourites));
    } else {
      setFavourites([]);
      localStorage.removeItem("saved-items");
    }
  };

  return (
    <li className="saved-item__card">
      <button
        className="saved-item__delete-btn"
        title="Remove Item"
        onClick={() => removeSavedItem(item)}
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
