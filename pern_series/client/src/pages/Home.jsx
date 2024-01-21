import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main>
      {/* 1st section */}
      <section className="section-hero">
        <div className="container grid grid-two-cols">
          <div className="hero-content">
            <p>We are the world Best food Service provider</p>
            <h1>Welcome to Food World</h1>
            <p>
              Are you ready to take your business to next level with
              cutting-edge IT Solution ? Look no further! At Thapa Technical, we
              specialize in providing innovative IT services and solutions
              tailored to meet your unique needs.
            </p>
            <div className="btn btn-group">
              <Link to="/contact">
                <button className="btn">connect now</button>
              </Link>
              <Link to="/services">
                <button className="btn secondary-btn">learn more</button>
              </Link>
            </div>
          </div>
          <div className="hero-image">
            <img
              src="/images/home.png"
              alt="home image"
              width="400"
              height="500"
            />
          </div>
        </div>
      </section>

      {/* 2nd section */}
      <section className="section-analytics">
        <div className="container grid grid-four-cols">
          <div className="div1">
            <h2>50+</h2>
            <p>Registered companies</p>
          </div>
          <div className="div1">
            <h2>1000+</h2>
            <p>Happy Clients</p>
          </div>
          <div className="div1">
            <h2>800+</h2>
            <p>Well Known Developers</p>
          </div>
          <div className="div1">
            <h2>24/7</h2>
            <p>Services</p>
          </div>
        </div>
      </section>
      {/* 3rd section */}
      <section className="section-hero">
        <div className="container grid grid-two-cols">
        <div className="hero-image">
            <img
              src="/images/design.png"
              alt="design image"
              width="400"
              height="500"
            />
          </div>
          <div className="hero-content">
            <p>We are the world Best food Service provider</p>
            <h1>Welcome to Food World</h1>
            <p>
              Are you ready to take your business to next level with
              cutting-edge IT Solution ? Look no further! At Thapa Technical, we
              specialize in providing innovative IT services and solutions
              tailored to meet your unique needs.
            </p>
            <div className="btn btn-group">
              <Link to="/contact">
                <button className="btn">connect now</button>
              </Link>
              <Link to="/services">
                <button className="btn secondary-btn">learn more</button>
              </Link>
            </div>
          </div>        
        </div>
      </section>
    </main>
  );
}
