import Reviews from "./components/Reviews/Reviews";
import HomeAbout from "./components/HomeAbout";
import HomeHero from "./components/HomeHero";
import "./index.css";
import HomeTrending from "./components/HomeTrending";

export default function Home() {
  return (
    <main>
      <section id="home">
        <HomeHero />
        <HomeTrending />
        <HomeAbout />
        <Reviews />
      </section>
    </main>
  );
}
