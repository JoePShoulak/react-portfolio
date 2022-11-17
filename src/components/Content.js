import { Route, Routes } from "react-router-dom";
import Portfolio from "../pages/Portfolio";
import AboutMe from "../pages/AboutMe";
import Contact from "../pages/Contact";
import Resume from "../pages/Resume";

function Content() {
  return (
    <Routes>
      <Route path="/" element={<Portfolio />} />
      <Route path="/about" element={<AboutMe />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/resume" element={<Resume />} />

      <Route path="*" element={<Portfolio />} />
    </Routes>
  );
}

export default Content;
