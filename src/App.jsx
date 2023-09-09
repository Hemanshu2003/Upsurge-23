import NavbarComponent from './NavbarComponent/NavbarComponent';
import HomePage from './HomePage/HomePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TeamPage from './TeamPage/TeamPage';
function App() {
  return (
    <BrowserRouter>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/team" element={<TeamPage />} />

        <Route
          path="/smackathon"
          element={
            <h1 style={{ color: 'white', textAlign: 'center' }}>
              This is smakathon Component{' '}
            </h1>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
