import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import ProjectPage from "./pages/ProjectPage";
import SystemStatusBar from "./components/SystemStatusBar";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <SystemStatusBar />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Navigate to="/" replace />} />
          <Route path="/about" element={<Navigate to="/" replace />} />
          <Route path="/project/:id" element={<ProjectPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
