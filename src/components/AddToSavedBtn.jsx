import { useContext } from "react";
import HeartLogo from "../assets/heart";
import { SavedContext } from "../context/Contexts";

export default function AddToSavedBtn({ item }) {
  const { setFavourites } = useContext(SavedContext);

  const addToSaved = (item) => {
    setFavourites((currentFavourites) => {
      const duplicateIndex = currentFavourites.findIndex(
        (obj) => obj.id === item.id
      );

      if (duplicateIndex !== -1) {
        const newFav = currentFavourites.slice();

        newFav[duplicateIndex] = {
          ...newFav[duplicateIndex],
        };
        return newFav;
      } else {
        return currentFavourites.concat({ ...item });
      }
    });
  };

  return (
    <button className="fav" onClick={() => addToSaved(item)}>
      <HeartLogo />
    </button>
  );
}
