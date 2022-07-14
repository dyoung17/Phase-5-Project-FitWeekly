import React, { useEffect, useState } from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

import NavBar from "./NavBar";
import Home from "./Home";
import SignUp from "./SignUp";
import Login from "./Login";
import WorkoutsContainer from "./WorkoutsContainer";


function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/users/me").then((r) => {
      if (r.ok) {
        r.json().then((res) => {
          setUser(res.user)
        });
      }
    });
  }, []);

  return (
    <Router>
      <NavBar user={user} setUser={setUser} />
      <main style={{
        backgroundImage: `url(https://img.freepik.com/premium-photo/blurred-background-rows-black-dumbbells-rack-gym_42687-402.jpg?w=2000)`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        width: "100vw",
        height: "100vh",
        backgroundPosition: "center",

      }}>
        <Routes>
          <Route path="/" element={<Home user={user} />} />
        </Routes>

        {/* <iframe width="420" height="315" src="https://www.youtube.com/embed/tgbNymZ7vqY" /> */}

        {user ? (
          <Routes>
            <Route path="/workouts" element={<WorkoutsContainer user={user} />} />
          </Routes>
        ) : (
          <Routes>
            <Route path="/signup" element={<SignUp setUser={setUser} />} />
            <Route path="/login" element={<Login setUser={setUser} />} />
            <Route path="/workouts" element={<WorkoutsContainer user={user} />} />
          </Routes>
        )}
      </main>
    </Router>
  );
}

export default App;

