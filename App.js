import Navbar from "./components/navbar/navbar";
import Intro from "./components/Intro/intro";
import Skills from "./components/skills/skills";
import Contact from "./components/contact/contact";
import Footer from "./components/Footer/footer";
import React from "react";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Skills/>
      <Contact/>
      <Footer/>
    
    </div>
  );
}

export default App;
