import "./App.css";

import { Route, HashRouter,Routes } from "react-router-dom";
import { Navbar  } from "./components/navbar";
import { About } from "./pages/aboutPage";
import { Experience } from "./pages/experiencePage";
import { Project } from "./pages/projectPage";


const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route index path="/" element={<Navbar />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/project" element={<Project />} />
      </Routes>
    </HashRouter>
    
      
        
    
  );
};

export default App;
