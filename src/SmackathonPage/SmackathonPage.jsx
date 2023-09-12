import smackathon_logo from '../assets/HomePage/Smackathon/Final Logo Medium.png';
import gfg_logo from '../assets/HomePage/Smackathon/Gfg White.png';
import './SmackathonPage.css';
import ele1 from '../assets/HomePage/Smackathon/samay.png';
import mi from '../assets/HomePage/Smackathon/wired-gradient-18-location-pin.gif';
import peakLogo1 from '../assets/images/peak.png';
import secondPrice from '../assets/images/2.png';
import firstPrice from '../assets/images/1.png';
import thirdPrice from '../assets/images/3.png';
export default function SmackathonPage() {
  return (
    <div className="smakaPage">
      <section className="heroSection">
        <div className="innerHero">
          <a href="#">
            <img src={gfg_logo} alt="" className="gfgLogo" />
          </a>
          <h3 className="presents">Presents</h3>
          <a href="#">
            <img src={smackathon_logo} alt="" className="smackathon_logo" />
          </a>

          {/* <div>
            <script
              src="https://widget.konfhub.com/widget.js"
              button_id="btn_4a14fc0aa37a"
            ></script>
          </div> */}

          <div className="btns">
            <button className="application-btn">
              <a href="#">REGISTER HERE</a>
            </button>
          </div>
        </div>
      </section>

      <section className="about">
        <h2 className="heading_smackathonPage">Smackathon</h2>
        <p className="description">
          The Department of Computer Science and Engineering at YCCE organized
          an event called Smackathon Online as part of UPSURGE 2K22. The event
          was successfully managed by COSMOS. The hackathon was conducted
          online, offering a first prize of Rs 10,000, a second prize of Rs
          5,000, and a third prize of Rs 3,000. Problem statements were released
          on August 12, 2022, encompassing a total of 10 different domains
          within computer science.
          <br />
          <br />
          Participation required a team entry fee of Rs 500. A total of 12 teams
          from various parts of India, including Surat, Nagpur, Sangli, Pune,
          Rajkot, Junagadh, Valsad, and more, registered for the event. The
          competition consisted of two rounds:
          <br />
          <br />
          <b>Round 1:</b> Preliminary round, where each team submitted a short
          descriptive video of their project.
          <br />
          <b>Round 1:</b> Judging round, where the jury comprised of Dr. Kishor
          Boyar from the CSE Department, Dr. Amoli Belsare from the Electronics
          and Telecommunication Department, and Prof. Rupa A. Fadnavis from the
          CSE Department. Five teams qualified for this final judging round
          based on their submitted code and descriptive video. After mutual
          deliberation among the jury, the winners were selected.
        </p>
        <h3 className="extra">
          TOP Teams will get chance to win Swags And Goodies from Official
          GeeksforGeeks 🎁
        </h3>
      </section>
      {/* PRICE POOL SECTION STARTS*/}
      <div className="prizepool_info">
        <h2 className="pricepool_heading">
          WITH A WHOPPING PRIZE POOL OF
          <h1>₹35,000</h1>
        </h2>
      </div>
      <div className="pricepool_container">
        <div className="card1">
          <div className="pricepool_content">
            <h3>Second Prize</h3>
            <img src={secondPrice} className="price2" alt="" />
            <h4 id="PRIZE">₹7,000</h4>
          </div>
        </div>
        <div className="card2">
          <div className="pricepool_content">
            <h3>First Prize</h3>
            <img src={firstPrice} className="price1" alt="" />
            <h4 id="PRIZE1">₹12,000</h4>
          </div>
        </div>
        <div className="card3">
          <div className="pricepool_content">
            <h3>Third Prize</h3>
            <img src={thirdPrice} className="price3" alt="" />
            <h4 id="PRIZE">₹3,000</h4>
          </div>
        </div>
      </div>
      <div className="voucher">
        <h2>VOUCHER INFO HEADER</h2>
        <p>
          info about vouchers
          <br />
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium
          laborum reprehenderit, ducimus odit in ab esse recusandae assumenda
          distinctio veritatis voluptatum, maiores ut blanditiis, dolorem minus
          similique nesciunt nostrum. Pariatur!
        </p>
      </div>
      {/* PRICE POOL SECTION ENDS*/}

      {/* TIME LINE */}

      <div className="timeline">
        <h2 className="heading_smackathonPage timeline_heading">TimeLine</h2>
        <div className="container_timeline left_container">
          <img src={ele1} alt="Image" />
          <div className="text-box">
            <h2 className="N">DAY 1</h2>
            <small className="M">
              {' '}
              10:00 am - Problem statements will be released for all
              participants.
            </small>
            <span className="left-container-arrow"></span>
          </div>
          <div style={{ height: '20px' }}></div>
        </div>

        <div className="container_timeline right_container">
          <img src={ele1} alt="Image" />
          <div className="text-box">
            <h2 className="N">DAY 1</h2>
            <small className="N">
              11:30 am - The teams will have to finalize any 1 of the problem
              statements.
            </small>
            <span className="right-container-arrow"></span>
          </div>
          <div style={{ height: '20px' }}></div>
        </div>

        <div className="container_timeline left_container">
          <img src={ele1} alt="Image" />
          <div className="text-box">
            <h2 className="N">DAY 1</h2>
            <small className="N">1:00pm - Kahana khalo friends</small>
            <span className="left-container-arrow"></span>
          </div>
          <div style={{ height: '20px' }}></div>
        </div>

        <div className="container_timeline right_container">
          <img src={ele1} alt="Image" />
          <div className="text-box">
            <h2 className="N">DAY 1</h2>
            <small className="N">5:00pm - short break lelo</small>
            <span className="right-container-arrow"></span>
          </div>
          <div style={{ height: '20px' }}></div>
        </div>

        <div className="container_timeline left_container">
          <img src={ele1} alt="Image" />
          <div className="text-box">
            <h2 className="N">DAY 1</h2>
            <small className="N">8:30pm - firse Kahana Khalo</small>
            <span className="left-container-arrow"></span>
          </div>

          <div style={{ height: '20px' }}></div>
        </div>
        <div className="container_timeline right_container">
          <img src={ele1} alt="Image" />
          <div className="text-box">
            <h2 className="N">DAY 2</h2>
            <small className="N">11:00 am - winnner will be announced</small>
            <span className="right-container-arrow"></span>
          </div>
          <div style={{ height: '20px' }}></div>
        </div>

        <div className="container_timeline left_container">
          <img src={ele1} alt="Image" />
          <div className="text-box">
            <h2 className="N">DAY 2</h2>
            <small className="N">
              11:00 am - winnner will be announced at Validictory Ceremony
            </small>
            <span className="left-container-arrow"></span>
          </div>
          <div style={{ height: '20px' }}></div>
        </div>

        {/* <div className="container_timeline right_container">
          <img src={ele1} alt="Image" />
          <div className="text-box">
            <h2 className="N">Amazon</h2>
            <small className="N">2019-2020</small>
            <span className="right-container-arrow"></span>
          </div>
          <div style={{ height: '20px' }}></div>
        </div> */}

        {/* <div className="container_timeline left_container">
          <img src={ele1} alt="Image" />

          <div className="text-box">
            <h2 className="N">Microsoft</h2>
            <small className="N">2019-2020</small>
            <span className="left-container-arrow"></span>
          </div>
          <div style={{ height: '20px' }}></div>
        </div> */}
        {/* <div className="container_timeline right_container">
            <img src={ele1} alt="Image" />

            <div className="text-box">
              <h2 className="N">Amazon</h2>
              <small className="N">2019-2020</small>
              <span className="right-container-arrow"></span>
            </div>
            <div style={{ height: '20px' }}></div>
          </div> */}
      </div>

      {/* Time ends here */}

      {/* Venus starts here */}

      <div>
        <h1 className="heading_venue">Locate Us!</h1>

        <div className="Map" id="correct">
          <img src={peakLogo1} className="peaklogo1" alt="" />
          <div style={{ alignItems: 'center' }} className="iframeMap ">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119118.2038380647!2d78.82803159726564!3d21.094862899999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd495abf6622d6f%3A0x2bd70ec1faa74ad4!2sDepartment%20Of%20Computer%20Science%20And%20Engineering!5e0!3m2!1sen!2sin!4v1694333084486!5m2!1sen!2sin"
              style={{ filter: 'invert(100%)' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="text-right">
            <img src={mi} alt="Description of the image" />

            <h3>
              6th October, 2023 <br />
              Seminar Hall, CSE building, <br /> YCCE campus
            </h3>

            {/* <h2 style={{color:'white' ,marginBottom:'20px'}}> <img src={mi} alt="Description of the image"  />6th October,2023</h2>
            <h3 style={{color:'white'}}>Seminar Hall,Cse building,YCCE capmpus </h3> */}
          </div>
        </div>
      </div>
      {/* Veneus  ends here */}
    </div>
  );
}
