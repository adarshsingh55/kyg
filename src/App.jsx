import './App.css';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Sidebar from './component/sidebar/Sidebar';
import Header from './component/header/Header';
import Dashboard from './pages/Dashboard';
import Projects from './pages/Projects';
import Officials from './pages/Officials';
import CommunityProposal from './pages/CommunityProposal';
import Reports from './pages/Reports';

function getTitle(path) {
  switch (path) {
    case "/projects": return "Projects";
    case "/officials": return "Officials";
    case "/community-proposal": return "Community Proposals";
    case "/reports": return "Reports";
    default: return "Dashboard";
  }
}

function MainLayout() {
  const location = useLocation();
  return (
    <>
      <Sidebar />
      <div className="mainContent">
        <Header title={getTitle(location.pathname)} />
        <main className="mainArea">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/officials" element={<Officials />} />
            <Route path="/community-proposal" element={<CommunityProposal />} />
            <Route path="/reports" element={<Reports />} />
          </Routes>
        </main>
      </div>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <MainLayout />
    </BrowserRouter>
  );
}
