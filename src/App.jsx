import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import ProjectPage from "./pages/ProjectPage";
import About from './pages/About';
import ProjectsList from "./components/Projects"; 
import SystemStatusBar from "./components/SystemStatusBar";
import NotFound from "./pages/NotFound";
import ScrollToTop from './ScrollToTop'

function AnimatedRoutes() {
  const location = useLocation()
  return (
    <Routes location={location} key={location.key}>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<ProjectsList />} />
      <Route path="/about" element={<About />} />
      <Route path="/project/:id" element={<ProjectPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

function App() {
  return (
    <Router basename="/bphilipose-diagnostics">
      <ScrollToTop />
      <SystemStatusBar />
      <Layout>
        <AnimatedRoutes />
      </Layout>
    </Router>
  );
}

export default App;