import './FooterComponent.css';
import xsvg from './X.svg';
import UpsurgeLogo from '../assets/FooterImg/2.0.png';
import AcmLogo from '../assets/FooterImg/acm.png';
import CosmosLogo from '../assets/FooterImg/cosmos new logo.png';

export default function FooterComponent() {
  return (
    <footer className="footer">
      <div className="innerFooter">
        <img src={UpsurgeLogo} alt="" className="upsurge_logo" />
        <h1 className="heading">Upsurge 2k23</h1>

        <div className="links">
          <a href="#">links</a>
          <a href="#">links</a>
          <a href="#">links</a>
          <a href="#">links</a>
        </div>

        <div className="logo">
          <img src={AcmLogo} alt="" width="80" className="acm" />
          <img src={xsvg} className="xsvg" alt="" />
          <img src={CosmosLogo} width="80" alt="" className="cosmos" />
        </div>
        <h2 className="sponsor_heading">Sponsors</h2>

        <div className="links extra_link">
          <a href="#">Extra links </a>
          <a href="#">Extra links </a>
          <a href="#">Extra links </a>
          <a href="#">Extra links </a>
        </div>
      </div>

      <p className="copyright">
        &copy; Copyrights belongs to Technical Team , <br /> Computer Science
        and Engineering
      </p>
    </footer>
  );
}
