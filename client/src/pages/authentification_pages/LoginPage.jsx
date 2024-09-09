import { useRef } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";

function LoginPage() {
  const emailRef = useRef();
  const passwordRef = useRef();

  const { setUser } = useOutletContext();

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: emailRef.current.value,
          password: passwordRef.current.value,
        }),
      });

      if (response.status === 200) {
        const user = await response.json();

        setUser(user);

        navigate("/authpage");
      } else {
        console.info(response);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>{" "}
          <input ref={emailRef} type="email" id="email" required />
        </div>
        <div>
          <label htmlFor="password">Mot de passe</label>{" "}
          <input ref={passwordRef} type="password" id="password" required />
        </div>
        <button type="submit">Connexion</button>
      </form>
    </div>
  );
}

export default LoginPage;
