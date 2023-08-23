import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    let data = {
      email: email,
      password: password,
    };

    console.log(data);

    try {
      const user = await axios.post("/login", data);
      const error = user.data.error;
      if (error) {
        alert(error);
      } else {
        setEmail("");
        setPassword("");
        alert("user login successful");
        navigate("/");
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="container">
      <form className="form_details" onSubmit={handleSubmit}>
        <h2>signIN form</h2>

        <div className="form_content">
          <input
            type="email"
            placeholder="email"
            name="email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            name="password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <span>
          <button type="submit">submit</button>
          <button type="reset"> cancel</button>
        </span>
      </form>
      <Link to={"/"}>Home</Link>
    </div>
  );
}

export default SignUp;
