import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Biography from "./Components/Biography";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="font-system flex flex-col min-h-screen">
      <div className="flex-1">
      <Header/>
      <Hero/>
      <Biography/>
      </div>
      <div>
      <Footer/>
      </div>
    </div>
    
  )
}

export default App;
