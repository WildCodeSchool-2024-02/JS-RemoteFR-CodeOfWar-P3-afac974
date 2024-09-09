import { useRef } from "react";
import {
  useLoaderData,
  useOutletContext,
  useRevalidator,
} from "react-router-dom";

function UserPage() {
  const items = useLoaderData();

  const titleRef = useRef();

  const { user } = useOutletContext();

  const revalidator = useRevalidator();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/items`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: titleRef.current.value,
          userId: user.id,
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
      {user != null && (
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
    </>
  );
}

export default UserPage;
