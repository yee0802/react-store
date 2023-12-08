import { useContext } from "react";
import HeartLogo from "../assets/heart";
import { SavedContext } from "../Contexts";

export default function AddToSavedBtn({ item }) {
  const { favourites, setFavourites } = useContext(SavedContext);

  const addToSaved = (item) => {
    const duplicate = favourites
      ? favourites.some((obj) => {
          return obj.id == item.id;
        })
      : false;

    duplicate
      ? setFavourites([...favourites])
      : setFavourites([...favourites, item]);
  };

  return (
    <button className="fav" onClick={() => addToSaved(item)}>
      <HeartLogo />
    </button>
  );
}
