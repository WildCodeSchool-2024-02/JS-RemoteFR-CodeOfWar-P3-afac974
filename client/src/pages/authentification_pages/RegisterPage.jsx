import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

function RegisterPage() {
  const nameRef = useRef();
  const emailRef = useRef();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

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
        navigate("/authpage/login");
      } else {
        console.info(response);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Nom</label>{" "}
        <input ref={nameRef} type="name" id="name" />
      </div>
      <div>
        <label htmlFor="email">Email</label>{" "}
        <input ref={emailRef} type="email" id="email" />
      </div>
      <div>
        <label htmlFor="password">Mot de passe</label>{" "}
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
        />{" "}
        {password.length >= 16 ? "✅" : "❌"}{" "}
        {`longueur: ${password.length} >= 16`}
      </div>
      <div>
        <label htmlFor="confirm-password">Comfirmer le mot de passe</label>{" "}
        <input
          type="password"
          id="confirm-password"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
        />{" "}
        {password === confirmPassword ? "✅" : "❌"}
      </div>
      <button type="submit">Confirmer</button>
    </form>
  );
}

export default RegisterPage;
