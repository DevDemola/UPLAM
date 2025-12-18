import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import LandingPage from "./pages/LandingPage";
import Header from "./Header";
import Footer from "./Footer";
import Services from "./pages/Services";
// import Events from "./pages/Events";
// import Contact from "./pages/Contact";

const App = () => {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        {/* <Route path="/events" element={<Events />} /> */}
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;
