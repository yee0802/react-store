import { useState, useEffect } from "react";
import ProductListItem from "../../Products/components/ProductListItem.jsx";
import api from "../../../api/index.js";

export default function HomeTrending() {
  const [trending, setTrending] = useState("");

  if (trending) {
    return (
      <section className="home__trending">
        <h2>Trending</h2>
        <article className="home__trending--items">
          <ul className="trending-list">
            {trending.map((item, idx) => (
              <ProductListItem key={idx} product={item} />
            ))}
          </ul>
        </article>
      </section>
    );
  }
}
