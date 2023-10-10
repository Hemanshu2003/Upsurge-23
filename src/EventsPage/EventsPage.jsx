/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-target-blank */
import './EventsPage.css';

export default function EventsPage() {
  const closeModal = function (id) {
    const modal = document.querySelector(`.model--${id}`);
    modal.classList.add('hidden_model_events');
  };

  const openModel = function (id) {
    const modal = document.querySelector(`.model--${id}`);
    modal.classList.remove('hidden_model_events');
  };
  return (
    <div className="EventsPage">
      <div className="EventsPage_container">
        <h2 className="heading_smackathonPage timeline_heading forEvent_heading">
          Events
        </h2>
        {/* Event 1  */}
        <div id="agora" className="EventsPage_card">
          <img
            className="EventsPage_card-img"
            src="https://campusfestbucket.s3.us-west-1.amazonaws.com/Upsurge/Events/4_3/Agora_new.jpeg"
          />
          <div className="EventsPage_card-textbox">
            <div className="EventsPage_card-title">
              <h2>Agora for You</h2>
            </div>
            <div className="EventsPage_card-description">
              <p>
                Join us for an illuminating seminar dedicated to Agora, where
                our distinguished speaker will delve into the depths of this
                cutting-edge platform. Agora has rapidly emerged as a pivotal
                player in the world of real-time engagement, revolutionizing how
                we connect and interact online.
                <br />
                Discover how Agora's innovative technologies are powering
                interactive live streaming, video, voice, and messaging
                solutions across various domains, from education and healthcare
                to gaming and social media. Get ready to gain deeper insights
                into Agora's impact and explore how you can leverage this
                powerful platform to create engaging and immersive experiences.
              </p>
            </div>
            <div className="btnbtn">
              <button
                className="events_btn edge_corner"
                onClick={() => openModel(1)}
              >
                <svg
                  height="44px"
                  width="44px"
                  viewBox="0 0 36 36"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    fill="#ff4181"
                    y="0"
                    x="0"
                    height="44"
                    width="44"
                  ></rect>
                  <path
                    d="M38.67,42H11.52C11.27,40.62,11,38.57,11,36c0-5,0-11,0-11s1.44-7.39,3.22-9.59 c1.67-2.06,2.76-3.48,6.78-4.41c3-0.7,7.13-0.23,9,1c2.15,1.42,3.37,6.67,3.81,11.29c1.49-0.3,5.21,0.2,5.5,1.28 C40.89,30.29,39.48,38.31,38.67,42z"
                    fill="#fadadd"
                  ></path>
                  <path
                    d="M39.02,42H11.99c-0.22-2.67-0.48-7.05-0.49-12.72c0.83,4.18,1.63,9.59,6.98,9.79 c3.48,0.12,8.27,0.55,9.83-2.45c1.57-3,3.72-8.95,3.51-15.62c-0.19-5.84-1.75-8.2-2.13-8.7c0.59,0.66,3.74,4.49,4.01,11.7 c0.03,0.83,0.06,1.72,0.08,2.66c4.21-0.15,5.93,1.5,6.07,2.35C40.68,33.85,39.8,38.9,39.02,42z"
                    fill="#00610b"
                  ></path>
                  <path
                    d="M35,27.17c0,3.67-0.28,11.2-0.42,14.83h-2C32.72,38.42,33,30.83,33,27.17 c0-5.54-1.46-12.65-3.55-14.02c-1.65-1.08-5.49-1.48-8.23-0.85c-3.62,0.83-4.57,1.99-6.14,3.92L15,16.32 c-1.31,1.6-2.59,6.92-3,8.96v10.8c0,2.58,0.28,4.61,0.54,5.92H10.5c-0.25-1.41-0.5-3.42-0.5-5.92l0.02-11.09 c0.15-0.77,1.55-7.63,3.43-9.94l0.08-0.09c1.65-2.03,2.96-3.63,7.25-4.61c3.28-0.76,7.67-0.25,9.77,1.13 C33.79,13.6,35,22.23,35,27.17z"
                    fill="#212121"
                  ></path>
                  <path
                    d="M17.165,17.283c5.217-0.055,9.391,0.283,9,6.011c-0.391,5.728-8.478,5.533-9.391,5.337 c-0.913-0.196-7.826-0.043-7.696-5.337C9.209,18,13.645,17.32,17.165,17.283z"
                    fill="#01579b"
                  ></path>
                  <path
                    d="M40.739,37.38c-0.28,1.99-0.69,3.53-1.22,4.62h-2.43c0.25-0.19,1.13-1.11,1.67-4.9 c0.57-4-0.23-11.79-0.93-12.78c-0.4-0.4-2.63-0.8-4.37-0.89l0.1-1.99c1.04,0.05,4.53,0.31,5.71,1.49 C40.689,24.36,41.289,33.53,40.739,37.38z"
                    fill="#212121"
                  ></path>
                  <path
                    d="M10.154,20.201c0.261,2.059-0.196,3.351,2.543,3.546s8.076,1.022,9.402-0.554 c1.326-1.576,1.75-4.365-0.891-5.267C19.336,17.287,12.959,16.251,10.154,20.201z"
                    fill="#81d4fa"
                  ></path>
                  <path
                    d="M17.615,29.677c-0.502,0-0.873-0.03-1.052-0.069c-0.086-0.019-0.236-0.035-0.434-0.06 c-5.344-0.679-8.053-2.784-8.052-6.255c0.001-2.698,1.17-7.238,8.986-7.32l0.181-0.002c3.444-0.038,6.414-0.068,8.272,1.818 c1.173,1.191,1.712,3,1.647,5.53c-0.044,1.688-0.785,3.147-2.144,4.217C22.785,29.296,19.388,29.677,17.615,29.677z M17.086,17.973 c-7.006,0.074-7.008,4.023-7.008,5.321c-0.001,3.109,3.598,3.926,6.305,4.27c0.273,0.035,0.48,0.063,0.601,0.089 c0.563,0.101,4.68,0.035,6.855-1.732c0.865-0.702,1.299-1.57,1.326-2.653c0.051-1.958-0.301-3.291-1.073-4.075 c-1.262-1.281-3.834-1.255-6.825-1.222L17.086,17.973z"
                    fill="#212121"
                  ></path>
                  <path
                    d="M15.078,19.043c1.957-0.326,5.122-0.529,4.435,1.304c-0.489,1.304-7.185,2.185-7.185,0.652 C12.328,19.467,15.078,19.043,15.078,19.043z"
                    fill="#e1f5fe"
                  ></path>
                </svg>
                <span className="now">Now!</span>
                <span className="play">Register</span>
              </button>
            </div>
            <div className="model_event model--1 hidden_model_events">
              <button className="close-modal" onClick={() => closeModal(1)}>
                &times;
              </button>
              <iframe
                src="https://konfhub.com/widget/agora-seminar?ticketId=9773"
                id="konfhub-widget"
                title="Register for AGORA SEMINAR"
                width="94%"
                height="600"
              ></iframe>
            </div>
          </div>
        </div>
        {/* Event 2 */}
        <div id="web3" className="EventsPage_card EventsPage_card__2n ">
          <img
            className="EventsPage_card-img EventsPage_card-img__2n"
            src="https://campusfestbucket.s3.us-west-1.amazonaws.com/Upsurge/Events/4_3/WEB+3.0+Medium.png"
          />
          <div className="EventsPage_card-textbox">
            <div className="EventsPage_card-title">
              <h2>WEB3 Seminar</h2>
            </div>
            <div className="EventsPage_card-description">
              <p>
                Unveil the revolutionary era of Web3 in our upcoming seminar
                scheduled for October 12th. Web3 represents a paradigm shift in
                the way we interact with the digital world, and this seminar is
                your gateway to understanding its profound impact.
                <br />
                As Web3 continues to gain momentum and reshape industries, now
                is the time to familiarise yourself with this game-changing
                technology. Mark your calendar for October 12th and join us for
                an engaging seminar that will unlock the possibilities of Web3
                and its role in shaping the digital landscape. Don't miss this
                chance to be at the forefront of the Web3 revolution!
              </p>
            </div>
            <div className="btnbtn ">
              <button
                className="events_btn edge_corner"
                onClick={() => openModel(2)}
              >
                <svg
                  height="44px"
                  width="44px"
                  viewBox="0 0 36 36"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    fill="#ff4181"
                    y="0"
                    x="0"
                    height="44"
                    width="44"
                  ></rect>
                  <path
                    d="M38.67,42H11.52C11.27,40.62,11,38.57,11,36c0-5,0-11,0-11s1.44-7.39,3.22-9.59 c1.67-2.06,2.76-3.48,6.78-4.41c3-0.7,7.13-0.23,9,1c2.15,1.42,3.37,6.67,3.81,11.29c1.49-0.3,5.21,0.2,5.5,1.28 C40.89,30.29,39.48,38.31,38.67,42z"
                    fill="#ffff00"
                  ></path>
                  <path
                    d="M39.02,42H11.99c-0.22-2.67-0.48-7.05-0.49-12.72c0.83,4.18,1.63,9.59,6.98,9.79 c3.48,0.12,8.27,0.55,9.83-2.45c1.57-3,3.72-8.95,3.51-15.62c-0.19-5.84-1.75-8.2-2.13-8.7c0.59,0.66,3.74,4.49,4.01,11.7 c0.03,0.83,0.06,1.72,0.08,2.66c4.21-0.15,5.93,1.5,6.07,2.35C40.68,33.85,39.8,38.9,39.02,42z"
                    fill="#00610b"
                  ></path>
                  <path
                    d="M35,27.17c0,3.67-0.28,11.2-0.42,14.83h-2C32.72,38.42,33,30.83,33,27.17 c0-5.54-1.46-12.65-3.55-14.02c-1.65-1.08-5.49-1.48-8.23-0.85c-3.62,0.83-4.57,1.99-6.14,3.92L15,16.32 c-1.31,1.6-2.59,6.92-3,8.96v10.8c0,2.58,0.28,4.61,0.54,5.92H10.5c-0.25-1.41-0.5-3.42-0.5-5.92l0.02-11.09 c0.15-0.77,1.55-7.63,3.43-9.94l0.08-0.09c1.65-2.03,2.96-3.63,7.25-4.61c3.28-0.76,7.67-0.25,9.77,1.13 C33.79,13.6,35,22.23,35,27.17z"
                    fill="#212121"
                  ></path>
                  <path
                    d="M17.165,17.283c5.217-0.055,9.391,0.283,9,6.011c-0.391,5.728-8.478,5.533-9.391,5.337 c-0.913-0.196-7.826-0.043-7.696-5.337C9.209,18,13.645,17.32,17.165,17.283z"
                    fill="#01579b"
                  ></path>
                  <path
                    d="M40.739,37.38c-0.28,1.99-0.69,3.53-1.22,4.62h-2.43c0.25-0.19,1.13-1.11,1.67-4.9 c0.57-4-0.23-11.79-0.93-12.78c-0.4-0.4-2.63-0.8-4.37-0.89l0.1-1.99c1.04,0.05,4.53,0.31,5.71,1.49 C40.689,24.36,41.289,33.53,40.739,37.38z"
                    fill="#212121"
                  ></path>
                  <path
                    d="M10.154,20.201c0.261,2.059-0.196,3.351,2.543,3.546s8.076,1.022,9.402-0.554 c1.326-1.576,1.75-4.365-0.891-5.267C19.336,17.287,12.959,16.251,10.154,20.201z"
                    fill="#81d4fa"
                  ></path>
                  <path
                    d="M17.615,29.677c-0.502,0-0.873-0.03-1.052-0.069c-0.086-0.019-0.236-0.035-0.434-0.06 c-5.344-0.679-8.053-2.784-8.052-6.255c0.001-2.698,1.17-7.238,8.986-7.32l0.181-0.002c3.444-0.038,6.414-0.068,8.272,1.818 c1.173,1.191,1.712,3,1.647,5.53c-0.044,1.688-0.785,3.147-2.144,4.217C22.785,29.296,19.388,29.677,17.615,29.677z M17.086,17.973 c-7.006,0.074-7.008,4.023-7.008,5.321c-0.001,3.109,3.598,3.926,6.305,4.27c0.273,0.035,0.48,0.063,0.601,0.089 c0.563,0.101,4.68,0.035,6.855-1.732c0.865-0.702,1.299-1.57,1.326-2.653c0.051-1.958-0.301-3.291-1.073-4.075 c-1.262-1.281-3.834-1.255-6.825-1.222L17.086,17.973z"
                    fill="#212121"
                  ></path>
                  <path
                    d="M15.078,19.043c1.957-0.326,5.122-0.529,4.435,1.304c-0.489,1.304-7.185,2.185-7.185,0.652 C12.328,19.467,15.078,19.043,15.078,19.043z"
                    fill="#e1f5fe"
                  ></path>
                </svg>
                <span className="now">Now!</span>
                <span className="play">Register</span>
              </button>
            </div>
            <div className="model_event model--2 hidden_model_events">
              <button className="close-modal" onClick={() => closeModal(2)}>
                &times;
              </button>
              <iframe
                src="https://konfhub.com/widget/web3-seminar?ticketId=9793"
                id="konfhub-widget"
                title="Register for WEB3 SEMINAR"
                width="94%"
                height="600"
              ></iframe>
            </div>
          </div>
        </div>
        {/* Event 3 */}
        <div id="ethicalhacking" className="EventsPage_card">
          <img
            className="EventsPage_card-img"
            src="https://campusfestbucket.s3.us-west-1.amazonaws.com/Upsurge/Events/4_3/eh43+Medium.png"
          />
          <div className="EventsPage_card-textbox">
            <div className="EventsPage_card-title">
              <h2>Hands-on Session on Ethical Hacking: Network Security</h2>
            </div>
            <div className="EventsPage_card-description">
              <p>
                On October 12th, gear up for an interactive and practical
                exploration of cybersecurity in our hands-on session. In an
                increasingly digital world, understanding how to protect your
                online presence is paramount, and this session is designed to
                equip you with essential skills.
                <br />
                Please remember to bring your laptops, as this session will be a
                true hands-on experience. Our expert facilitator will guide you
                through a series of exercises, simulations, and real-world
                scenarios to help you grasp the fundamentals of cybersecurity.
                From identifying common vulnerabilities to learning about
                encryption and safe browsing practices, you'll gain valuable
                insights into safeguarding your digital assets.
              </p>
            </div>
            <div className="btnbtn" onClick={() => openModel(3)}>
              <button className="events_btn edge_corner">
                <svg
                  height="44px"
                  width="44px"
                  viewBox="0 0 36 36"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    fill="#ff4181"
                    y="0"
                    x="0"
                    height="44"
                    width="44"
                  ></rect>
                  <path
                    d="M38.67,42H11.52C11.27,40.62,11,38.57,11,36c0-5,0-11,0-11s1.44-7.39,3.22-9.59 c1.67-2.06,2.76-3.48,6.78-4.41c3-0.7,7.13-0.23,9,1c2.15,1.42,3.37,6.67,3.81,11.29c1.49-0.3,5.21,0.2,5.5,1.28 C40.89,30.29,39.48,38.31,38.67,42z"
                    fill="#23de39"
                  ></path>
                  <path
                    d="M39.02,42H11.99c-0.22-2.67-0.48-7.05-0.49-12.72c0.83,4.18,1.63,9.59,6.98,9.79 c3.48,0.12,8.27,0.55,9.83-2.45c1.57-3,3.72-8.95,3.51-15.62c-0.19-5.84-1.75-8.2-2.13-8.7c0.59,0.66,3.74,4.49,4.01,11.7 c0.03,0.83,0.06,1.72,0.08,2.66c4.21-0.15,5.93,1.5,6.07,2.35C40.68,33.85,39.8,38.9,39.02,42z"
                    fill="#00610b"
                  ></path>
                  <path
                    d="M35,27.17c0,3.67-0.28,11.2-0.42,14.83h-2C32.72,38.42,33,30.83,33,27.17 c0-5.54-1.46-12.65-3.55-14.02c-1.65-1.08-5.49-1.48-8.23-0.85c-3.62,0.83-4.57,1.99-6.14,3.92L15,16.32 c-1.31,1.6-2.59,6.92-3,8.96v10.8c0,2.58,0.28,4.61,0.54,5.92H10.5c-0.25-1.41-0.5-3.42-0.5-5.92l0.02-11.09 c0.15-0.77,1.55-7.63,3.43-9.94l0.08-0.09c1.65-2.03,2.96-3.63,7.25-4.61c3.28-0.76,7.67-0.25,9.77,1.13 C33.79,13.6,35,22.23,35,27.17z"
                    fill="#212121"
                  ></path>
                  <path
                    d="M17.165,17.283c5.217-0.055,9.391,0.283,9,6.011c-0.391,5.728-8.478,5.533-9.391,5.337 c-0.913-0.196-7.826-0.043-7.696-5.337C9.209,18,13.645,17.32,17.165,17.283z"
                    fill="#01579b"
                  ></path>
                  <path
                    d="M40.739,37.38c-0.28,1.99-0.69,3.53-1.22,4.62h-2.43c0.25-0.19,1.13-1.11,1.67-4.9 c0.57-4-0.23-11.79-0.93-12.78c-0.4-0.4-2.63-0.8-4.37-0.89l0.1-1.99c1.04,0.05,4.53,0.31,5.71,1.49 C40.689,24.36,41.289,33.53,40.739,37.38z"
                    fill="#212121"
                  ></path>
                  <path
                    d="M10.154,20.201c0.261,2.059-0.196,3.351,2.543,3.546s8.076,1.022,9.402-0.554 c1.326-1.576,1.75-4.365-0.891-5.267C19.336,17.287,12.959,16.251,10.154,20.201z"
                    fill="#81d4fa"
                  ></path>
                  <path
                    d="M17.615,29.677c-0.502,0-0.873-0.03-1.052-0.069c-0.086-0.019-0.236-0.035-0.434-0.06 c-5.344-0.679-8.053-2.784-8.052-6.255c0.001-2.698,1.17-7.238,8.986-7.32l0.181-0.002c3.444-0.038,6.414-0.068,8.272,1.818 c1.173,1.191,1.712,3,1.647,5.53c-0.044,1.688-0.785,3.147-2.144,4.217C22.785,29.296,19.388,29.677,17.615,29.677z M17.086,17.973 c-7.006,0.074-7.008,4.023-7.008,5.321c-0.001,3.109,3.598,3.926,6.305,4.27c0.273,0.035,0.48,0.063,0.601,0.089 c0.563,0.101,4.68,0.035,6.855-1.732c0.865-0.702,1.299-1.57,1.326-2.653c0.051-1.958-0.301-3.291-1.073-4.075 c-1.262-1.281-3.834-1.255-6.825-1.222L17.086,17.973z"
                    fill="#212121"
                  ></path>
                  <path
                    d="M15.078,19.043c1.957-0.326,5.122-0.529,4.435,1.304c-0.489,1.304-7.185,2.185-7.185,0.652 C12.328,19.467,15.078,19.043,15.078,19.043z"
                    fill="#e1f5fe"
                  ></path>
                </svg>
                <span className="now">Now!</span>
                <span className="play">Register</span>
              </button>
            </div>
            <div className="model_event model--3 hidden_model_events">
              <button className="close-modal" onClick={() => closeModal(3)}>
                &times;
              </button>
              <iframe
                src="https://konfhub.com/widget/handson-cyber?ticketId=9792"
                id="konfhub-widget"
                title="Register for Hands on Cyber"
                width="94%"
                height="600"
              ></iframe>
            </div>
          </div>
        </div>
        {/* Event 4 */}
        <div id="linkedin" className="EventsPage_card EventsPage_card__2n">
          <img
            className="EventsPage_card-img EventsPage_card-img__2n"
            src="https://campusfestbucket.s3.us-west-1.amazonaws.com/Upsurge/Events/4_3/LINKEDIN+Medium.png"
          />
          <div className="EventsPage_card-textbox">
            <div className="EventsPage_card-title">
              <h2>LinkedIn Seminar</h2>
            </div>
            <div className="EventsPage_card-description">
              <p>
                Unlock the full potential of your LinkedIn profile at our
                upcoming seminar on October 13th. In today's digital age,
                LinkedIn has become a crucial tool for professional networking
                and career growth. Whether you're a job seeker, a business
                professional, or simply looking to expand your network, this
                seminar is designed to provide you with actionable strategies
                and tips to make your LinkedIn profile stand out.
                <br />
                But it doesn't stop there. Our speaker will also discuss
                networking best practices, content sharing strategies, and
                engagement techniques to help you make the most of your LinkedIn
                presence. Whether you're a LinkedIn novice or looking to
                fine-tune your existing profile, this seminar is your gateway to
                improving your professional online image.
              </p>
            </div>
            <div className="btnbtn" onClick={() => openModel(4)}>
              <button className="events_btn edge_corner">
                <svg
                  height="44px"
                  width="44px"
                  viewBox="0 0 36 36"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    fill="#ff4181"
                    y="0"
                    x="0"
                    height="44"
                    width="44"
                  ></rect>
                  <path
                    d="M38.67,42H11.52C11.27,40.62,11,38.57,11,36c0-5,0-11,0-11s1.44-7.39,3.22-9.59 c1.67-2.06,2.76-3.48,6.78-4.41c3-0.7,7.13-0.23,9,1c2.15,1.42,3.37,6.67,3.81,11.29c1.49-0.3,5.21,0.2,5.5,1.28 C40.89,30.29,39.48,38.31,38.67,42z"
                    fill="#00FFFF"
                  ></path>
                  <path
                    d="M39.02,42H11.99c-0.22-2.67-0.48-7.05-0.49-12.72c0.83,4.18,1.63,9.59,6.98,9.79 c3.48,0.12,8.27,0.55,9.83-2.45c1.57-3,3.72-8.95,3.51-15.62c-0.19-5.84-1.75-8.2-2.13-8.7c0.59,0.66,3.74,4.49,4.01,11.7 c0.03,0.83,0.06,1.72,0.08,2.66c4.21-0.15,5.93,1.5,6.07,2.35C40.68,33.85,39.8,38.9,39.02,42z"
                    fill="#00610b"
                  ></path>
                  <path
                    d="M35,27.17c0,3.67-0.28,11.2-0.42,14.83h-2C32.72,38.42,33,30.83,33,27.17 c0-5.54-1.46-12.65-3.55-14.02c-1.65-1.08-5.49-1.48-8.23-0.85c-3.62,0.83-4.57,1.99-6.14,3.92L15,16.32 c-1.31,1.6-2.59,6.92-3,8.96v10.8c0,2.58,0.28,4.61,0.54,5.92H10.5c-0.25-1.41-0.5-3.42-0.5-5.92l0.02-11.09 c0.15-0.77,1.55-7.63,3.43-9.94l0.08-0.09c1.65-2.03,2.96-3.63,7.25-4.61c3.28-0.76,7.67-0.25,9.77,1.13 C33.79,13.6,35,22.23,35,27.17z"
                    fill="#212121"
                  ></path>
                  <path
                    d="M17.165,17.283c5.217-0.055,9.391,0.283,9,6.011c-0.391,5.728-8.478,5.533-9.391,5.337 c-0.913-0.196-7.826-0.043-7.696-5.337C9.209,18,13.645,17.32,17.165,17.283z"
                    fill="#01579b"
                  ></path>
                  <path
                    d="M40.739,37.38c-0.28,1.99-0.69,3.53-1.22,4.62h-2.43c0.25-0.19,1.13-1.11,1.67-4.9 c0.57-4-0.23-11.79-0.93-12.78c-0.4-0.4-2.63-0.8-4.37-0.89l0.1-1.99c1.04,0.05,4.53,0.31,5.71,1.49 C40.689,24.36,41.289,33.53,40.739,37.38z"
                    fill="#212121"
                  ></path>
                  <path
                    d="M10.154,20.201c0.261,2.059-0.196,3.351,2.543,3.546s8.076,1.022,9.402-0.554 c1.326-1.576,1.75-4.365-0.891-5.267C19.336,17.287,12.959,16.251,10.154,20.201z"
                    fill="#81d4fa"
                  ></path>
                  <path
                    d="M17.615,29.677c-0.502,0-0.873-0.03-1.052-0.069c-0.086-0.019-0.236-0.035-0.434-0.06 c-5.344-0.679-8.053-2.784-8.052-6.255c0.001-2.698,1.17-7.238,8.986-7.32l0.181-0.002c3.444-0.038,6.414-0.068,8.272,1.818 c1.173,1.191,1.712,3,1.647,5.53c-0.044,1.688-0.785,3.147-2.144,4.217C22.785,29.296,19.388,29.677,17.615,29.677z M17.086,17.973 c-7.006,0.074-7.008,4.023-7.008,5.321c-0.001,3.109,3.598,3.926,6.305,4.27c0.273,0.035,0.48,0.063,0.601,0.089 c0.563,0.101,4.68,0.035,6.855-1.732c0.865-0.702,1.299-1.57,1.326-2.653c0.051-1.958-0.301-3.291-1.073-4.075 c-1.262-1.281-3.834-1.255-6.825-1.222L17.086,17.973z"
                    fill="#212121"
                  ></path>
                  <path
                    d="M15.078,19.043c1.957-0.326,5.122-0.529,4.435,1.304c-0.489,1.304-7.185,2.185-7.185,0.652 C12.328,19.467,15.078,19.043,15.078,19.043z"
                    fill="#e1f5fe"
                  ></path>
                </svg>
                <span className="now">Now!</span>
                <span className="play">Register</span>
              </button>
            </div>
            <div className="model_event model--4 hidden_model_events">
              <button className="close-modal" onClick={() => closeModal(4)}>
                &times;
              </button>
              <iframe
                src="https://konfhub.com/widget/linkedin-seminar?ticketId=9771"
                id="konfhub-widget"
                title="Register for LINKEDIN SEMINAR"
                width="94%"
                height="600"
              ></iframe>
            </div>
          </div>
        </div>
        {/* Event 5 */}

        <div id="debugging" className="EventPage_innerContainer">
          <div className="EventsPage_card">
            <img
              className="EventsPage_card-img"
              src="https://campusfestbucket.s3.us-west-1.amazonaws.com/Upsurge/Events/4_3/DEBUGGING+QUIZ+Medium.png"
            />
            <div className="EventsPage_card-textbox">
              <div className="EventsPage_card-title">
                <h2>Debugging Quiz</h2>
              </div>
              <div className="EventsPage_card-description">
                <p>
                  Welcome to the thrilling and highly anticipated "Debugging
                  Quiz" brought to you by Upsurge 2k23! Dive into the exciting
                  world of debugging, where precision meets intellect. This
                  geeky competition is designed to challenge participants,
                  whether you're a budding programmer or an experienced coder,
                  to unravel the mysteries of faulty code and emerge as the
                  champion of debugging.
                  <br />
                  With cash prizes of rupees 1200, 1st rupees 800 & 2nd rupees
                  400, this is your chance to showcase your debugging skills and
                  claim the title of debugging champion. Don't forget to bring
                  your laptop, and we'll see you on October 11th, 2023, at the
                  Computer Science Department!
                </p>
              </div>
              <div className="btnbtn">
                <a href="https://forms.gle/nrmjMiQbQeho1yXG9" target="_blank">
                  <button className="events_btn edge_corner">
                    <svg
                      height="44px"
                      width="44px"
                      viewBox="0 0 36 36"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        fill="#ff4181"
                        y="0"
                        x="0"
                        height="44"
                        width="44"
                      ></rect>
                      <path
                        d="M38.67,42H11.52C11.27,40.62,11,38.57,11,36c0-5,0-11,0-11s1.44-7.39,3.22-9.59 c1.67-2.06,2.76-3.48,6.78-4.41c3-0.7,7.13-0.23,9,1c2.15,1.42,3.37,6.67,3.81,11.29c1.49-0.3,5.21,0.2,5.5,1.28 C40.89,30.29,39.48,38.31,38.67,42z"
                        fill="#23de39"
                      ></path>
                      <path
                        d="M39.02,42H11.99c-0.22-2.67-0.48-7.05-0.49-12.72c0.83,4.18,1.63,9.59,6.98,9.79 c3.48,0.12,8.27,0.55,9.83-2.45c1.57-3,3.72-8.95,3.51-15.62c-0.19-5.84-1.75-8.2-2.13-8.7c0.59,0.66,3.74,4.49,4.01,11.7 c0.03,0.83,0.06,1.72,0.08,2.66c4.21-0.15,5.93,1.5,6.07,2.35C40.68,33.85,39.8,38.9,39.02,42z"
                        fill="#00610b"
                      ></path>
                      <path
                        d="M35,27.17c0,3.67-0.28,11.2-0.42,14.83h-2C32.72,38.42,33,30.83,33,27.17 c0-5.54-1.46-12.65-3.55-14.02c-1.65-1.08-5.49-1.48-8.23-0.85c-3.62,0.83-4.57,1.99-6.14,3.92L15,16.32 c-1.31,1.6-2.59,6.92-3,8.96v10.8c0,2.58,0.28,4.61,0.54,5.92H10.5c-0.25-1.41-0.5-3.42-0.5-5.92l0.02-11.09 c0.15-0.77,1.55-7.63,3.43-9.94l0.08-0.09c1.65-2.03,2.96-3.63,7.25-4.61c3.28-0.76,7.67-0.25,9.77,1.13 C33.79,13.6,35,22.23,35,27.17z"
                        fill="#212121"
                      ></path>
                      <path
                        d="M17.165,17.283c5.217-0.055,9.391,0.283,9,6.011c-0.391,5.728-8.478,5.533-9.391,5.337 c-0.913-0.196-7.826-0.043-7.696-5.337C9.209,18,13.645,17.32,17.165,17.283z"
                        fill="#01579b"
                      ></path>
                      <path
                        d="M40.739,37.38c-0.28,1.99-0.69,3.53-1.22,4.62h-2.43c0.25-0.19,1.13-1.11,1.67-4.9 c0.57-4-0.23-11.79-0.93-12.78c-0.4-0.4-2.63-0.8-4.37-0.89l0.1-1.99c1.04,0.05,4.53,0.31,5.71,1.49 C40.689,24.36,41.289,33.53,40.739,37.38z"
                        fill="#212121"
                      ></path>
                      <path
                        d="M10.154,20.201c0.261,2.059-0.196,3.351,2.543,3.546s8.076,1.022,9.402-0.554 c1.326-1.576,1.75-4.365-0.891-5.267C19.336,17.287,12.959,16.251,10.154,20.201z"
                        fill="#81d4fa"
                      ></path>
                      <path
                        d="M17.615,29.677c-0.502,0-0.873-0.03-1.052-0.069c-0.086-0.019-0.236-0.035-0.434-0.06 c-5.344-0.679-8.053-2.784-8.052-6.255c0.001-2.698,1.17-7.238,8.986-7.32l0.181-0.002c3.444-0.038,6.414-0.068,8.272,1.818 c1.173,1.191,1.712,3,1.647,5.53c-0.044,1.688-0.785,3.147-2.144,4.217C22.785,29.296,19.388,29.677,17.615,29.677z M17.086,17.973 c-7.006,0.074-7.008,4.023-7.008,5.321c-0.001,3.109,3.598,3.926,6.305,4.27c0.273,0.035,0.48,0.063,0.601,0.089 c0.563,0.101,4.68,0.035,6.855-1.732c0.865-0.702,1.299-1.57,1.326-2.653c0.051-1.958-0.301-3.291-1.073-4.075 c-1.262-1.281-3.834-1.255-6.825-1.222L17.086,17.973z"
                        fill="#212121"
                      ></path>
                      <path
                        d="M15.078,19.043c1.957-0.326,5.122-0.529,4.435,1.304c-0.489,1.304-7.185,2.185-7.185,0.652 C12.328,19.467,15.078,19.043,15.078,19.043z"
                        fill="#e1f5fe"
                      ></path>
                    </svg>
                    <span className="now">now!</span>
                    <span className="play">Register</span>
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div id="fadframe" className="EventsPage_card EventsPage_card__2n">
            <img
              className="EventsPage_card-img EventsPage_card-img__2n"
              src="https://campusfestbucket.s3.us-west-1.amazonaws.com/Upsurge/Events/4_3/FAD+FRAME+Large.jpeg"
            />
            <div className="EventsPage_card-textbox ">
              <div className="EventsPage_card-title">
                <h2>Fad Frame</h2>
              </div>
              <div className="EventsPage_card-description">
                <p>
                  Welcome to FadFrame, where creativity and talent converge in
                  two thrilling competitions: <br /> <b>• Trending Rhythms:</b>{' '}
                  Express yourself through dance moves or your melodious
                  voice.Whether solo or in a group, showcase your artistic
                  interpretation of popular songs. The entry fee for Trending
                  Rhythms is just 50 INR. <br /> <b>• Captured Campus:</b> Lens
                  Ready? Grab your smartphone (no cameras) and capture the
                  essence of our campus through your lens. Transform ordinary
                  scenes into extraordinary photos. The entry fee for Captured
                  Campus is 30 INR. Register easily with Google Forms, Combine
                  entry fees for both challenges is 70 INR.
                </p>
              </div>
              <div className="btnbtn">
                <a
                  className="events_link"
                  href="https://forms.gle/bYtHskQxPQhcxs947"
                  target="_blank"
                >
                  <button className="events_btn edge_corner">
                    <svg
                      height="44px"
                      width="44px"
                      viewBox="0 0 36 36"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        fill="#ff4181"
                        y="0"
                        x="0"
                        height="44"
                        width="44"
                      ></rect>
                      <path
                        d="M38.67,42H11.52C11.27,40.62,11,38.57,11,36c0-5,0-11,0-11s1.44-7.39,3.22-9.59 c1.67-2.06,2.76-3.48,6.78-4.41c3-0.7,7.13-0.23,9,1c2.15,1.42,3.37,6.67,3.81,11.29c1.49-0.3,5.21,0.2,5.5,1.28 C40.89,30.29,39.48,38.31,38.67,42z"
                        fill="#297bff"
                      ></path>
                      <path
                        d="M39.02,42H11.99c-0.22-2.67-0.48-7.05-0.49-12.72c0.83,4.18,1.63,9.59,6.98,9.79 c3.48,0.12,8.27,0.55,9.83-2.45c1.57-3,3.72-8.95,3.51-15.62c-0.19-5.84-1.75-8.2-2.13-8.7c0.59,0.66,3.74,4.49,4.01,11.7 c0.03,0.83,0.06,1.72,0.08,2.66c4.21-0.15,5.93,1.5,6.07,2.35C40.68,33.85,39.8,38.9,39.02,42z"
                        fill="#6b0191"
                      ></path>
                      <path
                        d="M35,27.17c0,3.67-0.28,11.2-0.42,14.83h-2C32.72,38.42,33,30.83,33,27.17 c0-5.54-1.46-12.65-3.55-14.02c-1.65-1.08-5.49-1.48-8.23-0.85c-3.62,0.83-4.57,1.99-6.14,3.92L15,16.32 c-1.31,1.6-2.59,6.92-3,8.96v10.8c0,2.58,0.28,4.61,0.54,5.92H10.5c-0.25-1.41-0.5-3.42-0.5-5.92l0.02-11.09 c0.15-0.77,1.55-7.63,3.43-9.94l0.08-0.09c1.65-2.03,2.96-3.63,7.25-4.61c3.28-0.76,7.67-0.25,9.77,1.13 C33.79,13.6,35,22.23,35,27.17z"
                        fill="#212121"
                      ></path>
                      <path
                        d="M17.165,17.283c5.217-0.055,9.391,0.283,9,6.011c-0.391,5.728-8.478,5.533-9.391,5.337 c-0.913-0.196-7.826-0.043-7.696-5.337C9.209,18,13.645,17.32,17.165,17.283z"
                        fill="#01579b"
                      ></path>
                      <path
                        d="M40.739,37.38c-0.28,1.99-0.69,3.53-1.22,4.62h-2.43c0.25-0.19,1.13-1.11,1.67-4.9 c0.57-4-0.23-11.79-0.93-12.78c-0.4-0.4-2.63-0.8-4.37-0.89l0.1-1.99c1.04,0.05,4.53,0.31,5.71,1.49 C40.689,24.36,41.289,33.53,40.739,37.38z"
                        fill="#212121"
                      ></path>
                      <path
                        d="M10.154,20.201c0.261,2.059-0.196,3.351,2.543,3.546s8.076,1.022,9.402-0.554 c1.326-1.576,1.75-4.365-0.891-5.267C19.336,17.287,12.959,16.251,10.154,20.201z"
                        fill="#81d4fa"
                      ></path>
                      <path
                        d="M17.615,29.677c-0.502,0-0.873-0.03-1.052-0.069c-0.086-0.019-0.236-0.035-0.434-0.06 c-5.344-0.679-8.053-2.784-8.052-6.255c0.001-2.698,1.17-7.238,8.986-7.32l0.181-0.002c3.444-0.038,6.414-0.068,8.272,1.818 c1.173,1.191,1.712,3,1.647,5.53c-0.044,1.688-0.785,3.147-2.144,4.217C22.785,29.296,19.388,29.677,17.615,29.677z M17.086,17.973 c-7.006,0.074-7.008,4.023-7.008,5.321c-0.001,3.109,3.598,3.926,6.305,4.27c0.273,0.035,0.48,0.063,0.601,0.089 c0.563,0.101,4.68,0.035,6.855-1.732c0.865-0.702,1.299-1.57,1.326-2.653c0.051-1.958-0.301-3.291-1.073-4.075 c-1.262-1.281-3.834-1.255-6.825-1.222L17.086,17.973z"
                        fill="#212121"
                      ></path>
                      <path
                        d="M15.078,19.043c1.957-0.326,5.122-0.529,4.435,1.304c-0.489,1.304-7.185,2.185-7.185,0.652 C12.328,19.467,15.078,19.043,15.078,19.043z"
                        fill="#e1f5fe"
                      ></path>
                    </svg>
                    <span className="now">Now!</span>
                    <span className="play">Register</span>
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div id="talentesque" className="EventsPage_card">
            <img
              className="EventsPage_card-img"
              src="https://campusfestbucket.s3.us-west-1.amazonaws.com/Upsurge/Events/4_3/TALENT+SHOW1.png"
            />
            <div className="EventsPage_card-textbox">
              <div className="EventsPage_card-title">
                <h2>Talentesque</h2>
              </div>
              <div className="EventsPage_card-description">
                <p>
                  Join us for an extraordinary showcase of talent at our
                  upcoming event on 13th Oct 2023. Participants from all
                  backgrounds are invited to take the stage and reveal their
                  unique abilities, which can encompass singing, dancing,
                  poetry, stand-up comedy, playing musical instruments, and any
                  other remarkable skills they possess. Each contestant or team
                  will have a generous 3-minute window to impress the audience,
                  with the option to extend their performance time upon request.
                  <br />
                  Join us in the vibrant setting of the CSE department, and for
                  those eager to participate, entry fees are as follows: Solo -
                  50rs, Duo - 80rs, and Groups of more than 2 members - 120rs.
                  Exciting prizes await, with the 1st place winner receiving
                  1000rs and the 2nd place winner taking home 700rs. Don't miss
                  your chance to shine and make a lasting impression!
                </p>
              </div>
              <div className="btnbtn">
                <a
                  className="events_link"
                  href="https://forms.gle/Pun4cimLwd7rUq4F8"
                  target="_blank"
                >
                  <button className="events_btn edge_corner">
                    <svg
                      height="44px"
                      width="44px"
                      viewBox="0 0 36 36"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        fill="#ff4181"
                        y="0"
                        x="0"
                        height="44"
                        width="44"
                      ></rect>
                      <path
                        d="M38.67,42H11.52C11.27,40.62,11,38.57,11,36c0-5,0-11,0-11s1.44-7.39,3.22-9.59 c1.67-2.06,2.76-3.48,6.78-4.41c3-0.7,7.13-0.23,9,1c2.15,1.42,3.37,6.67,3.81,11.29c1.49-0.3,5.21,0.2,5.5,1.28 C40.89,30.29,39.48,38.31,38.67,42z"
                        fill="#bb00ff"
                      ></path>
                      <path
                        d="M39.02,42H11.99c-0.22-2.67-0.48-7.05-0.49-12.72c0.83,4.18,1.63,9.59,6.98,9.79 c3.48,0.12,8.27,0.55,9.83-2.45c1.57-3,3.72-8.95,3.51-15.62c-0.19-5.84-1.75-8.2-2.13-8.7c0.59,0.66,3.74,4.49,4.01,11.7 c0.03,0.83,0.06,1.72,0.08,2.66c4.21-0.15,5.93,1.5,6.07,2.35C40.68,33.85,39.8,38.9,39.02,42z"
                        fill="#6b0191"
                      ></path>
                      <path
                        d="M35,27.17c0,3.67-0.28,11.2-0.42,14.83h-2C32.72,38.42,33,30.83,33,27.17 c0-5.54-1.46-12.65-3.55-14.02c-1.65-1.08-5.49-1.48-8.23-0.85c-3.62,0.83-4.57,1.99-6.14,3.92L15,16.32 c-1.31,1.6-2.59,6.92-3,8.96v10.8c0,2.58,0.28,4.61,0.54,5.92H10.5c-0.25-1.41-0.5-3.42-0.5-5.92l0.02-11.09 c0.15-0.77,1.55-7.63,3.43-9.94l0.08-0.09c1.65-2.03,2.96-3.63,7.25-4.61c3.28-0.76,7.67-0.25,9.77,1.13 C33.79,13.6,35,22.23,35,27.17z"
                        fill="#212121"
                      ></path>
                      <path
                        d="M17.165,17.283c5.217-0.055,9.391,0.283,9,6.011c-0.391,5.728-8.478,5.533-9.391,5.337 c-0.913-0.196-7.826-0.043-7.696-5.337C9.209,18,13.645,17.32,17.165,17.283z"
                        fill="#01579b"
                      ></path>
                      <path
                        d="M40.739,37.38c-0.28,1.99-0.69,3.53-1.22,4.62h-2.43c0.25-0.19,1.13-1.11,1.67-4.9 c0.57-4-0.23-11.79-0.93-12.78c-0.4-0.4-2.63-0.8-4.37-0.89l0.1-1.99c1.04,0.05,4.53,0.31,5.71,1.49 C40.689,24.36,41.289,33.53,40.739,37.38z"
                        fill="#212121"
                      ></path>
                      <path
                        d="M10.154,20.201c0.261,2.059-0.196,3.351,2.543,3.546s8.076,1.022,9.402-0.554 c1.326-1.576,1.75-4.365-0.891-5.267C19.336,17.287,12.959,16.251,10.154,20.201z"
                        fill="#81d4fa"
                      ></path>
                      <path
                        d="M17.615,29.677c-0.502,0-0.873-0.03-1.052-0.069c-0.086-0.019-0.236-0.035-0.434-0.06 c-5.344-0.679-8.053-2.784-8.052-6.255c0.001-2.698,1.17-7.238,8.986-7.32l0.181-0.002c3.444-0.038,6.414-0.068,8.272,1.818 c1.173,1.191,1.712,3,1.647,5.53c-0.044,1.688-0.785,3.147-2.144,4.217C22.785,29.296,19.388,29.677,17.615,29.677z M17.086,17.973 c-7.006,0.074-7.008,4.023-7.008,5.321c-0.001,3.109,3.598,3.926,6.305,4.27c0.273,0.035,0.48,0.063,0.601,0.089 c0.563,0.101,4.68,0.035,6.855-1.732c0.865-0.702,1.299-1.57,1.326-2.653c0.051-1.958-0.301-3.291-1.073-4.075 c-1.262-1.281-3.834-1.255-6.825-1.222L17.086,17.973z"
                        fill="#212121"
                      ></path>
                      <path
                        d="M15.078,19.043c1.957-0.326,5.122-0.529,4.435,1.304c-0.489,1.304-7.185,2.185-7.185,0.652 C12.328,19.467,15.078,19.043,15.078,19.043z"
                        fill="#e1f5fe"
                      ></path>
                    </svg>
                    <span className="now">Now!</span>
                    <span className="play">Register</span>
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div id="fifa" className="EventsPage_card EventsPage_card__2n">
            <img
              className="EventsPage_card-img EventsPage_card-img__2n"
              src="https://campusfestbucket.s3.us-west-1.amazonaws.com/Upsurge/Events/4_3/fifa+43.jpeg"
            />
            <div className="EventsPage_card-textbox">
              <div className="EventsPage_card-title">
                <h2>FIFA fever cup</h2>
              </div>
              <div className="EventsPage_card-description">
                <p>
                  Calling all FIFA fans! The FIFA Fever Cup, the most
                  anticipated FIFA showdown, is happening on October 11, 2023.
                  Don't miss this epic gaming event where you can put your
                  skills to the test and compete for exciting prizes! Whether
                  you're a FIFA pro or just looking for some fun, this is the
                  event for you. Spots are limited, so register now to secure
                  your chance to shine on the virtual field. All participants
                  will receive e-certificates as a token of appreciation. Get
                  ready to immerse yourself in the world of virtual football and
                  join us for an unforgettable day of gaming excitement.
                </p>
              </div>
              <div className="btnbtn">
                <a
                  className="events_link"
                  href="https://forms.gle/jJi3PoyL8oPeTiYL7"
                  target="_blank"
                >
                  <button className="events_btn edge_corner">
                    <svg
                      height="44px"
                      width="44px"
                      viewBox="0 0 36 36"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        fill="#ff4181"
                        y="0"
                        x="0"
                        height="44"
                        width="44"
                      ></rect>
                      <path
                        d="M38.67,42H11.52C11.27,40.62,11,38.57,11,36c0-5,0-11,0-11s1.44-7.39,3.22-9.59 c1.67-2.06,2.76-3.48,6.78-4.41c3-0.7,7.13-0.23,9,1c2.15,1.42,3.37,6.67,3.81,11.29c1.49-0.3,5.21,0.2,5.5,1.28 C40.89,30.29,39.48,38.31,38.67,42z"
                        fill="#bb00ff"
                      ></path>
                      <path
                        d="M39.02,42H11.99c-0.22-2.67-0.48-7.05-0.49-12.72c0.83,4.18,1.63,9.59,6.98,9.79 c3.48,0.12,8.27,0.55,9.83-2.45c1.57-3,3.72-8.95,3.51-15.62c-0.19-5.84-1.75-8.2-2.13-8.7c0.59,0.66,3.74,4.49,4.01,11.7 c0.03,0.83,0.06,1.72,0.08,2.66c4.21-0.15,5.93,1.5,6.07,2.35C40.68,33.85,39.8,38.9,39.02,42z"
                        fill="#6b0191"
                      ></path>
                      <path
                        d="M35,27.17c0,3.67-0.28,11.2-0.42,14.83h-2C32.72,38.42,33,30.83,33,27.17 c0-5.54-1.46-12.65-3.55-14.02c-1.65-1.08-5.49-1.48-8.23-0.85c-3.62,0.83-4.57,1.99-6.14,3.92L15,16.32 c-1.31,1.6-2.59,6.92-3,8.96v10.8c0,2.58,0.28,4.61,0.54,5.92H10.5c-0.25-1.41-0.5-3.42-0.5-5.92l0.02-11.09 c0.15-0.77,1.55-7.63,3.43-9.94l0.08-0.09c1.65-2.03,2.96-3.63,7.25-4.61c3.28-0.76,7.67-0.25,9.77,1.13 C33.79,13.6,35,22.23,35,27.17z"
                        fill="#212121"
                      ></path>
                      <path
                        d="M17.165,17.283c5.217-0.055,9.391,0.283,9,6.011c-0.391,5.728-8.478,5.533-9.391,5.337 c-0.913-0.196-7.826-0.043-7.696-5.337C9.209,18,13.645,17.32,17.165,17.283z"
                        fill="#01579b"
                      ></path>
                      <path
                        d="M40.739,37.38c-0.28,1.99-0.69,3.53-1.22,4.62h-2.43c0.25-0.19,1.13-1.11,1.67-4.9 c0.57-4-0.23-11.79-0.93-12.78c-0.4-0.4-2.63-0.8-4.37-0.89l0.1-1.99c1.04,0.05,4.53,0.31,5.71,1.49 C40.689,24.36,41.289,33.53,40.739,37.38z"
                        fill="#212121"
                      ></path>
                      <path
                        d="M10.154,20.201c0.261,2.059-0.196,3.351,2.543,3.546s8.076,1.022,9.402-0.554 c1.326-1.576,1.75-4.365-0.891-5.267C19.336,17.287,12.959,16.251,10.154,20.201z"
                        fill="#81d4fa"
                      ></path>
                      <path
                        d="M17.615,29.677c-0.502,0-0.873-0.03-1.052-0.069c-0.086-0.019-0.236-0.035-0.434-0.06 c-5.344-0.679-8.053-2.784-8.052-6.255c0.001-2.698,1.17-7.238,8.986-7.32l0.181-0.002c3.444-0.038,6.414-0.068,8.272,1.818 c1.173,1.191,1.712,3,1.647,5.53c-0.044,1.688-0.785,3.147-2.144,4.217C22.785,29.296,19.388,29.677,17.615,29.677z M17.086,17.973 c-7.006,0.074-7.008,4.023-7.008,5.321c-0.001,3.109,3.598,3.926,6.305,4.27c0.273,0.035,0.48,0.063,0.601,0.089 c0.563,0.101,4.68,0.035,6.855-1.732c0.865-0.702,1.299-1.57,1.326-2.653c0.051-1.958-0.301-3.291-1.073-4.075 c-1.262-1.281-3.834-1.255-6.825-1.222L17.086,17.973z"
                        fill="#212121"
                      ></path>
                      <path
                        d="M15.078,19.043c1.957-0.326,5.122-0.529,4.435,1.304c-0.489,1.304-7.185,2.185-7.185,0.652 C12.328,19.467,15.078,19.043,15.078,19.043z"
                        fill="#e1f5fe"
                      ></path>
                    </svg>
                    <span className="now">Now!</span>
                    <span className="play">Register</span>
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div id="cosmotown" className="EventsPage_card ">
            <img
              className="EventsPage_card-img"
              src="https://campusfestbucket.s3.us-west-1.amazonaws.com/Upsurge/Events/4_3/COSMO+TOWN+Large.jpeg"
            />
            <div className="EventsPage_card-textbox">
              <div className="EventsPage_card-title">
                <h2>Cosmo Town</h2>
              </div>
              <div className="EventsPage_card-description">
                <p>
                  Experience a day of pure excitement and reward at our upcoming
                  event! On October 11th, 2023, at the CSE department YCCE, we're
                  hosting a thrilling event featuring a wide array of ten
                  captivating games, each designed to earn you valuable credits.
                  There's something for everyone to enjoy <br />
                  Here's how it works: Upon registration, you'll receive an
                  initial credit allocation to get started. Throughout the
                  event, you can use your credits to participate in any of the
                  exciting games we've set up. Want to increase your chances?
                  You can even purchase extra credits. The more games you play,
                  the more credits you can earn.
                </p>
              </div>
              <div className="btnbtn">
                <a
                  className="events_link"
                  href="https://forms.gle/7qkGuL9eEW8hXa8R9"
                  target="_blank"
                >
                  <button className="events_btn edge_corner">
                    <svg
                      height="44px"
                      width="44px"
                      viewBox="0 0 36 36"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        fill="#ff4181"
                        y="0"
                        x="0"
                        height="44"
                        width="44"
                      ></rect>
                      <path
                        d="M38.67,42H11.52C11.27,40.62,11,38.57,11,36c0-5,0-11,0-11s1.44-7.39,3.22-9.59 c1.67-2.06,2.76-3.48,6.78-4.41c3-0.7,7.13-0.23,9,1c2.15,1.42,3.37,6.67,3.81,11.29c1.49-0.3,5.21,0.2,5.5,1.28 C40.89,30.29,39.48,38.31,38.67,42z"
                        fill="#f90505"
                      ></path>
                      <path
                        d="M39.02,42H11.99c-0.22-2.67-0.48-7.05-0.49-12.72c0.83,4.18,1.63,9.59,6.98,9.79 c3.48,0.12,8.27,0.55,9.83-2.45c1.57-3,3.72-8.95,3.51-15.62c-0.19-5.84-1.75-8.2-2.13-8.7c0.59,0.66,3.74,4.49,4.01,11.7 c0.03,0.83,0.06,1.72,0.08,2.66c4.21-0.15,5.93,1.5,6.07,2.35C40.68,33.85,39.8,38.9,39.02,42z"
                        fill="#610000"
                      ></path>
                      <path
                        d="M35,27.17c0,3.67-0.28,11.2-0.42,14.83h-2C32.72,38.42,33,30.83,33,27.17 c0-5.54-1.46-12.65-3.55-14.02c-1.65-1.08-5.49-1.48-8.23-0.85c-3.62,0.83-4.57,1.99-6.14,3.92L15,16.32 c-1.31,1.6-2.59,6.92-3,8.96v10.8c0,2.58,0.28,4.61,0.54,5.92H10.5c-0.25-1.41-0.5-3.42-0.5-5.92l0.02-11.09 c0.15-0.77,1.55-7.63,3.43-9.94l0.08-0.09c1.65-2.03,2.96-3.63,7.25-4.61c3.28-0.76,7.67-0.25,9.77,1.13 C33.79,13.6,35,22.23,35,27.17z"
                        fill="#212121"
                      ></path>
                      <path
                        d="M17.165,17.283c5.217-0.055,9.391,0.283,9,6.011c-0.391,5.728-8.478,5.533-9.391,5.337 c-0.913-0.196-7.826-0.043-7.696-5.337C9.209,18,13.645,17.32,17.165,17.283z"
                        fill="#01579b"
                      ></path>
                      <path
                        d="M40.739,37.38c-0.28,1.99-0.69,3.53-1.22,4.62h-2.43c0.25-0.19,1.13-1.11,1.67-4.9 c0.57-4-0.23-11.79-0.93-12.78c-0.4-0.4-2.63-0.8-4.37-0.89l0.1-1.99c1.04,0.05,4.53,0.31,5.71,1.49 C40.689,24.36,41.289,33.53,40.739,37.38z"
                        fill="#212121"
                      ></path>
                      <path
                        d="M10.154,20.201c0.261,2.059-0.196,3.351,2.543,3.546s8.076,1.022,9.402-0.554 c1.326-1.576,1.75-4.365-0.891-5.267C19.336,17.287,12.959,16.251,10.154,20.201z"
                        fill="#81d4fa"
                      ></path>
                      <path
                        d="M17.615,29.677c-0.502,0-0.873-0.03-1.052-0.069c-0.086-0.019-0.236-0.035-0.434-0.06 c-5.344-0.679-8.053-2.784-8.052-6.255c0.001-2.698,1.17-7.238,8.986-7.32l0.181-0.002c3.444-0.038,6.414-0.068,8.272,1.818 c1.173,1.191,1.712,3,1.647,5.53c-0.044,1.688-0.785,3.147-2.144,4.217C22.785,29.296,19.388,29.677,17.615,29.677z M17.086,17.973 c-7.006,0.074-7.008,4.023-7.008,5.321c-0.001,3.109,3.598,3.926,6.305,4.27c0.273,0.035,0.48,0.063,0.601,0.089 c0.563,0.101,4.68,0.035,6.855-1.732c0.865-0.702,1.299-1.57,1.326-2.653c0.051-1.958-0.301-3.291-1.073-4.075 c-1.262-1.281-3.834-1.255-6.825-1.222L17.086,17.973z"
                        fill="#212121"
                      ></path>
                      <path
                        d="M15.078,19.043c1.957-0.326,5.122-0.529,4.435,1.304c-0.489,1.304-7.185,2.185-7.185,0.652 C12.328,19.467,15.078,19.043,15.078,19.043z"
                        fill="#e1f5fe"
                      ></path>
                    </svg>
                    <span className="now">now!</span>
                    <span className="play">Register</span>
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Event 9 */}
          <div
            id="desidaredevils"
            className="EventsPage_card EventsPage_card__2n "
          >
            <img
              className="EventsPage_card-img EventsPage_card-img__2n"
              src="https://campusfestbucket.s3.us-west-1.amazonaws.com/Upsurge/Events/4_3/DESI+DAREDEVILS.jpeg"
            />
            <div className="EventsPage_card-textbox">
              <div className="EventsPage_card-title">
                <h2>Desi Daredevils</h2>
              </div>
              <div className="EventsPage_card-description">
                <p>
                  Embrace the excitement of "Desi Daredevils," a dynamic 3-stage
                  game tailor-made for teams of four members. Each stage offers
                  a unique challenge, promising a day filled with laughter and
                  teamwork. <br /> <b>Round 1: HURDLE RUSH -</b> Exercise your
                  mental and physical prowess as you maneuver through a
                  demanding obstacle course, relying on your teammates to guide
                  you towards victory. <br /> <b>Round 2: FOOD MATCHUP -</b> If
                  you're a food lover, this one's for you. Indulge your taste
                  buds in a delightful food adventure that promises a delectable
                  experience like no other. <br />
                  <b>Round 3: DICE MYSTERY -</b> The grand finale is the
                  mysterious "Dice Mystery," a life-sized game inspired by ludo,
                  brimming with larger-than-life excitement.
                </p>
              </div>
              <div className="btnbtn">
                <a
                  href="https://forms.gle/XpNnjLvKXFzTRT157"
                  className="events_link"
                  target="_blank"
                >
                  <button className="events_btn edge_corner">
                    <svg
                      height="44px"
                      width="44px"
                      viewBox="0 0 36 36"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        fill="#ff4181"
                        y="0"
                        x="0"
                        height="44"
                        width="44"
                      ></rect>
                      <path
                        d="M38.67,42H11.52C11.27,40.62,11,38.57,11,36c0-5,0-11,0-11s1.44-7.39,3.22-9.59 c1.67-2.06,2.76-3.48,6.78-4.41c3-0.7,7.13-0.23,9,1c2.15,1.42,3.37,6.67,3.81,11.29c1.49-0.3,5.21,0.2,5.5,1.28 C40.89,30.29,39.48,38.31,38.67,42z"
                        fill="#23de39"
                      ></path>
                      <path
                        d="M39.02,42H11.99c-0.22-2.67-0.48-7.05-0.49-12.72c0.83,4.18,1.63,9.59,6.98,9.79 c3.48,0.12,8.27,0.55,9.83-2.45c1.57-3,3.72-8.95,3.51-15.62c-0.19-5.84-1.75-8.2-2.13-8.7c0.59,0.66,3.74,4.49,4.01,11.7 c0.03,0.83,0.06,1.72,0.08,2.66c4.21-0.15,5.93,1.5,6.07,2.35C40.68,33.85,39.8,38.9,39.02,42z"
                        fill="#00610b"
                      ></path>
                      <path
                        d="M35,27.17c0,3.67-0.28,11.2-0.42,14.83h-2C32.72,38.42,33,30.83,33,27.17 c0-5.54-1.46-12.65-3.55-14.02c-1.65-1.08-5.49-1.48-8.23-0.85c-3.62,0.83-4.57,1.99-6.14,3.92L15,16.32 c-1.31,1.6-2.59,6.92-3,8.96v10.8c0,2.58,0.28,4.61,0.54,5.92H10.5c-0.25-1.41-0.5-3.42-0.5-5.92l0.02-11.09 c0.15-0.77,1.55-7.63,3.43-9.94l0.08-0.09c1.65-2.03,2.96-3.63,7.25-4.61c3.28-0.76,7.67-0.25,9.77,1.13 C33.79,13.6,35,22.23,35,27.17z"
                        fill="#212121"
                      ></path>
                      <path
                        d="M17.165,17.283c5.217-0.055,9.391,0.283,9,6.011c-0.391,5.728-8.478,5.533-9.391,5.337 c-0.913-0.196-7.826-0.043-7.696-5.337C9.209,18,13.645,17.32,17.165,17.283z"
                        fill="#01579b"
                      ></path>
                      <path
                        d="M40.739,37.38c-0.28,1.99-0.69,3.53-1.22,4.62h-2.43c0.25-0.19,1.13-1.11,1.67-4.9 c0.57-4-0.23-11.79-0.93-12.78c-0.4-0.4-2.63-0.8-4.37-0.89l0.1-1.99c1.04,0.05,4.53,0.31,5.71,1.49 C40.689,24.36,41.289,33.53,40.739,37.38z"
                        fill="#212121"
                      ></path>
                      <path
                        d="M10.154,20.201c0.261,2.059-0.196,3.351,2.543,3.546s8.076,1.022,9.402-0.554 c1.326-1.576,1.75-4.365-0.891-5.267C19.336,17.287,12.959,16.251,10.154,20.201z"
                        fill="#81d4fa"
                      ></path>
                      <path
                        d="M17.615,29.677c-0.502,0-0.873-0.03-1.052-0.069c-0.086-0.019-0.236-0.035-0.434-0.06 c-5.344-0.679-8.053-2.784-8.052-6.255c0.001-2.698,1.17-7.238,8.986-7.32l0.181-0.002c3.444-0.038,6.414-0.068,8.272,1.818 c1.173,1.191,1.712,3,1.647,5.53c-0.044,1.688-0.785,3.147-2.144,4.217C22.785,29.296,19.388,29.677,17.615,29.677z M17.086,17.973 c-7.006,0.074-7.008,4.023-7.008,5.321c-0.001,3.109,3.598,3.926,6.305,4.27c0.273,0.035,0.48,0.063,0.601,0.089 c0.563,0.101,4.68,0.035,6.855-1.732c0.865-0.702,1.299-1.57,1.326-2.653c0.051-1.958-0.301-3.291-1.073-4.075 c-1.262-1.281-3.834-1.255-6.825-1.222L17.086,17.973z"
                        fill="#212121"
                      ></path>
                      <path
                        d="M15.078,19.043c1.957-0.326,5.122-0.529,4.435,1.304c-0.489,1.304-7.185,2.185-7.185,0.652 C12.328,19.467,15.078,19.043,15.078,19.043z"
                        fill="#e1f5fe"
                      ></path>
                    </svg>
                    <span className="now">Now!</span>
                    <span className="play">Register</span>
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* event 10 */}
          <div id="flashmob" className="EventsPage_card ">
            <img
              className="EventsPage_card-img "
              src="https://campusfestbucket.s3.us-west-1.amazonaws.com/Upsurge/Events/4_3/FLASHMOB+Large.png"
            />
            <div className="EventsPage_card-textbox">
              <div className="EventsPage_card-title">
                <h2>Flashmob</h2>
              </div>
              <div
                className="EventsPage_card-description"
                style={{ paddingBottom: '10px' }}
              >
                <p>
                  Keep your eyes peeled for updates and be ready to join in on
                  the fun because in the world of Flash Mob, the only thing you
                  can expect is the unexpected! Stay tuned to know more...
                </p>
              </div>
              <div className="btnbtn">
                <a
                  className="events_link"
                  href="https://chat.whatsapp.com/DUjtzY8CgPMIayFSOWlnRa"
                >
                  <button className="events_btn edge_corner">
                    <svg
                      height="44px"
                      width="44px"
                      viewBox="0 0 36 36"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        fill="#ff4181"
                        y="0"
                        x="0"
                        height="44"
                        width="44"
                      ></rect>
                      <path
                        d="M38.67,42H11.52C11.27,40.62,11,38.57,11,36c0-5,0-11,0-11s1.44-7.39,3.22-9.59 c1.67-2.06,2.76-3.48,6.78-4.41c3-0.7,7.13-0.23,9,1c2.15,1.42,3.37,6.67,3.81,11.29c1.49-0.3,5.21,0.2,5.5,1.28 C40.89,30.29,39.48,38.31,38.67,42z"
                        fill="#ef7d0e"
                      ></path>
                      <path
                        d="M39.02,42H11.99c-0.22-2.67-0.48-7.05-0.49-12.72c0.83,4.18,1.63,9.59,6.98,9.79 c3.48,0.12,8.27,0.55,9.83-2.45c1.57-3,3.72-8.95,3.51-15.62c-0.19-5.84-1.75-8.2-2.13-8.7c0.59,0.66,3.74,4.49,4.01,11.7 c0.03,0.83,0.06,1.72,0.08,2.66c4.21-0.15,5.93,1.5,6.07,2.35C40.68,33.85,39.8,38.9,39.02,42z"
                        fill="#994d00"
                      ></path>
                      <path
                        d="M35,27.17c0,3.67-0.28,11.2-0.42,14.83h-2C32.72,38.42,33,30.83,33,27.17 c0-5.54-1.46-12.65-3.55-14.02c-1.65-1.08-5.49-1.48-8.23-0.85c-3.62,0.83-4.57,1.99-6.14,3.92L15,16.32 c-1.31,1.6-2.59,6.92-3,8.96v10.8c0,2.58,0.28,4.61,0.54,5.92H10.5c-0.25-1.41-0.5-3.42-0.5-5.92l0.02-11.09 c0.15-0.77,1.55-7.63,3.43-9.94l0.08-0.09c1.65-2.03,2.96-3.63,7.25-4.61c3.28-0.76,7.67-0.25,9.77,1.13 C33.79,13.6,35,22.23,35,27.17z"
                        fill="#212121"
                      ></path>
                      <path
                        d="M17.165,17.283c5.217-0.055,9.391,0.283,9,6.011c-0.391,5.728-8.478,5.533-9.391,5.337 c-0.913-0.196-7.826-0.043-7.696-5.337C9.209,18,13.645,17.32,17.165,17.283z"
                        fill="#01579b"
                      ></path>
                      <path
                        d="M40.739,37.38c-0.28,1.99-0.69,3.53-1.22,4.62h-2.43c0.25-0.19,1.13-1.11,1.67-4.9 c0.57-4-0.23-11.79-0.93-12.78c-0.4-0.4-2.63-0.8-4.37-0.89l0.1-1.99c1.04,0.05,4.53,0.31,5.71,1.49 C40.689,24.36,41.289,33.53,40.739,37.38z"
                        fill="#212121"
                      ></path>
                      <path
                        d="M10.154,20.201c0.261,2.059-0.196,3.351,2.543,3.546s8.076,1.022,9.402-0.554 c1.326-1.576,1.75-4.365-0.891-5.267C19.336,17.287,12.959,16.251,10.154,20.201z"
                        fill="#81d4fa"
                      ></path>
                      <path
                        d="M17.615,29.677c-0.502,0-0.873-0.03-1.052-0.069c-0.086-0.019-0.236-0.035-0.434-0.06 c-5.344-0.679-8.053-2.784-8.052-6.255c0.001-2.698,1.17-7.238,8.986-7.32l0.181-0.002c3.444-0.038,6.414-0.068,8.272,1.818 c1.173,1.191,1.712,3,1.647,5.53c-0.044,1.688-0.785,3.147-2.144,4.217C22.785,29.296,19.388,29.677,17.615,29.677z M17.086,17.973 c-7.006,0.074-7.008,4.023-7.008,5.321c-0.001,3.109,3.598,3.926,6.305,4.27c0.273,0.035,0.48,0.063,0.601,0.089 c0.563,0.101,4.68,0.035,6.855-1.732c0.865-0.702,1.299-1.57,1.326-2.653c0.051-1.958-0.301-3.291-1.073-4.075 c-1.262-1.281-3.834-1.255-6.825-1.222L17.086,17.973z"
                        fill="#212121"
                      ></path>
                      <path
                        d="M15.078,19.043c1.957-0.326,5.122-0.529,4.435,1.304c-0.489,1.304-7.185,2.185-7.185,0.652 C12.328,19.467,15.078,19.043,15.078,19.043z"
                        fill="#e1f5fe"
                      ></path>
                    </svg>
                    <span className="now">Us!</span>
                    <span className="play">Join</span>
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* event */}
        </div>
      </div>
    </div>
  );
}
