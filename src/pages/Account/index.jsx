import EditProfileForm from "./components/EditProfileForm";
import Profile from "./components/Profile";
import "./index.css";

export default function Account() {
  const handleAccountTabChange = (event) => {
    const buttons = document.querySelectorAll(".account-page--nav-btn");
    const tabs = document.querySelectorAll(".tab");

    // Find the index of the clicked button
    const index = Array.from(buttons).indexOf(event.currentTarget);

    tabs.forEach((tab) => tab.classList.remove("tab--active"));
    buttons.forEach((button) => button.classList.remove("tab--active"));

    tabs[index].classList.add("tab--active");
    buttons[index].classList.add("tab--active");
  };

  return (
    <main className="account-page container">
      <section className="account-page--content">
        <nav className="account-page--nav">
          <button
            className="account-page--nav-btn"
            onClick={(e) => handleAccountTabChange(e)}
          >
            Profile
          </button>
          <button
            className="account-page--nav-btn"
            onClick={(e) => handleAccountTabChange(e)}
          >
            Edit Profile
          </button>
        </nav>

        <Profile />
        <EditProfileForm />
      </section>
    </main>
  );
}
