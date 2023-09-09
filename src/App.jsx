import NavbarComponent from './NavbarComponent/NavbarComponent';
import HomePage from './HomePage/HomePage';
import { HashRouter, Routes, Route } from 'react-router-dom';
import TeamPage from './TeamPage/TeamPage';

function App() {
  return (
    <HashRouter>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/team" element={<TeamPage />} />

        <Route
          path="/smackathon"
          element={
            <h1 style={{ color: 'white', textAlign: 'center' }}>
              This is smakathon Component
            </h1>
          }
        />
      </Routes>
    </HashRouter>
  );
}

export default App;
