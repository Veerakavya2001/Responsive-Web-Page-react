import React from "react";
import "./about.css";
import about_img from "../assets/about.png";
import play_icon from "../assets/play-icon.png";
function About({setPlayState}) {
  
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
        <img src={play_icon} alt="" className="play-icon" onClick={()=>{setPlayState(true)}} />
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomorrow's Leaders Today</h2>
        <p>
          Embark on a transformative educational journey with our university's
          comprehensive education programs. were cutting-edge curriculum is
          designed to empower the students with the knowledge ,skills and
          experience needed to excel in the dynamic field of education.
        </p>
        <p>
          With a focus on innovation hands-on learning and personalized
          mentorship our programs prepare as per in educators to make a
          meaningful impact in the classroom schools and communities </p>
         <p> Whether your aspire to become a teacher administrator Counselor or
          educational leader of a tribal stage of a program for the perfect
          pathway to achieve your goals and unlock your full potential in shape
          in the future of education.
        </p>
      </div>
    </div>
  );
}

export default About;
