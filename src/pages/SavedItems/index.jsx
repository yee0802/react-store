import { useContext } from "react";
import SavedItemsList from "./components/SavedItemsList";
import { SavedContext } from "../../context/Contexts";
import "./index.css";
import SavedItemsHeader from "./components/SavedItemsHeader";

export default function SavedItems() {
  const { favourites } = useContext(SavedContext);

  return (
    <main className="saved-items container">
      <SavedItemsHeader favourites={favourites} />
      <SavedItemsList />
    </main>
  );
}
