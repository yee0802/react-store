import { useLocation } from "react-router-dom";
import "./index.css";

export default function PageNotFound() {
  const location = useLocation();

  return (
    <main className="page-not-found container">
      <h1 className="page-not-found--header">404</h1>
      <p className="page-not-found--title">Page not found</p>
      <p className="page-not-found--desc">
        The requested URL {`"${location.pathname}"`} is not found on this server
      </p>
    </main>
  );
}
