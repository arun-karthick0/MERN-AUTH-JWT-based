import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function SignUp() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    let data = {
      firstname: name,
      lastname: lastName,
      email: email,
      password: password,
    };

    console.log(data);

    if (password === confirmPassword) {
      try {
        const user = await axios.post("/create", data);
        const error = user.data.error;
        if (error) {
          alert(error);
        } else {
          setName("");
          setLastName("");
          setEmail("");
          setPassword("");
          setConfirmPassword("");
          alert("user created successful");
          navigate("/login");
        }
      } catch (error) {
        alert(error);
      }
    } else {
      alert("password mismatch");
    }
  };
  return (
    <div className="container">
      <form className="form_details" onSubmit={handleSubmit}>
        <h2>signUp form</h2>
        <div className="name_details">
          <input
            type="text"
            placeholder="firstName"
            required
            name="firstname"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="lastName"
            required
            name="lastname"
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
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
          <input
            type="password"
            placeholder="confirm password"
            name="password"
            required
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <span>
          <button type="submit">submit</button>
          <button type="reset"> cancel</button>
        </span>
        <Link to={"/"} style={{ marginTop: "20px" }}>
          Home
        </Link>
      </form>
    </div>
  );
}

export default SignUp;
