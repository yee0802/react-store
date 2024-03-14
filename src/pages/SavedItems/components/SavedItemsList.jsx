import SavedItemsListItem from "./SavedItemsListItem";

export default function SavedItemsList({ favourites }) {
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
