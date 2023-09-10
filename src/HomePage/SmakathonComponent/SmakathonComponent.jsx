/* eslint-disable react/no-unescaped-entities */
import './SmakathonComponent.css';
import GeeksLogo from '../../assets/HomePage/Smackathon/Gfg White.png';
import SmackathonLogo from '../../assets/HomePage/Smackathon/Final Logo Medium.png';
// import PricePool from '../../assets/HomePage/Smackathon/price.png';
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
            " Experience the thrill of winning incredible prizes that will boost
            your confidence and take you to unprecedented levels "
          </p>
          {/* <div>
            <img src={PricePool} alt="" className="pricepool" />
          </div> */}

          <Link className="link" to="/smackathon" target="_target">
            <button className="regBtn">
              <span>register now!</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
