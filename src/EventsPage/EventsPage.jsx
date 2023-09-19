import './EventsPage.css';

export default function EventsPage() {
  return (
    <div className="EventsPage">
      <div className="EventsPage_container">
        <h2 className="heading_smackathonPage timeline_heading forEvent_heading">
          TimeLine
        </h2>

        <div className="EventsPage_card">
          <div className="EventsPage_card-innerbox">
            <img
              className="EventsPage_card-img"
              src="https://campusfestbucket.s3.us-west-1.amazonaws.com/Upsurge/Events/4_3/DEBUGGING+QUIZ+Large.jpeg"
            />
            <div className="EventsPage_card-textbox">
              <div className="EventsPage_card-title">Debugging Quiz</div>
              <div className="EventsPage_card-description">
                • Dive into the world of precision and intellect at Upsurge
                2k23's "Debugging Quiz." Challenge yourself to decode faulty
                code in this intellectually stimulating competition. Join us on
                October 5th, 2023, at the Computer Science Department for a
                thrilling journey into the world of debugging! <br />• Welcome
                to the thrilling and highly anticipated "Debugging Quiz" brought
                to you by Upsurge 2k23! Dive into the exciting world of
                debugging, where precision meets intellect. This geeky
                competition is designed to challenge participants, whether
                you're a budding programmer or an experienced coder, to unravel
                the mysteries of faulty code and emerge as the champion of
                debugging.
              </div>
            </div>
            <div className="btnbtn">
              <a className="events_link">
                <button className="events_btn">
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
                  <span className="now">soon!</span>
                  <span className="play">Register</span>
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className="EventsPage_card">
          <div className="EventsPage_card-innerbox">
            <img
              className="EventsPage_card-img EventsPage_card-img__2n"
              src="https://campusfestbucket.s3.us-west-1.amazonaws.com/Upsurge/Events/4_3/FAD+FRAME+Large.jpeg"
            />
            <div className="EventsPage_card-textbox EventsPage_card-textbox__2n">
              <div className="EventsPage_card-title">Fad Frame</div>
              <div className="EventsPage_card-description">
                • Step into the vibrant world of FadFrame, an event that blends
                trends and lenses to showcase talent and creativity in capturing
                pictures and reels like never before.
                <br />• Welcome to FadFrame, where creativity and talent
                converge in two thrilling competitions: Trending Rhythms:
                Express yourself through dance or creative acts set to the
                hottest trends. Whether solo or in a group, showcase your
                artistic interpretation of popular songs. Register easily with
                Google Forms, and the entry fee for Trending Rhythms is just 50
                INR. Captured Campus: Grab your smartphone (no cameras) and
                capture the essence of our campus through your lens. Transform
                ordinary scenes into extraordinary photos. The entry fee for
                Captured Campus is 30 INR. Combine both challenges for 70 INR.
              </div>
            </div>
            <div className="btnbtn btnbtn__2n">
              <a className="events_link">
                <button className="events_btn">
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
                  <span className="now">soon!</span>
                  <span className="play">Register</span>
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="EventsPage_card">
          <div className="EventsPage_card-innerbox">
            <img
              className="EventsPage_card-img EventsPage_card-img"
              src="https://campusfestbucket.s3.us-west-1.amazonaws.com/Upsurge/Events/4_3/TALENT+SHOW+Medium.png"
            />
            <div className="EventsPage_card-textbox EventsPage_card-textbox">
              <div className="EventsPage_card-title">Talent Show</div>
              <div className="EventsPage_card-description">
                • The event revolves around participants showcasing their stage
                talents, encompassing a variety of skills such as singing,
                dancing, poetry, stand-up comedy, musical performances, and any
                unique abilities they possess. <br />• Join us for an
                extraordinary showcase of talent at our upcoming event on 7th
                Oct 2023. Participants from all backgrounds are invited to take
                the stage and reveal their unique abilities, which can encompass
                singing, dancing, poetry, stand-up comedy, playing musical
                instruments, and any other remarkable skills they possess. Each
                contestant or team will have a generous 3-minute window to
                impress the audience, with the option to extend their
                performance time upon request.
              </div>
            </div>
            <div className="btnbtn">
              <a className="events_link">
                <button className="events_btn">
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
                  <span className="now">soon!</span>
                  <span className="play">Register</span>
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="EventsPage_card">
          <div className="EventsPage_card-innerbox">
            <img
              className="EventsPage_card-img EventsPage_card-img__2n"
              src="https://campusfestbucket.s3.us-west-1.amazonaws.com/Upsurge/Events/4_3/COSMO+TOWN+Large.jpeg"
            />
            <div className="EventsPage_card-textbox EventsPage_card-textbox__2n">
              <div className="EventsPage_card-title">Cosmo Town</div>
              <div className="EventsPage_card-description">
                • Join the excitement as we offer participants the chance to
                earn credits through engaging mini-games at our event. With ten
                thrilling games to choose from, they can boost their credit
                stash. At the event's climax, an electrifying auction awaits,
                where players can bid on fantastic prizes using their
                hard-earned credits, turning the competition into rewarding
                wins!
                <br />• Experience a day of pure excitement and reward at our
                upcoming event! On October 5th, 2023, at the CSE department
                YCCE, we're hosting a thrilling event featuring a wide array of
                ten captivating games, each designed to earn you valuable
                credits. There's something for everyone to enjoy.
              </div>
            </div>
          </div>
          <div className="btnbtn btnbtn__2n">
            <a className="events_link">
              <button className="events_btn">
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
                <span className="now">soon!</span>
                <span className="play">Register</span>
              </button>
            </a>
          </div>
        </div>
        <div className="EventsPage_card">
          <div className="EventsPage_card-innerbox">
            <img
              className="EventsPage_card-img EventsPage_card-img"
              src="https://campusfestbucket.s3.us-west-1.amazonaws.com/Upsurge/Events/4_3/FLASHMOB+Medium.png"
            />
            <div className="EventsPage_card-textbox EventsPage_card-textbox">
              <div className="EventsPage_card-title">FlashMob</div>
              <div className="EventsPage_card-description">
                • Get ready to witness a burst of spontaneous energy and
                creativity as our Flash Mob event takes center stage on October
                5th at 4 PM, right in front of the Admin Block! Join us for an
                unforgettable spectacle filled with surprises and thrilling
                performances.
                <br />• Mark your calendars for October 5th at 4 PM because an
                electrifying Flash Mob event is about to unfold right in front
                of the Admin Block! This thrilling gathering promises a burst of
                spontaneity, creativity, and dance that will leave you in awe.
              </div>
            </div>
            <div className="btnbtn">
              <a className="events_link">
                <button className="events_btn">
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
                  <span className="now">soon!</span>
                  <span className="play">Register</span>
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="EventsPage_card">
          <div className="EventsPage_card-innerbox">
            <img
              className="EventsPage_card-img EventsPage_card-img__2n"
              src="https://campusfestbucket.s3.us-west-1.amazonaws.com/Upsurge/Events/4_3/DESI+DAREDEVILS+Large.jpeg"
            />
            <div className="EventsPage_card-textbox EventsPage_card-textbox__2n">
              <div className="EventsPage_card-title">Desi daredevils</div>
              <div className="EventsPage_card-description">
                • "Desi Daredevils" is an entertaining game consisting of three
                stages, ideal for a team of four members. Enjoy a fantastic time
                with your closest pals as you explore the arena, savour
                delectable food, and conquer exciting challenges. Join us on 7th
                Oct 2023.
                <br />
                • Embrace the excitement of "Desi Daredevils," a dynamic 3-stage
                game tailor-made for teams of four members. Each stage offers a
                unique challenge, promising a day filled with laughter and
                teamwork.
                <br />
                Round 1: HURDLE RUSH - Exercise your mental and physical prowess
                as you maneuver through a demanding obstacle course, relying on
                your teammates to guide you towards victory....
              </div>
            </div>
            <div className="btnbtn btnbtn__2n">
              <a className="events_link">
                <button className="events_btn">
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
                  <span className="now">soon!</span>
                  <span className="play">Register</span>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
