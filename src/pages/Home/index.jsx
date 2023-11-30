import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main className="home container">
      <article className="home__welcome">
        <h2>Welcome</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis hic
          doloribus voluptatibus repellat, error esse libero maiores commodi! Ex
          est odio, rem harum aperiam illum magnam necessitatibus saepe a
          consectetur.
        </p>
        <button>
          <Link to="/products"> View All Products</Link>
        </button>
      </article>
    </main>
  );
}
