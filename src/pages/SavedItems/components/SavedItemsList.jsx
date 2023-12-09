import { useContext, useEffect } from "react";
import { SavedContext } from "../../../Contexts";
import SavedItemsListItem from "./SavedItemsListItem";

export default function SavedItemsList() {
  const { favourites, setFavourites } = useContext(SavedContext);

  useEffect(() => {
    const content = localStorage.getItem("saved-items");

    if (content) {
      setFavourites(JSON.parse(content));
    }
  }, []);

  return (
    <ul className="saved-items--list">
      {favourites.length > 0 ? (
        favourites.map((item, idx) => (
          <SavedItemsListItem key={idx} item={item} />
        ))
      ) : (
        <p>You have no saved items</p>
      )}
    </ul>
  );
}
