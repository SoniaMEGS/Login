import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import appFirebase from "./credentials";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import "./App.css";

const auth = getAuth(appFirebase);

function App() {
  const [user, setUser] = useState(null);

  onAuthStateChanged(auth, (firebaseUser) => {
    if (firebaseUser) {
      setUser(firebaseUser);
    } else {
      setUser(null);
    }
  });

  return (
    <div>
      <div>{user ? <Home user={user.email} /> : <Login />}</div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
