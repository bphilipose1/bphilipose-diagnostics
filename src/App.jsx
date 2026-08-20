import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import ProjectPage from "./pages/ProjectPage";
import NotFound from "./pages/NotFound";

function RestoreGitHubPagesRedirect() {
  const navigate = useNavigate();

  useEffect(() => {
    const redirect = window.sessionStorage.getItem("redirect");
    if (!redirect) return;

    window.sessionStorage.removeItem("redirect");
    const basePath = import.meta.env.BASE_URL.replace(/\/$/, "");
    if (redirect === basePath || redirect.startsWith(basePath + "/")) {
      navigate(redirect.slice(basePath.length) || "/", { replace: true });
    }
  }, [navigate]);

  return null;
}

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <RestoreGitHubPagesRedirect />
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
