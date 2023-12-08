import { useState, useEffect } from "react";
import ProductListItem from "../../Products/components/ProductListItem.jsx";
import api from "../../../api/posts";

export default function HomeTrending() {
  const [trending, setTrending] = useState("");

  useEffect(() => {
    const fetchTrending = async () => {
      try {
        const res = await api.get("/products?offset=0&limit=4");
        setTrending(res.data);
      } catch (err) {
        if (err.response) {
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        } else {
          console.log(`Error: ${err.message}`);
        }
      }
    };
    fetchTrending();
  }, []);

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
