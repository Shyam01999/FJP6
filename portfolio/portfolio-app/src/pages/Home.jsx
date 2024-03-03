import React, { useEffect, useState } from "react";
import { notifySuccess } from "../constant/toastAlerts";
import Header from "../components/Header";
import profileImage from "../../public/images/profile_image.jpg";
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
          <Typist>
            {designations.map((designation, index) => (
              <p key={index} className="designation">
                {designation}
                <Typist.Backspace count={designation.length} delay={2000} />
              </p>
            ))}
          </Typist>
        </div>
        <div className="intro-image-container">
          {/* <img
            src={profileImage}
            alt="Profile image"
            className="profileImage"
          /> */}
        </div>
      </section>
    </>
  );
}

export default Home;
