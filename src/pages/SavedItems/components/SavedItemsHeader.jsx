export default function SavedItemsHeader({ favourites }) {
  return (
    <header className="saved-items__header">
      <h1>Saved Items</h1>
      <div className="saved-items__header--item-count">{favourites.length}</div>
    </header>
  );
}
