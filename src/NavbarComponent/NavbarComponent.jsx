import React from 'react';
import './NavbarComponent.css';
import { Link } from 'react-router-dom';

export default function NavbarComponent() {
  const [initial, final] = React.useState(false);

  function toggleOnClick() {
    final((prev) => !prev);
  }

  return (
    <div>
      <ul className={`navigation ${initial && 'active'}`}>
        <li>
          <Link to="/home" className="anchor" onClick={toggleOnClick}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/smackathon" className="anchor" onClick={toggleOnClick}>
            Smackathon
          </Link>
        </li>
        <li>
          <a href="####"> Schedule </a>
        </li>
        <li>
          <a href="####"> Events </a>
        </li>
        <li>
          <a href="####"> Contact </a>
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
