import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import Home from "./Home";
import { Certificates } from "./Certificates";
import Contacts from "./Contacts";
import Footer from "./components/Footer";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Routes>
        <Route path="/" element={<Home darkMode={darkMode} />} />
        <Route path="/certificates" element={<Certificates darkMode={darkMode} />} />
        <Route path="/contacts" element={<Contacts darkMode={darkMode} />} />
      </Routes>
      <Footer darkMode={darkMode} />
    </>
  );
}

export default App;