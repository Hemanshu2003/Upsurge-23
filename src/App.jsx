import NavbarComponent from './NavbarComponent/NavbarComponent';
import HomePage from './HomePage/HomePage';
import { Routes, Route, HashRouter } from 'react-router-dom';
import TeamPage from './TeamPage/TeamPage';
import SmackathonPage from './SmackathonPage/SmackathonPage';
import WebsiteTeamPage from './assets/WebsiteTeamPage/WebsiteTeamPage';
import EventsPage from './EventsPage/EventsPage';

function App() {
  return (
    <HashRouter>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/smackathon" element={<SmackathonPage />} />
        <Route path="/websiteteam" element={<WebsiteTeamPage />} />
        <Route path="/events" element={<EventsPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
