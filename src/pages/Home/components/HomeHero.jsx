import { Link } from "react-router-dom";
import heroBg from "../../../assets/hero-bg.mp4";

export default function HomeHero() {
  return (
    <section className="home-hero">
      <video
        className="home-hero__video"
        src={heroBg}
        autoPlay
        loop
        muted
      ></video>
      <article className="home__welcome">
        <h2>Ready To Level Up Your Style?</h2>
        <Link to="/products">
          <button className="view-all-products">Shop Products &#x2192;</button>
        </Link>
      </article>
    </section>
  );
}
