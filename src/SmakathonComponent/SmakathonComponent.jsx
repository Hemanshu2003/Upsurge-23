import './SmakathonComponent.css';
import GeeksLogo from './geeksForGeek.png';

export default function SmakathonComponent() {
  return (
    <div className="inset_border">
      <div className="container">
        <div className="content">
          <div className="presentedBy">
            <h3> Sponsored By : </h3>
            <img src={GeeksLogo} alt="" className="geeksLogo" />
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
