import { useEffect, useState } from "react";
import api from "../../../../api/posts";

export default function ReviewsList() {
  const [users, setUsers] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await api.get("/users?offset=0&limit=2");
        setUsers(res.data);
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
    fetchUsers();
  }, []);

  const animatedElements = document.querySelectorAll(".animate-on-scroll");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("slidein-animation");
      }
    });
  });

  for (let i = 0; i < animatedElements.length; i++) {
    const el = animatedElements[i];

    observer.observe(el);
  }

  if (users) {
    return (
      <ul className="review-list">
        {users.map((user, idx) => (
          <li key={idx} className="review-list--item animate-on-scroll">
            <img src={user.avatar} alt="user-profile-pic" />
            <h3>{user.name}</h3>
            <section className="review-list--item__content">
              <p>
                <em>
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Minus accusantium optio reiciendis repellendus! Cum fugiat
                  quidem, tenetur fugit asperiores facilis iusto repellat,
                  debitis laboriosam praesentium, corrupti quam in totam
                  temporibus."
                </em>
              </p>
            </section>
          </li>
        ))}
      </ul>
    );
  }
}
