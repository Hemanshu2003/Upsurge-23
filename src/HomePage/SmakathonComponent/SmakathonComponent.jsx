import './SmakathonComponent.css';
import GeeksLogo from '../../assets/HomePage/Smackathon/Gfg White.png';
import SmackathonLogo from '../../assets/HomePage/Smackathon/Final Logo Medium.png';
import { Link } from 'react-router-dom';

export default function SmakathonComponent() {
  return (
    <div className="inset_border">
      <div className="container">
        <div className="content">
          <div className="presentedBy">
            <img src={GeeksLogo} alt="" className="geeksLogo" />
            <h3 className="sb">Presents</h3>
            <img
              src={SmackathonLogo}
              alt="smackthonLogo"
              className="smackthonLogo"
            />
          </div>

          <p>
            Lorem ipsum dolor sit, amet conse ctetur adipi sicing elit. Aliquid,
            beatae alias esse dicta tenetur repell endus ducimus dolor emque et
            quos lauda ntium aliquam dolore!
          </p>

          <Link className="link" to="/smackathon">
            <button className="regBtn">
              <span>register now!</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
