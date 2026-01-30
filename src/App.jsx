import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import ProjectPage from "./pages/ProjectPage";
import About from './pages/About';
import ProjectsList from "./components/Projects"; 
import SystemStatusBar from "./components/SystemStatusBar";
import NotFound from "./pages/NotFound"; // Import the Error page

function App() {
  return (
    <Router>
      <SystemStatusBar />

      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<ProjectsList />} />
          <Route path="/about" element={<About />} />
          <Route path="/project/:id" element={<ProjectPage />} />
          
          {/* ⚠️ The "Kernel Panic" Catch-all */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;