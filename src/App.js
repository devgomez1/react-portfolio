import React, { useState } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  const [activeTab, changeTab] = useState("about");

  const renderTab = () => {
    if (activeTab === "About") {
      return <About />;
    }
    if (activeTab === "Contact") {
      return <Contact />;
    }
    if (activeTab === "Portfolio") {
      return <Portfolio />;
    }
    if (activeTab === "Resume") {
      return <Resume />;
    }
    return null;
  };
}

export default App;
