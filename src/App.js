import Header from "./Header/Header";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Skill from "./Skills/Skill";
import Main from "./Main/Main";
import Project from "./Projects";
import Contact from "./Contact/Contact";
import Bottom from "./BottomBar/Bottom";
function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/Skills" element={<Skill/>} />
        <Route path="/Projects" element={<Project/>} />
        <Route path="/Contact" element={<Contact/>} />
      </Routes>
      <Bottom/>
    </BrowserRouter>
  );
}

export default App;
