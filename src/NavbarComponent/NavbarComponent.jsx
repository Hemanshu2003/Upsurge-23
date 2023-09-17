import React from 'react';
import './NavbarComponent.css';
import { Link } from 'react-router-dom';

export default function NavbarComponent() {
  const [initial, final] = React.useState(false);

  function toggleOnClick() {
    final((prev) => !prev);
  }

  function PageChange() {
    toggleOnClick();
    window.scrollTo(0, 0);
  }

  return (
    <div>
      <ul className={`navigation ${initial && 'active'}`}>
        <li>
          <Link to="home" className="anchor" onClick={PageChange}>
            Home
          </Link>
        </li>
        <li>
          <Link to="smackathon" className="anchor" onClick={PageChange}>
            Smackathon
          </Link>
        </li>
        <li>
          <a href=""> Schedule </a>
        </li>
        {/* <li>
          <Link to="/events" className="anchor" onClick={PageChange}>
            Events
          </Link>
        </li> */}
        <li>
          <Link to="" className="anchor" onClick={PageChange}>
            Team
          </Link>
        </li>
        <span className="toggleMenu" onClick={toggleOnClick}>
          <span
            className={`${initial ? 'line hidden' : 'line'}`}
            id="line"
          ></span>
        </span>
      </ul>
    </div>
  );
}
