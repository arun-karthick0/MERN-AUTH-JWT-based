import axios from "axios";
import { createContext, useState, useEffect } from "react";

const useContext = createContext();

function userContextProvider({ Children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get("/profile").then((data) => {
      setUser(data);
    });
  }, []);

  return (
    <useContext.Provider value={{ user, setUser }}>
      {Children}
    </useContext.Provider>
  );
}

export default userContextProvider;
