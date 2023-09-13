import NavbarComponent from './NavbarComponent/NavbarComponent';
import HomePage from './HomePage/HomePage';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import TeamPage from './TeamPage/TeamPage';
import SmackathonPage from './SmackathonPage/SmackathonPage';

function App() {
  return (
    <BrowserRouter>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/smackathon" element={<SmackathonPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
