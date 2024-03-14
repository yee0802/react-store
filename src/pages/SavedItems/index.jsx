import SavedItemsList from "./components/SavedItemsList";
import SavedItemsHeader from "./components/SavedItemsHeader";
import useAuth from "../../hooks/useAuth";
import "./index.css";

export default function SavedItems() {
  const { loggedInUser } = useAuth();

  if (loggedInUser) {
    return (
      <main className="saved-items container">
        <SavedItemsHeader favourites={loggedInUser.savedItems} />
        <SavedItemsList favourites={loggedInUser.savedItems} />
      </main>
    );
  }
}
