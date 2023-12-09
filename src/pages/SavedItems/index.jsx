import { useContext } from "react";
import SavedItemsList from "./components/SavedItemsList";
import { SavedContext } from "../../Contexts";
import "./index.css";

export default function SavedItems() {
  const { favourites } = useContext(SavedContext);

  return (
    <main className="saved-items container">
      <h1>Saved Items ({favourites.length}) </h1>
      <SavedItemsList />
    </main>
  );
}
