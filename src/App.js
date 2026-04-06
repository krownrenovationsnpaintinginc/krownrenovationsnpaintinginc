import React from "react";

import "./home.css";
import logo from "./assets/images/logo.png";

function App() {
  return (
    <>
      <header class="navbar">
        <div class="logo">
          <img src={logo} style={{ height: "100px" }} />
        </div>
        <nav
          style={{
            position: "relative",
            right: "60px",
          }}
        >
          <a href="#">Home</a>
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section class="hero">
        <div class="overlay" data-aos="fade-up">
          <h1>Krown Renovations & Painting Inc.</h1>
          <p>Built to Last. Finished to Perfection.</p>
          <a href="#contact" class="btn">
            Request a Quote
          </a>
        </div>
      </section>

      <section id="services" class="section">
        <h2 data-aos="fade-up">Our Services</h2>

        <div class="grid">
          <div class="card" data-aos="zoom-in">
            <h3>Full Renovations</h3>
            <p>Complete home transformations with premium finishes.</p>
          </div>

          <div class="card" data-aos="zoom-in" data-aos-delay="100">
            <h3>Painting</h3>
            <p>Interior & exterior high-end painting services.</p>
          </div>

          <div class="card" data-aos="zoom-in" data-aos-delay="200">
            <h3>Project Management</h3>
            <p>Handled professionally from start to finish.</p>
          </div>
        </div>
      </section>

      <section id="projects" class="section dark">
        <h2 data-aos="fade-up">Our Work</h2>
        {/* <section class="section">
          <h2>Before & After</h2>

          <div class="ba-container">
            <img
              src="https://images.unsplash.com/photo-1507089947368-19c1da9775ae"
              class="before"
            />
            <img
              src="https://images.unsplash.com/photo-1505691938895-1758d7feb511"
              class="after"
            />
            <input type="range" min="0" max="100" value="50" class="slider" />
          </div>
        </section> */}

        <div class="gallery">
          <img
            src="https://images.unsplash.com/photo-1507089947368-19c1da9775ae"
            data-aos="fade-up"
          />
          <img
            src="https://images.unsplash.com/photo-1493809842364-78817add7ffb"
            data-aos="fade-up"
          />
          <img
            src="https://images.unsplash.com/photo-1505691938895-1758d7feb511"
            data-aos="fade-up"
          />
          <img
            src="https://images.unsplash.com/photo-1484154218962-a197022b5858"
            data-aos="fade-up"
          />
          <img
            src="https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6"
            data-aos="fade-up"
          />
          <img
            src="https://images.unsplash.com/photo-1501183638710-841dd1904471"
            data-aos="fade-up"
          />
        </div>
      </section>

      <section id="contact" class="section">
        <h2 data-aos="fade-up">Get a Free Quote</h2>

        <form
          action="https://formspree.io/f/YOUR_FORM_ID"
          method="POST"
          data-aos="fade-up"
        >
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            placeholder="Tell us about your project"
            required
          ></textarea>

          <button type="submit">Send Message</button>
        </form>
      </section>
      <section class="section dark">
        <h2>Our Location</h2>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2885.1030058238234!2d-79.83034549999999!3d43.687621899999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e8ff6d6e4e43e63%3A0x3c11eb7a55e18c41!2sKrown%20Renovations%20%26%20Painting%20Inc.!5e0!3m2!1sen!2sca!4v1775449160395!5m2!1sen!2sca"
          style={{
            width: "100%",
            height: "300",
            border: 0,
          }}
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
      <footer>
        <p>© 2026 Krown Renovations & Painting Inc.</p>
      </footer>
      <a href="tel:+1647XXXXXXX" class="call-btn">
        📞
      </a>
      <a href="https://wa.me/1647XXXXXXX" class="whatsapp-btn">
        💬
      </a>
    </>
  );
}

export default App;
