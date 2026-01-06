import { Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import Home from "./Home";
import { Certificates } from "./Certificates";
import Contacts from "./Contacts";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/certificates" element={<Certificates />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;