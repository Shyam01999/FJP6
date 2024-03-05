import React, { useEffect, useState } from "react";
import { notifySuccess } from "../constant/toastAlerts";
import Header from "../components/Header";
import Typist from "react-typist";

function Home() {
  useEffect(() => {
    notifySuccess("Welcome to my portfolio app");
  }, []);

  const designations = [
    "Web Developer",
    "Frontend Developer",
    "Backend Developer",
    "MERN Stack Developer",
    "Full Stack Developer",
  ];

  return (
    <>
      {/*Home Section*/}
      <section id="intro">
        <div className="intro-details">
          <p className="intro-greet">Hello My name is</p>
          <p className="name">Shyam Sundar Sahoo</p>
          <p>
          <Typist>
            {designations.map((designation, index) => (
              <p key={index} className="designation">
                {designation}
                <Typist.Backspace count={designation.length} delay={2000} />
              </p>
            ))}
          </Typist>
          </p>
          <p className="description">
            A Skilled web developer having 2 years of hands on experience on
            frontend and backend developement who craft captivating user
            experience with code. My passion for innovation drives my quest for
            pixel perfect designs.
          </p>
          
          <div className="button-container">
            <span className="commonBtn">Let's talk</span>
            <span className="commonBtn">Downlord CV</span>
          </div>
          <div className="socialmedia-container">
            <a href="https://www.facebook.com/login/" target="blank" className="socialmedia-icon fb"></a>
            <a href="https://www.instagram.com/accounts/login/?hl=en" target="blank" className="socialmedia-icon Instagram"></a>
            <a href="https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&ifkv=ATuJsjxZG_EXDqxCgE3PA1zIfdLutExmd1dTaT6LdyyBm9isGyhfe58scA1RW-6HTpKuE8TtKQ1oEg&rip=1&sacu=1&service=mail&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S-133768631%3A1709663265753499&theme=mn" target="blank" className="socialmedia-icon gmail"></a>
            <a href="https://www.linkedin.com/uas/login?session_redirect=https%3A%2F%2Fwww%2Elinkedin%2Ecom%2Ffeed%2F&fromSignIn=true&trk=cold_join_sign_in" target="blank" className="socialmedia-icon linkedin"></a>
            <a href="https://web.whatsapp.com/" target="blank" className="socialmedia-icon whatapp"></a>
          </div>
        </div>
        <div className="intro-image-container"></div>
      </section>
    </>
  );
}

export default Home;
