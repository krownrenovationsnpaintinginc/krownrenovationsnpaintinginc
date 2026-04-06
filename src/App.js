import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";

import "./home.css";
import logo from "./assets/images/logo.png";
import pic1 from "./assets/images/1.png";
import pic2 from "./assets/images/2.png";
import pic3 from "./assets/images/3.png";
import pic4 from "./assets/images/4.png";
import pic5 from "./assets/images/5.png";
import QuotationForm from "./QuotationForm";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  const projects = [pic1, pic2, pic3, pic4, pic5];

  return (
    <>
      {/* NAVBAR */}
      <header className="navbar">
        <div className="logo-container">
          <img src={logo} alt="logo" className="logo-img" />
          {/* <span className="logo-text">KROWN</span> */}
        </div>

        <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>

        <nav className={menuOpen ? "active" : ""}>
          <a href="#" onClick={closeMenu}>
            Home
          </a>
          <a href="#services" onClick={closeMenu}>
            Services
          </a>
          <a href="#projects" onClick={closeMenu}>
            Work
          </a>
          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section className="hero">
        <div className="overlay">
          <h1>Krown Renovations & Painting Inc.</h1>
          <p>Premium Renovations & Painting in GTA</p>
          <a href="#contact" className="btn">
            Get a Free Quote
          </a>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="section">
        <h2 data-aos="fade-up">Our Services</h2>

        <div className="grid">
          <div className="card" data-aos="zoom-in">
            <h3>Full Renovations</h3>
            <p>Complete home transformations with premium finishes.</p>
          </div>

          <div className="card" data-aos="zoom-in" data-aos-delay="100">
            <h3>Painting</h3>
            <p>Interior & exterior high-end painting services.</p>
          </div>

          <div className="card" data-aos="zoom-in" data-aos-delay="200">
            <h3>Project Management</h3>
            <p>Handled professionally from start to finish.</p>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section dark">
        <h2>Our Work</h2>
        <div className="gallery">
          {projects.map((img, i) => (
            <img key={i} src={img} alt="project" />
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section">
        <h2>Get a Free Quote</h2>

        <QuotationForm />
      </section>

      {/* MAP */}
      <section className="section dark">
        <h2>Our Location</h2>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2885.1030058238234!2d-79.83034549999999!3d43.687621899999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e8ff6d6e4e43e63%3A0x3c11eb7a55e18c41!2sKrown%20Renovations%20%26%20Painting%20Inc.!5e0!3m2!1sen!2sca!4v1775449160395!5m2!1sen!2sca"
          style={{ width: "100%", height: "300px", border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="map"
        ></iframe>
      </section>

      {/* FOOTER */}
      <footer>
        <p>© 2026 GPS Consultancy Services</p>
      </footer>

      {/* FLOATING BUTTONS */}
      <a href="tel:+16476408443" className="call-btn">
        📞
      </a>
      <a href="https://wa.me/16476408443" className="whatsapp-btn">
        💬
      </a>
    </>
  );
}

export default App;
