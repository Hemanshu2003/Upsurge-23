/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-target-blank */
import './SmackathonPage.css';
import goodies from '../assets/images/GFG goodies Final.png';
import mi from '../assets/HomePage/Smackathon/wired-gradient-18-location-pin.gif';
import { Link } from 'react-router-dom';
import image from '../assets/images/health.png';
import image1 from '../assets/images/education1.png';
import image2 from '../assets/images/environment.png';
import image3 from '../assets/images/finance.png';
import image4 from '../assets/images/web3.png';
import image5 from '../assets/images/agriculture.png';
import image6 from '../assets/images/openinnvo.png';

import { useState } from 'react';

export default function SmackathonPage() {
  // eslint-disable-next-line no-unused-vars
  const [changeState, setState] = useState(false);

  function flipState() {
    setState((prev) => !prev);
    const accordionContent = document.querySelectorAll('.accordion-content');

    accordionContent.forEach((item, index) => {
      let header = item.querySelector('header');
      header.addEventListener('click', () => {
        item.classList.toggle('open');

        let description = item.querySelector('.description');
        if (item.classList.contains('open')) {
          description.style.height = `${description.scrollHeight}px`;
          item.querySelector('i').classList.replace('fa-plus', 'fa-minus');
        } else {
          description.style.height = '0px';
          item.querySelector('i').classList.replace('fa-minus', 'fa-plus');
        }
        removeOpen(index);
      });
    });
  }

  function removeOpen(index1) {
    const accordionContent = document.querySelectorAll('.accordion-content');
    accordionContent.forEach((item2, index2) => {
      if (index1 != index2) {
        item2.classList.remove('open');

        let des = item2.querySelector('.description');
        des.style.height = '0px';
        item2.querySelector('i').classList.replace('fa-minus', 'fa-plus');
      }
    });
  }

  const closeModal = function () {
    const modal = document.querySelector('.modal');
    modal.classList.add('hidden_model');
  };

  function PageChange() {
    window.scrollTo(0, 0);
  }

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
        <div className="powered_container">
          <div className="poweredBy">
            <h3 className="presents">Powered By</h3>
            <img
              src="https://campusfestbucket.s3.us-west-1.amazonaws.com/Upsurge/images/COJAG.png"
              alt=""
              className="cojag_logo"
            />
          </div>
          <div className="Co_poweredBy">
            <h3 className="presents">CO-Powered By</h3>
            <div className="Co_poweredBy_img">
              <img
                src="https://campusfestbucket.s3.us-west-1.amazonaws.com/Upsurge/images/my+doket'.png"
                alt=""
                className="doket_logo"
              />
              <span className="whiteLine"></span>
              <img
                src="https://campusfestbucket.s3.us-west-1.amazonaws.com/Upsurge/images/webgurukul.png"
                alt=""
                className="gurukul_logo"
              />
            </div>
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
      {/* <section className="about">
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
      </section> */}
      {/* PRICE POOL SECTION STARTS*/}
      <div className="prizepool_info">
        <h2 className="pricepool_heading">CASH Prizes</h2>
      </div>
      <div style={{ width: '84%', margin: 'auto' }}>
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
      {/* goodies section starts here */}
      <div className="voucher">
        <h2 className="voucher_heading">Exclusive Goodies From GFG </h2>
        <div className="goodies_container">
          <div className="left_goodies">
            <img src={goodies} alt="" className="goodies_img" />
          </div>

          <div className="right_goodies">
            <h3 className="goodies_para">
              1. Provide GFG Kits to the top 3 winners of the Hackathon.{' '}
            </h3>
            <br />
            <h3 className="goodies_para">
              2. GFG Discount coupons worth Rs2000 for winners.{' '}
            </h3>{' '}
            <br />
            <h3 className="goodies_para">
              3. GFG Discount coupons worth Rs300 for all participants.{' '}
            </h3>
          </div>
        </div>
      </div>
      {/* goodies section ends here */}
      {/* track section starts here */}
      <h1 className="faq_heading">Tracks</h1>
      <div className="track">
        <div className="track-info">
          <div className="imgHeading">
            {' '}
            <img src={image1} alt="Description of the image" />
            <h1 className="track-heading">Education</h1>
          </div>

          <p>
            These projects increase access to educational resources, facilitate
            learning in the classroom, or generally make acquiring knowledge a
            more engaging process. Hacks submitted to this category can range
            from all-encompassing edtech solutions to projects that bring
            awareness to a specific topic.
          </p>
        </div>

        <div className="track-info">
          <div className="imgHeading">
            <img src={image} alt="Description of the image" />
            <h2 className="track-heading">Healthcare</h2>
          </div>
          <p>
            These projects take on public health challenges, combat health
            disparities, or assist with maintaining personal wellness. Hacks
            submitted to this category can range from digital archives of public
            health information to apps that track the fitness data of an
            individual user.
          </p>
        </div>

        <div className="track-info">
          <div className="imgHeading">
            <img src={image2} alt="Description of the image" />
            <h2 className="track-heading">Environment</h2>
          </div>

          <p>
            These projects use technology to preserve ecological ecosystems or
            promote sustainable lifestyles. Hacks submitted to this category can
            range from sweeping solutions to pertinent environmental crises to
            apps that encourage small sustainable habits{' '}
          </p>
        </div>

        <div className="track-info">
          <div className="imgHeading">
            <img src={image3} alt="Description of the image" />
            <h2 className="track-heading">Finance</h2>
          </div>
          <p>
            These projects use technology to drive economic growth, generate
            employment opportunities, attract investments and achieve economic
            sustainability. Hacks submitted to this category can range from
            solutions to mitigate risks, revolutionize fintech, make
            transactions more secure and handle existing financial crisis.
          </p>{' '}
        </div>

        <div className="track-info">
          <div className="imgHeading">
            <img src={image4} alt="Description of the image" />
            <h2 className="track-heading">Web3</h2>
          </div>
          <p>
            These projects use technology to revolutionize the digital landscape
            and impact factors like data security with online platforms thereby
            building robust decentralized applications. Hacks submitted under
            this category can range from solutions pertinent to data ownership
            and privacy to decentralized apps that encourage censorship
            resistance, govern interoperability and harness environmental
            sustainability.
          </p>{' '}
        </div>

        <div className="track-info">
          <div className="imgHeading">
            <img src={image5} alt="Description of the image" />
            <h2 className="track-heading">Agriculture</h2>
          </div>
          <p>
            These projects use technology to influence a multitude of factors
            that range from crop cultivation, livestock management to
            agribusiness development. Hacks submitted to this category can range
            from sweeping solutions to pertinent agricultural and farming crisis
            to apps that encourage eco-friendly farming techniques and
            sustainable agribusiness.
          </p>
        </div>

        <div className="track-info last">
          <div className="imgHeading">
            <img src={image6} alt="Description of the image" />
            <h2 className="track-heading">Open Innovation</h2>
          </div>
          <p>
            Open innovation projects leverage technology and collaboration to
            foster innovation across various sectors and industries. Projects
            submitted to this category can encompass a wide range of
            initiatives, from open-source software development to collaborative
            research efforts and ecosystem-building activities.
          </p>
        </div>
      </div>
      {/* track section ends here */}
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
              08 : 30 AM : Check-in Time for Teams <br />
              09 : 30 AM : INAUGURATION
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
            <small className="M">
              10 : 00 AM : Problem Statements will be Released <br />
              11 : 30 AM : Teams to Lock and submit Their Problem Statements
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
            <small className="M">
              12 : 00 PM : Development To be Started
              <br />3 : 00 PM- 5:00 PM : Idea Presentation Round 1 Shortlisting
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
            <small className="M">
              7 : 30 PM - 10:30 PM : Dinner for teams who have opted for
              accommodation <br />
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
            <h2 className="N">DAY 2</h2>
            <small className="M">
              7 : 00 AM - 8 : 00 AM : BreakFast <br />8 : 30 AM : Final
              Elimination
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
            <h2 className="N">DAY 2</h2>
            <small className="M">
              10 : 00 PM - 12:00 PM : Final Presentation Round 2 Shortlisting{' '}
              <br />
              12 : 00 PM : Top 5 Finalists Declaration
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
            <h2 className="N">DAY 2</h2>
            <small className="M">
              2 : 00 PM : Winners to be Announced in the valedictory ceremony{' '}
              <br />
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
            <li>
              A team must consist of a minimum of 3 members and a maximum of 5
              members.
            </li>
            <li>
              A team access pass will be distributed to the team upon
              registration, which shall be used for future references.
            </li>
            <li>
              The ideas presented by the teams should be original and not
              protected by means of patents, copyrights, or technical
              publications by anyone.
            </li>
            <li>
              All official communication will be conducted through the
              Smackathon email. Participants are advised to monitor all folders
              in their email accounts.
            </li>
            <li>
              Registrations must be completed through the Upsurge website by the
              [registration deadline] to secure a spot.
            </li>
            <li>
              No responsibility will be held by the Smackathon Team for any
              late, lost, or misdirected entries.
            </li>
            <li>
              Problem statements will be provided on the day the hackathon
              starts.
            </li>
            <li>
              All projects must align with the pre-announced Smackathon theme or
              problem statement.
            </li>
            <li>
              Participants must not engage in any malicious or harmful
              activities.
            </li>
            <li>
              Meals and rest areas will be provided onsite only if accommodation
              is taken.
            </li>
            <li>
              According to YCCE Policy, no female participants are allowed to
              stay overnight. After 8 pm, they must leave the campus but can
              rejoin at 6 am the next day. Those from outside Nagpur will stay
              at YCCE girls hostel, and the organizing team will manage their
              accommodation.
            </li>
            <li>
              Rules and guidelines are subjected to change as per organizing
              team.
            </li>
          </ul>
        </div>
      </div>
      {/* rules end here */}

      {/* assgn critaria starts */}
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
      {/* assgn critaria ends */}

      {/* FAQS starts here */}
      <h1 className="faq_heading">FAQ's</h1>
      <div className="accordion">
        {/* <!-- question 1 --> */}
        <div className="accordion-content">
          <header className="header" onClick={flipState}>
            <span className="question">Q1. What is SMACKATHON?</span>
            <i className="fa fa-solid fa-plus"></i>
          </header>

          <p className="description">
            'SMACKATHON', presented by Geeks for Geeks and co-powered by COJAG
            is a 24 hour long challenge with innovative problem statements.
            Teams have to implement their tinkering ideas and craft an
            innovative solution by intensive step by step coding or software
            development.
          </p>
        </div>
        {/* <!-- question 2 --> */}
        <div className="accordion-content">
          <header className="header" onClick={flipState}>
            <span className="question">
              Q2. Why should one participate in Smackathon?
            </span>
            <i className="fa fa-solid fa-plus"></i>
          </header>

          <p className="description">
            Participating in Smackathon can build up your confidence and it’s a
            great platform to showcase your technical skills in front of all.
            Also the participants will be getting 20% discount on any GFG course
            and exlcusive GFG goodies and Rs.2000 coupons for each winner!
          </p>
        </div>
        {/* <!-- question 3 --> */}
        <div className="accordion-content">
          <header className="header" onClick={flipState}>
            <span className="question">
              Q3. Is there any eligibility criteria to participate in
              Smackathon? If yes, which candidates are eligible?
            </span>
            <i className="fa fa-solid fa-plus"></i>
          </header>

          <p className="description">
            There is no specific eligibility criteria. It’s an open opportunity
            for tech enthusiasts to harness their technical skill and craft an
            innovative solution. Students from any college and pursuing any
            course can participate.
          </p>
        </div>
        {/* <!-- question 4 --> */}
        <div className="accordion-content">
          <header className="header" onClick={flipState}>
            <span className="question">
              Q4. Is accomodation facility available for outsiders?
            </span>
            <i className="fa fa-solid fa-plus"></i>
          </header>

          <p className="description">
            Yes, accomodation facility is available for outsiders.
          </p>
        </div>
        {/* <!-- question 5 --> */}
        <div className="accordion-content">
          <header className="header" onClick={flipState}>
            <span className="question">
              Q5. What are the perks of attending Smackathon?
            </span>
            <i className="fa fa-solid fa-plus"></i>
          </header>

          <p className="description">
            Attending Smackathon is undoubtedly worth it. Alll the participants
            will be getting 20% discount on any GFG course and exlcusive GFG
            goodies and Rs.2000 coupons for each winner!
          </p>
        </div>
        {/* <!-- question 6 --> */}
        <div className="accordion-content">
          <header className="header" onClick={flipState}>
            <span className="question">
              Q6. When will the problem statement be provided to the candidate?
            </span>
            <i className="fa fa-solid fa-plus"></i>
          </header>

          <p className="description">
            The problem statement will be provided on the day of hackathon at
            10:00 am.
          </p>
        </div>
        {/* <!-- question 7 --> */}
        <div className="accordion-content">
          <header className="header" onClick={flipState}>
            <span className="question">
              Q7. Do I compulsorily need to have a team to participate?
            </span>
            <i className="fa fa-solid fa-plus"></i>
          </header>

          <p className="description">
            Yes, it is compulsory to participate in a team. Team can have
            minimum 3 and maximum 5 members.
          </p>
        </div>
      </div>

      {/* FAQS ends here */}
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

      {/* Footer starts here */}
      <footer className="footer_smackathon">
        <div className="innerFooter innerFooter_smackathon">
          <div className="logos_All">
            <img
              src="https://campusfestbucket.s3.us-west-1.amazonaws.com/Upsurge/smackathon/Upsurge_Logo.png"
              alt=""
              className="upsurge_logo upsurge_logo_smackathon"
            />

            <div className="logo">
              <img
                src="https://campusfestbucket.s3.us-west-1.amazonaws.com/Upsurge/images/ACM_final.png"
                alt=""
                width="80"
                className="acm"
              />
              <img
                src="https://campusfestbucket.s3.us-west-1.amazonaws.com/Upsurge/images/cosmos+new+logo.png"
                width="80"
                alt=""
                className="cosmos"
              />
            </div>
          </div>

          <div className="links_All">
            <div className="links links_smackathon">
              <a href="/#/smackathon" onClick={PageChange}>
                Smackathon
              </a>
              <a href="#">Schedule</a>
              <a href="#">Events</a>
              <a href="/#/team" onClick={PageChange}>
                Team
              </a>
            </div>
          </div>
          <div className="follow_All">
            <div className="social social_smackathon">
              <h3 className="followus_smackathon">Follow Us</h3>
              <div className="social_links">
                <a
                  href="https://www.instagram.com/cse_ycce_official/"
                  target="_blank"
                >
                  <i className="fa fa-instagram" aria-hidden="true"></i>
                </a>
                {/* <a href="#" target="_blank">
          <i className="fa fa-twitter" aria-hidden="true"></i>
          
        </a> */}
                <a href="mailto:smackathon@upsurge2k23.tech">
                  <i className="fa fa-envelope" aria-hidden="true"></i>
                </a>
                <a
                  href="https://www.linkedin.com/company/yccecosmos/"
                  target="_blank"
                >
                  <i className="fa fa-linkedin" aria-hidden="true"></i>
                </a>
              </div>
            </div>

            <div className="address_contact social_smackathon address_contact_Smackathon">
              <div className="address address_smackathon">
                <h3>Find Us</h3>
                <p>
                  CSE Dept, YCCE College <br />
                  Wanadongri, Nagpur
                </p>
              </div>
              <div className="contact contact_smackathon">
                <h3>Contact Us</h3>
                <div
                  className="contact_details"
                  style={{ textAlign: 'center' }}
                >
                  <div className="smackathon_contact_name">
                    <p>Sudhanshu Nerkar</p>
                    <p>(73919 95430)</p>
                  </div>
                  <div className="smackathon_contact_name">
                    <p>Navin Patil</p>
                    <p>(77450 10395)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* <h2 className="sponsor_heading">Sponsors</h2>

      <div className="links extra_link">
        <a href="#">Extra links </a>
        <a href="#">Extra links </a>
        <a href="#">Extra links </a>
        <a href="#">Extra links </a>
      </div> */}
          </div>
        </div>

        <div className="copyRight_container copyRight_container_smackathon">
          <p className="copyright">
            &copy; Copyrights belongs to Department Of Computer Science and
            Engineering <br />
            Developed By
            <Link
              to="/websiteteam"
              className="privacy_footer"
              style={{ padding: '0px 4px' }}
              onClick={PageChange}
            >
              Website Team CSE <br />
            </Link>
            <a
              href="https://campusfestbucket.s3.us-west-1.amazonaws.com/Upsurge/Privacy+and+policy+/privacy+policy+.pdf"
              className="privacy_footer"
              target="_blank"
            >
              Privacy Policy,
            </a>
            <a
              href="https://campusfestbucket.s3.us-west-1.amazonaws.com/Upsurge/Privacy+and+policy+/no+refund+policy+.pdf"
              className="privacy_footer"
              target="_blank"
            >
              No Refund Policy
            </a>
          </p>
        </div>
      </footer>
      {/* footer ends here */}
    </div>
  );
}
