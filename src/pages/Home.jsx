import React from "react";
import appFirebase from "../credentials";
import { getAuth, signOut } from "firebase/auth";
const auth = getAuth(appFirebase);

const Home = (props) => {
  const { user } = props;
  console.log(user);
  return (
    <>
      <div className="bg-slate-600">Welcome</div>
      <button onClick={() => signOut(auth)}>Logout</button>
    </>
  );
};

export default Home;
