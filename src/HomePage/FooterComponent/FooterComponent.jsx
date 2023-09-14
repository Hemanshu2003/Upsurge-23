/* eslint-disable react/jsx-no-target-blank */
import './FooterComponent.css';

export default function FooterComponent() {
  function PageChange() {
    window.scrollTo(0, 0);
  }
  return (
    <footer className="footer">
      <div className="innerFooter">
        <img
          src="https://campusfestbucket.s3.us-west-1.amazonaws.com/Upsurge/smackathon/Upsurge_Logo.png"
          alt=""
          className="upsurge_logo"
        />

        <div className="links">
          <a href="/#/smackathon" onClick={PageChange}>
            Smackathon
          </a>
          <a href="#">Schedule</a>
          <a href="#">Events</a>
          <a href="/#/team" onClick={PageChange}>
            Team
          </a>
        </div>

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

        <div className="social">
          <h3>Follow Us</h3>
          <a
            href="https://www.instagram.com/cse_ycce_official/"
            target="_blank"
          >
            <i className="fa fa-instagram" aria-hidden="true"></i>
          </a>
          {/* <a href="#" target="_blank">
            <i className="fa fa-twitter" aria-hidden="true"></i>
          </a> */}
          <a href="mailto:support@upsurge2k23.tech">
            <i className="fa fa-envelope" aria-hidden="true"></i>
          </a>
          <a
            href="https://www.linkedin.com/company/yccecosmos/"
            target="_blank"
          >
            <i className="fa fa-linkedin" aria-hidden="true"></i>
          </a>
        </div>

        <div className="address_contact flex-col_mob">
          <div className="address">
            <h3>Find Us</h3>
            <p>
              CSE Dept, YCCE College <br />
              Wanadongri, Nagpur
            </p>
          </div>
          <div className="contact">
            <h3>Contact Us</h3>
            <div className="contact_details contact_details_home_mob">
              <div className="contact_details_name">
                <p>oraganizer name</p>
                <p>oraganizer name</p>
              </div>
              <div className="contact_details_number">
                <p>(12341 12341)</p>
                <p>(12341 12341)</p>
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

      <div className="copyRight_container">
        <p className="copyright">
          &copy; Copyrights belongs to Department Computer Science and
          Engineering, <br />
          Developed By Hemanshu Waghmare, Divyansh Sharma, Unnati Thakre, <br />{' '}
          Kartik Tichkule , Abhijeet Sahu, Taha Hussian , Vishakha Fulare
          <br />
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
  );
}
