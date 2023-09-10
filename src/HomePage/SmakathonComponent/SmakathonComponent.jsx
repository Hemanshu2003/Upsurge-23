import './SmakathonComponent.css';
import GeeksLogo from '../../assets/HomePage/Smackathon/gfg_logo.png';
import SmackathonLogo from '../../assets/HomePage/Smackathon/Final Logo Medium.png';

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

          <h2>SMACKATHON</h2>

          <p>
            Lorem ipsum dolor sit, amet conse ctetur adipi sicing elit. Aliquid,
            beatae alias esse dicta tenetur repell endus ducimus dolor emque et
            quos lauda ntium aliquam dolore! Animi accus antium totam simi lique
            quam corrupti. Volupt atum, dolorem?
          </p>
          <button className="reg_btn">
            P L A Y
            <div id="clip">
              <div id="leftTop" className="corner"></div>
              <div id="rightBottom" className="corner"></div>
              <div id="rightTop" className="corner"></div>
              <div id="leftBottom" className="corner"></div>
            </div>
            <span id="rightArrow" className="arrow"></span>
            <span id="leftArrow" className="arrow"></span>
          </button>
        </div>
        <div className="curtains">
          <div className="overlay"></div>
        </div>
      </div>
    </div>
  );
}
