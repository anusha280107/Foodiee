import React, { useState } from "react";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !form.name ||
      !form.email ||
      !form.phone ||
      !form.message
    ) {
      alert("Please fill all fields.");
      return;
    }

    alert("Message Sent Successfully!");

    setForm({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <div className="contact">

      {/* Banner */}

      <section className="contact-banner">

        <h1>📞 Contact Us</h1>

        <p>
          We'd love to hear from you. Get in touch with us anytime.
        </p>

      </section>

      {/* Contact Section */}

      <section className="contact-container">

        {/* Left */}

        <div className="contact-info">

          <h2>Get in Touch</h2>

          <div className="info-card">

            <h3>📍 Address</h3>

            <p>
              Foodiee Restaurant,
              Anna Nagar,
              Chennai - 600040
            </p>

          </div>

          <div className="info-card">

            <h3>📞 Phone</h3>

            <p>+91 9876543210</p>

          </div>

          <div className="info-card">

            <h3>📧 Email</h3>

            <p>foodiee@gmail.com</p>

          </div>

          <div className="info-card">

            <h3>⏰ Working Hours</h3>

            <p>Monday - Sunday</p>

            <p>9:00 AM - 11:00 PM</p>

          </div>

        </div>

        {/* Right */}

        <div className="contact-form">

          <h2>Send Message</h2>

          <form onSubmit={handleSubmit}>

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={form.phone}
              onChange={handleChange}
            />

            <textarea
              rows="6"
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
            ></textarea>

            <button type="submit">
              Send Message
            </button>

          </form>

        </div>

      </section>

      {/* Map */}

      <section className="map-section">

        <h2>📍 Find Us</h2>

        <iframe
          title="Foodiee Location"
          src="https://www.google.com/maps?q=Chennai&output=embed"
          width="100%"
          height="400"
          style={{
            border: "0",
            borderRadius: "15px",
          }}
          loading="lazy"
        ></iframe>

      </section>

    </div>
  );
}

export default Contact;