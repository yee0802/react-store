import Profile from "./components/Profile";
import "./index.css";

export default function Account() {
  return (
    <main className="account-page container">
      <section className="account-page--content">
        <nav className="account-page--nav">
          <button className="account-page--nav-btn">Profile</button>
        </nav>

        <Profile />
      </section>
    </main>
  );
}
