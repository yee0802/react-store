import useAuth from "../../../hooks/useAuth";
import profileIcon from "../../../assets/profile-icon.png";

export default function Profile() {
  const { loggedInUser, onLogout } = useAuth();

  if (loggedInUser) {
    return (
      <section className="profile tab--active tab">
        <header className="profile__header">
          <section className="profile__header--user-info">
            <h3>
              {loggedInUser.profile
                ? `${loggedInUser.profile.firstName} ${loggedInUser.profile.lastName}`
                : "Profile Name"}
            </h3>
            <h4>{loggedInUser.email}</h4>
          </section>

          <img
            src={loggedInUser.profile?.imageURL ?? profileIcon}
            alt="User Image"
          />
        </header>

        <article className="profile__bio">
          <h1>About me:</h1>
          <p>{loggedInUser.profile?.bio ?? "No bio provided..."}</p>
        </article>

        <section className="profile__btns">
          <button className="logout-btn" onClick={onLogout}>
            LOGOUT
          </button>
        </section>
      </section>
    );
  }
}
