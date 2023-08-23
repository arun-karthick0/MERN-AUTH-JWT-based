import { Link } from "react-router-dom";
// import { useContext } from "react";
// import userContext from "../userContext/UserContext.jsx";

function Home() {
  // const data = useContext(userContext);

  return (
    <div className="heading">
      Authentication using Jwt
      {/* <div style={{ margin: "30px" }}>
        {data && `hi {data.firstname} {data.lastname}`}
      </div> */}
      <div className="link">
        <Link to={"/signUp"}>signUp</Link>
        <Link to={"/login"}>Login</Link>
      </div>
    </div>
  );
}

export default Home;
