import React from "react";
import "./Contact.css";
import { logos } from "../../assets/logos/logos.js";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "24e2d761-0ef2-43b0-8d32-6b1ad10165ab");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      alert("Form Submitted Successfully");
      event.target.reset();
    } else {
      alert("Error", data.message);
    }
  };

  return (
    <div className="contact" id="contact">
      <h1 className="section-header">Contact Me</h1>
      <div className="contact-section">
        <div className="contact-left">
          <h2>Let's Get In Touch!</h2>
          <div className="contact-details">
            <a className="contact-detail" href="mailto:ameyakulk06@gmail.com">
              <img src={logos.mail} alt="" />
              <h3>Email</h3>
              <p>ameyakulk06@gmail.com</p>
            </a>
            <a className="contact-detail" href="tel:+12148975440">
              <img src={logos.phone} alt="" />
              <h3>Phone</h3>
              <p>214-897-5440</p>
            </a>
            <a
              className="contact-detail"
              href="https://www.linkedin.com/in/ameyakulkarni37"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img src={logos.linkedin} alt="" />
              <h3>LinkedIn</h3>
              <p>ameyakulkarni37</p>
            </a>
            <a
              className="contact-detail"
              href="https://github.com/AmeyaKulkarni37"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img src={logos.github} alt="" />
              <h3>GitHub</h3>
              <p>AmeyaKulkarni37</p>
            </a>
          </div>
        </div>
        <form className="contact-right" onSubmit={onSubmit}>
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
