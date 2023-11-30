import { Link } from "react-router-dom";
import "./index.css";
import Reviews from "./components/Reviews/Reviews";

export default function Home() {
  return (
    <main className="container">
      <section id="home">
        <article className="home__welcome">
          <h2>Welcome To The Store</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <Link to="/products">
            <button className="view-all-products">View All Products</button>
          </Link>
        </article>

        <Reviews />
      </section>
    </main>
  );
}
