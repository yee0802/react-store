import { Link } from "react-router-dom";
import "./index.css";
import Reviews from "./components/Reviews/Reviews";
import heroBg from "../../assets/hero-bg.mp4";
import HomeAbout from "./components/HomeAbout";

export default function Home() {
  return (
    <main>
      <section id="home">
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
              <button className="view-all-products">
                Shop Products &#x2192;
              </button>
            </Link>
          </article>
        </section>
        <HomeAbout />
        <section className="home__trending"></section>
        <Reviews />
      </section>
    </main>
  );
}
