import React from "react";
import "./Contact.css";
import mail_icon from "../../assets/logos/mail.svg";
import linkedin_icon from "../../assets/logos/linkedin.svg";
import github_icon from "../../assets/logos/github-white.svg";
import phone_icon from "../../assets/logos/phone.svg";

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <h1 className="section-header">Contact Me</h1>
      <div className="contact-section">
        <div className="contact-left">
          <h2>Let's Get In Touch!</h2>
          <div className="contact-details">
            <a className="contact-detail" href="mailto:ameyakulk06@gmail.com">
              <img src={mail_icon} alt="" />
              <h3>Email</h3>
              <p>ameyakulk06@gmail.com</p>
            </a>
            <a className="contact-detail" href="tel:+12148975440">
              <img src={phone_icon} alt="" />
              <h3>Phone</h3>
              <p>214-897-5440</p>
            </a>
            <a
              className="contact-detail"
              href="https://www.linkedin.com/in/ameyakulkarni37"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img src={linkedin_icon} alt="" />
              <h3>LinkedIn</h3>
              <p>ameyakulkarni37</p>
            </a>
            <a
              className="contact-detail"
              href="https://github.com/AmeyaKulkarni37"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img src={github_icon} alt="" />
              <h3>GitHub</h3>
              <p>AmeyaKulkarni37</p>
            </a>
          </div>
        </div>
        <form className="contact-right">
          <label>Name</label>
          <input type="text" placeholder="Enter Your Name" name="name" />
          <label>Email</label>
          <input type="text" placeholder="Enter Your Name" name="email" />
          <label>Message</label>
          <textarea
            name="message"
            rows="8"
            placeholder="Write Your Message Here"
          ></textarea>
          <button className="contact-submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
