import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import appFirebase from "../credentials";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
const auth = getAuth(appFirebase);

const Home = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  onAuthStateChanged(auth, (firebaseUser) => {
    if (firebaseUser) {
      setUser(firebaseUser);
    } else {
      setUser(null);
    }
  });
  console.log(user?.email);

  const handleLogOut = async (e) => {
    e.preventDefault();
    signOut(auth);
    navigate("/");
  };

  return (
    <>
      <div className="bg-slate-600">Welcome</div>
      <button onClick={handleLogOut}>Logout</button>
    </>
  );
};

export default Home;
