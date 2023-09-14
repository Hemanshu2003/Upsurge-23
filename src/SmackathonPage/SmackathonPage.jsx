import './SmackathonPage.css';

import mi from '../assets/HomePage/Smackathon/wired-gradient-18-location-pin.gif';

export default function SmackathonPage() {
  const closeModal = function () {
    const modal = document.querySelector('.modal');
    modal.classList.add('hidden_model');
  };

  const openModal = function () {
    const modal = document.querySelector('.modal');
    modal.classList.remove('hidden_model');
  };

  return (
    <div className="smakaPage">
      <section className="heroSection">
        <div className="innerHero">
          <a href="#">
            <img
              src="https://campusfestbucket.s3.us-west-1.amazonaws.com/Upsurge/smackathon/Gfg+White.png"
              alt=""
              className="gfgLogo"
            />
          </a>
          <h3 className="presents">Presents</h3>
          <a href="#">
            <img
              src="https://campusfestbucket.s3.us-west-1.amazonaws.com/Upsurge/smackathon/Final+Logo+Medium.png"
              alt=""
              className="smackathon_logo"
            />
          </a>

          {/* <div>
            <script
              src="https://widget.konfhub.com/widget.js"
              button_id="btn_4a14fc0aa37a"
            ></script>
          </div> */}

          <div className="btns">
            <button className="regBtn application_btn" onClick={openModal}>
              <span>register Here!</span>
            </button>
          </div>
        </div>
        <div className="modal hidden_model">
          <button className="close-modal" onClick={closeModal}>
            &times;
          </button>
          <iframe
            src="https://konfhub.com/widget/smackathon23?ticketId=9549"
            id="konfhub-widget"
            title="Register for Smackathon 23"
            width="94%"
            height="600"
          ></iframe>
        </div>
      </section>
      <section className="about">
        <h2 className="heading_smackathonPage">Smackathon</h2>
        <div className="bg_para">
          <p className="description">
            The Department of Computer Science and Engineering at YCCE organized
            an event called Smackathon Online as part of UPSURGE 2K22. The event
            was successfully managed by COSMOS. The hackathon was conducted
            online, offering a first prize of Rs 10,000, a second prize of Rs
            5,000, and a third prize of Rs 3,000. Problem statements were
            released on August 12, 2022, encompassing a total of 10 different
            domains within computer science.
            <br />
            <br />
            Participation required a team entry fee of Rs 500. A total of 12
            teams from various parts of India, including Surat, Nagpur, Sangli,
            Pune, Rajkot, Junagadh, Valsad, and more, registered for the event.
            The competition consisted of two rounds:
            <br />
            <br />
            <b>Round 1:</b> Preliminary round, where each team submitted a short
            descriptive video of their project.
            <br />
            <b>Round 2:</b> Judging round, where the jury comprised of Dr.
            Kishor Boyar from the CSE Department, Dr. Amoli Belsare from the
            Electronics and Telecommunication Department, and Prof. Rupa A.
            Fadnavis from the CSE Department. Five teams qualified for this
            final judging round based on their submitted code and descriptive
            video. After mutual deliberation among the jury, the winners were
            selected.
          </p>
          <h3 className="extra">
            TOP Teams will get chance to win Swags And Goodies from Official
            GeeksforGeeks 🎁
          </h3>
        </div>
      </section>
      {/* PRICE POOL SECTION STARTS*/}
      <div className="prizepool_info">
        <h2 className="pricepool_heading">WITH A WHOPPING PRIZE POOL OF</h2>
        <h1 className="pricepoolh1">₹30,000</h1>
      </div>
      <div style={{ width: '90%', margin: 'auto' }}>
        <div className="bg_para">
          <div className="pricepool_container">
            <div className="card1">
              <div className="pricepool_content">
                <h3>Second Prize</h3>
                <img
                  src="https://campusfestbucket.s3.us-west-1.amazonaws.com/Upsurge/images/2.png"
                  className="price2"
                  alt=""
                />
                <h4 id="PRIZE">₹7,000</h4>
              </div>
            </div>
            <div className="card2">
              <div className="pricepool_content">
                <h3>First Prize</h3>
                <img
                  src="https://campusfestbucket.s3.us-west-1.amazonaws.com/Upsurge/images/1.png"
                  className="price1"
                  alt=""
                />
                <h4 id="PRIZE1">₹12,000</h4>
              </div>
            </div>
            <div className="card3">
              <div className="pricepool_content">
                <h3>Third Prize</h3>
                <img
                  src="https://campusfestbucket.s3.us-west-1.amazonaws.com/Upsurge/images/3.png"
                  className="price3"
                  alt=""
                />
                <h4 id="PRIZE">₹3,000</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="voucher">
        <h2 className="voucher_heading">Exclusive Goodies From GFG </h2>
        <div className="goodies_container">
          <div className="left_goodies">
            <img
              src="https://campusfestbucket.s3.us-west-1.amazonaws.com/Upsurge/images/GFG-Goodies.png"
              alt=""
              className="goodies_img"
            />
          </div>

          <div className="right_goodies">
            <p className="goodies_para">
              1. Provide GFG Kits to the top 3 winners of the Hackathon. <br />
              2.GFG Discount coupons worth Rs2000 for winners. <br />
              3.GFG Discount coupons worth Rs300 for all participants.
            </p>
          </div>
        </div>
      </div>
      {/* PRICE POOL SECTION ENDS*/}
      {/* TIME LINE */}
      <div className="timeline">
        <h2 className="heading_smackathonPage timeline_heading">TimeLine</h2>
        <div className="container_timeline left_container">
          <img
            src="https://campusfestbucket.s3.us-west-1.amazonaws.com/Upsurge/smackathon/samay.png"
            alt="Image"
          />
          <div className="text-box">
            <h2 className="N">DAY 1</h2>
            <small className="M">
              10:00 am - Problem statements will be released for all
              participants.
            </small>
            <span className="left-container-arrow"></span>
          </div>
          <div style={{ height: '20px' }}></div>
        </div>
        <div className="container_timeline right_container">
          <img
            src="https://campusfestbucket.s3.us-west-1.amazonaws.com/Upsurge/smackathon/samay.png"
            alt="Image"
          />
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
          <img
            src="https://campusfestbucket.s3.us-west-1.amazonaws.com/Upsurge/smackathon/samay.png"
            alt="Image"
          />
          <div className="text-box">
            <h2 className="N">DAY 1</h2>
            <small className="N">1:00pm - Kahana khalo friends</small>
            <span className="left-container-arrow"></span>
          </div>
          <div style={{ height: '20px' }}></div>
        </div>
        <div className="container_timeline right_container">
          <img
            src="https://campusfestbucket.s3.us-west-1.amazonaws.com/Upsurge/smackathon/samay.png"
            alt="Image"
          />
          <div className="text-box">
            <h2 className="N">DAY 1</h2>
            <small className="N">5:00pm - short break lelo</small>
            <span className="right-container-arrow"></span>
          </div>
          <div style={{ height: '20px' }}></div>
        </div>
        <div className="container_timeline left_container">
          <img
            src="https://campusfestbucket.s3.us-west-1.amazonaws.com/Upsurge/smackathon/samay.png"
            alt="Image"
          />
          <div className="text-box">
            <h2 className="N">DAY 1</h2>
            <small className="N">8:30pm - firse Kahana Khalo</small>
            <span className="left-container-arrow"></span>
          </div>

          <div style={{ height: '20px' }}></div>
        </div>
        <div className="container_timeline right_container">
          <img
            src="https://campusfestbucket.s3.us-west-1.amazonaws.com/Upsurge/smackathon/samay.png"
            alt="Image"
          />
          <div className="text-box">
            <h2 className="N">DAY 2</h2>
            <small className="N">11:00 am - winnner will be announced</small>
            <span className="right-container-arrow"></span>
          </div>
          <div style={{ height: '20px' }}></div>
        </div>
        <div className="container_timeline left_container">
          <img
            src="https://campusfestbucket.s3.us-west-1.amazonaws.com/Upsurge/smackathon/samay.png"
            alt="Image"
          />
          <div className="text-box">
            <h2 className="N">DAY 2</h2>
            <small className="N">
              11:00 am - winnner will be announced at Validictory Ceremony
            </small>
            <span className="left-container-arrow"></span>
          </div>
          <div style={{ height: '20px' }}></div>
        </div>{' '}
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
          <img
            src="https://campusfestbucket.s3.us-west-1.amazonaws.com/Upsurge/images/peak.png"
            className="peaklogo1"
            alt=""
          />
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
          </div>
        </div>
      </div>
      {/* Veneus  ends here */}
      {/* Rules and regulation  and winner */}
      {/* rules */}
      <h1 className="rules_heading">
        Rules and Guidelines For Smackathon 2023
      </h1>
      <h2 className="rules_subheading">
        Here are some rules and guidelines for our community:
      </h2>
      <div className="rules_container">
        <div className="bg_para">
          <ul>
            <li>A team must Have 3 minimum and 5 maximum members.</li>
            <li>
              A Team ID will be allocated to the team on registration which
              shall be used for future references.
            </li>
            <li>
              The idea presented by the teams should be original (not protected
              by means of patent/copyright/technical publication by anyone).
            </li>
            <li>
              All modes of official communication will be through the Techfest
              e-mail
            </li>
            <li>
              Participants are advised to keep track of all folders in their
              e-mail accounts.
            </li>
            <li>
              Registrations are done through the Website of Upsurge.
              Participants must register by [registration deadline] to secure
              their spot.
            </li>
            <li>
              All modes of official communication will be through the Techfest
              e-mail. Participants are advised to keep track of all folders in
              their e-mail accounts.
            </li>
            <li>
              No responsibility will be held by Techfest, for any late, lost or
              misdirected entries
            </li>
            <li>
              Problem Statements to be Given on the day of the hackathon starts.
            </li>
            <li>
              All projects must align with the pre-announced hackathon theme or
              problem statement.
            </li>
            <li>
              Projects must be submitted by [24 HOURS]. Late submissions will
              not be considered for judging.
            </li>
            <li>
              Participants must not engage in any malicious or harmful
              activities.
            </li>
            <li>
              Meals and rest areas will be provided onsite (only if the
              accomodation is taken).
            </li>
          </ul>
        </div>
      </div>
      <h1 className="rules_heading assessment_heading">
        Assessment Criteria For Smackthon 2023
      </h1>
      <div className="assgn_container">
        <div className="bg_para">
          <ul>
            <div className="assgn_up">
              <li className="assgn_line">
                <img
                  src="https://static.vecteezy.com/system/resources/previews/006/800/303/original/quality-work-abstract-concept-illustration-quality-in-a-workplace-employee-performance-experienced-worker-speed-of-production-improvement-effective-management-abstract-metaphor-vector.jpg"
                  alt=""
                  className="assgn_vector"
                />
                <h4 className="assgn_title">Quality of work submitted</h4>
              </li>
              <li className="assgn_line">
                <img
                  src="https://img.freepik.com/free-vector/time-management-concept-talk-chart_23-2148831728.jpg"
                  alt=""
                  className="assgn_vector"
                />
                <h4 className="assgn_title">Timeliness of submissions</h4>
              </li>
            </div>
            <div className="assgn_down">
              <li className="assgn_line">
                <img
                  src="https://img.freepik.com/free-vector/meeting-concept-illustration_114360-717.jpg?w=2000"
                  alt=""
                  className="assgn_vector"
                />
                <h4 className="assgn_title">Participation in discussions</h4>
              </li>
              <li className="assgn_line">
                <img
                  src="https://img.freepik.com/free-vector/flat-creativity-concept-illustration_52683-64279.jpg?w=2000"
                  alt=""
                  className="assgn_vector"
                />
                <h4 className="assgn_title">Innovation through imagination</h4>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}
