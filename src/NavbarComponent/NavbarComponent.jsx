import React from 'react';
import './NavbarComponent.css';

export default function NavbarComponent() {
  const [initial, final] = React.useState(false);

  function toggleOnClick() {
    final((prev) => !prev);
  }

  return (
    <div>
      <ul className={`navigation ${initial && 'active'}`}>
        <li>
          <a href="####"> Home </a>
        </li>
        <li>
          <a href="####"> Hackathon </a>
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
