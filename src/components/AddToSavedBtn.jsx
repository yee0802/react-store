import HeartLogo from "../assets/heart";
import useAuth from "../hooks/useAuth";

export default function AddToSavedBtn({ item }) {
  const { addSavedItemById } = useAuth();

  return (
    <button className="fav" onClick={() => addSavedItemById(item.id)}>
      <HeartLogo />
    </button>
  );
}
