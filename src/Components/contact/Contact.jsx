import React from "react";
import "./Contact.css";
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phn_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

function Contact() {
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "061ec024-bd5c-4d62-8976-8e86e618fb6b");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  }; 
  return (
    <div className="contact">
      <div className="contact-col">
        <h3>Send us a message <img src={msg_icon} alt=""/></h3>
        <p>
          Feel Free to reach out through contact form or find our contact
          information below.Your feedback,questions,and suggestions are import
          to us as we strive to provide exceptional service to our university
          community.
        </p>
        <ul>
            <li>
            <img src={mail_icon} alt=""/>  contact@gmail.com
            </li>
            <li>
            <img src={phn_icon} alt=""/>   +91 9876543210
            </li>
            <li>
            <img src={location_icon} alt=""/> Raghavendra Colony,Kondapur,Hyderabad,Telangana
            </li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
            <label>
                Your name
            </label>
            <input type="text" name='name' placeholder="enter your name" required/>
            <label>Phone Number</label>
            <input type="tel" name='phone' placeholder="enter Your mobile number" required/>
            <label>Write Your Message Here</label>
            <textarea name="message"  rows='6'placeholder="enter Your Message" required></textarea>
            <button type="submit" className="btn dark-btn">Submit <img src={white_arrow} alt=""/> </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
}

export default Contact;
