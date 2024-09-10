import { useRef } from "react";
import { Link, useLoaderData, useRevalidator } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

import leftArrow from "../../assets/icons/chevron-left-arrow.svg";

function UserPage() {
  const items = useLoaderData();
  const titleRef = useRef();
  const { auth } = useAuth();
  const revalidator = useRevalidator();
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/items`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${auth.token}`,
        },
        body: JSON.stringify({
          title: titleRef.current.value,
        }),
      });
      if (response.status === 201) {
        revalidator.revalidate();
      } else {
        console.info(response);
      }
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <>
      {auth != null && (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="title">title</label>{" "}
            <input ref={titleRef} type="text" id="title" />
          </div>
          <button type="submit">Send</button>
        </form>
      )}
      <ul>
        {items.map(({ id, title }) => (
          <li key={id}>{title}</li>
        ))}
      </ul>
      <Link to="/authentification" className="loginpage_backButton">
        {" "}
        <img
          className="registerpage_backButtonIcon"
          src={leftArrow}
          alt="Flèche gauche"
        />
        <span className="registerpage_backButtonText">Précédent</span>
      </Link>
    </>
  );
}

export default UserPage;
