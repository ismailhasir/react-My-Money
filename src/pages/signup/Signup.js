import styles from "./Signup.module.css";
import { useState } from "react";
import { useSignup } from "../../hooks/useSignup";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const { signup, isPending, error } = useSignup();

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(email, password, displayName);
  };

  return (
    <form className={styles["signup-form"]} onSubmit={handleSubmit}>
      <h2>SIGN UP</h2>
      <span>
        <label>email:</label>
        <input
          type="email"
          required
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </span>

      <span>
        <label>password:</label>
        <input
          type="password"
          required
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </span>

      <span>
        <label>Name:</label>
        <input
          type="text"
          required
          onChange={(e) => setDisplayName(e.target.value)}
          value={displayName}
        />
      </span>
      {!isPending && <button className="btn">Sign Up</button>}
      {isPending && (
        <button className="btn" disabled>
          Loading
        </button>
      )}
      {error && <p>{error}</p>}
    </form>
  );
}
