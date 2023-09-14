/* eslint-disable react/no-unescaped-entities */
import './SmakathonComponent.css';
import { Link } from 'react-router-dom';
// import { useState } from 'react';

export default function SmakathonComponent() {
  function onPageChange() {
    window.scrollTo(0, 0);
  }
  // const [eve1, setMouseEnter] = useState(false);
  // const [eve2, setMouseLeave] = useState(true);

  // const [onHover, setOnHover] = useState(false);

  // const onMouseEnter = () => {
  //   setOnHover((prev) => !prev);
  //   const curtains = document.getElementById('curtains');
  //   if (setOnHover) {
  //     curtains.style.display = 'block';
  //   }
  // };

  // const onMouseLeave = () => {
  //   setOnHover(false);
  //   const curtains = document.getElementById('curtains');
  //   if (setOnHover) {
  //     curtains.style.display = 'none';
  //   }
  // };
  //   console.log('mouse Enter');
  //   setMouseEnter((prev) => !prev);
  //   const curtains = document.getElementById('curtains');
  //   if (eve1) {
  //     curtains.style.display = 'none';
  //   }
  // }

  // function onMouseLeave() {
  //   console.log('mouse Leave');
  //   setMouseLeave((prev) => !prev);
  //   const curtains = document.getElementById('curtains');
  //   if (eve2) {
  //     curtains.style.display = 'block';
  //   }
  // }

  return (
    <div className="inset_border">
      <div className="container">
        <div className="content">
          <div className="presentedBy">
            <img
              src="https://campusfestbucket.s3.us-west-1.amazonaws.com/Upsurge/smackathon/Gfg+White.png"
              alt=""
              className="geeksLogo"
            />
            <h3 className="sb">Presents</h3>
            <img
              src="https://campusfestbucket.s3.us-west-1.amazonaws.com/Upsurge/smackathon/Final+Logo+Medium.png"
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

          <Link className="link" to="/smackathon" onClick={onPageChange}>
            <button className="regBtn">
              <span>register now!</span>
            </button>
          </Link>
        </div>
        {/* <div
          className="curtains"
          id="curtains"
          // onMouseLeave={onMouseLeave}
          // onMouseEnter={onMouseEnter}
        >
          <div className="overlay"></div>
        </div> */}
      </div>
    </div>
  );
}
