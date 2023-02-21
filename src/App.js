import "./App.css";

import { Hero } from "./components/Hero";
import Info from "./components/Info";
import Skills from "./components/Skills";
import Project from "./components/Project";
import { About } from "./components/About";

import Contact from "./components/Contact";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/Skills" element={<Skills />} />
          <Route path="/Projects" element={<Project />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
