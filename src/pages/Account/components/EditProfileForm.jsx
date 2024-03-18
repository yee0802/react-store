import { useState } from "react";
import useAuth from "../../../hooks/useAuth";
import api from "../../../api";

export default function EditProfileForm() {
  const [profileInfo, setProfileInfo] = useState("");
  const [profileResponse, setProfileResponse] = useState("");

  const { token, userId, setRefresh } = useAuth();

  const handleProfileSubmit = async (e) => {
    e.preventDefault();

    if (profileInfo.length === 0) {
      setProfileResponse("No data provided");
      return;
    }

    try {
      const opts = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const res = await api.patch(`/profile/${userId}`, profileInfo, opts);

      const form = document.querySelector(".edit-profile__form");
      form.reset();

      if (res.status === 200) {
        setProfileInfo("");
        setProfileResponse("Sucessfully updated");
        setRefresh(true);
        return;
      }
    } catch (err) {
      console.log(err);
      setProfileResponse(
        `Error: ${
          err.response.data.error ??
          "An error occurred while attempting to update your profile"
        }.`
      );
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setProfileInfo({ ...profileInfo, [name]: value });
  };

  return (
    <section className="edit-profile tab">
      <form
        className="edit-profile__form"
        onSubmit={(e) => handleProfileSubmit(e)}
      >
        <label htmlFor="firstName">
          <b>First Name:</b>
          <input
            type="text"
            name="firstName"
            onChange={(e) => handleChange(e)}
          />
        </label>

        <label htmlFor="lastName">
          <b>Last Name:</b>
          <input
            type="text"
            name="lastName"
            onChange={(e) => handleChange(e)}
          />
        </label>

        <label htmlFor="bio">
          <b>Biography:</b>
          <textarea
            type="text"
            name="bio"
            onChange={(e) => handleChange(e)}
            rows={10}
          />
        </label>

        <label htmlFor="imageURL">
          <b>Picture URL:</b>
          <input
            type="text"
            name="imageURL"
            onChange={(e) => handleChange(e)}
          />
        </label>

        {profileResponse && (
          <p className="edit-profile__res">{profileResponse}</p>
        )}

        <button className="edit-profile__form-submit" type="submit">
          UPDATE
        </button>
      </form>
    </section>
  );
}
