import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "../../assets/styles/authentification_styles/registerpage.css";

function RegisterPage() {
  const nameRef = useRef();
  const emailRef = useRef();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password === confirmPassword) {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/users`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: nameRef.current.value,
            email: emailRef.current.value,
            password,
          }),
        });

        if (response.status === 201) {
          navigate("/login");
        }
      } catch (err) {
        console.error(err);
      }
    }
  };

  return (
    <div>
      <h2>Inscription</h2>
      <form onSubmit={handleSubmit}>
        <input ref={nameRef} type="text" placeholder="Nom" required />
        <input ref={emailRef} type="email" placeholder="Email" required />
        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Confirmer mot de passe"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <button type="submit">S'inscrire</button>
      </form>
      <li className="auth_nav">
        <Link to="/authentification" className="auth_backHome">
          ⬅️ Retour
        </Link>
      </li>
    </div>
  );
}

export default RegisterPage;
