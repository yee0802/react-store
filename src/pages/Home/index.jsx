import Reviews from "./components/Reviews/Reviews";
import HomeAbout from "./components/HomeAbout";
import HomeHero from "./components/HomeHero";
import "./index.css";

export default function Home() {
  return (
    <main>
      <section id="home">
        <HomeHero />
        <HomeAbout />
        <section className="home__trending"></section>
        <Reviews />
      </section>
    </main>
  );
}
