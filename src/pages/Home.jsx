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
    <section className="flex flex-col items-center gap-6">
      <div className="bg-indigo-200 h-10 w-full">Welcome!</div>
      <button
        onClick={handleLogOut}
        className=" text-md font-semibold leading-none text-white bg-indigo-400 border rounded-lg hover:bg-indigo-700 py-4 w-4/5 lg:w-80 "
      >
        Logout
      </button>
    </section>
  );
};

export default Home;
