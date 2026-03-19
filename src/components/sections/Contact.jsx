import { useState } from "react";
import "../../styles/contact.css";

import contactLogo from "../../assets/contact-logo.png";
import contactEmail from "../../assets/contact-email.png";
import contactLocation from "../../assets/contact-location.png";
import contactPhone from "../../assets/contact-phone.png";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setErrors({
      ...errors,
      [e.target.name]: "",
    });

    setSuccess("");
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = validate();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setSuccess("");
      return;
    }

    setErrors({});
    setSuccess("Message sent successfully ✅");

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-bg-glow contact-glow-top-right"></div>
      <div className="contact-bg-glow contact-glow-bottom-left"></div>

      <div className="contact-container">
        <div className="contact-box">
          <div className="contact-logo-wrap">
            <img src={contactLogo} alt="Fitness Sports Center Logo" className="contact-logo" />
          </div>

          <div className="contact-left">
            <p className="contact-label">CONTACT US</p>

            <h2 className="contact-title">
              Get In Touch
              <br />
              With Us
            </h2>

            <p className="contact-text">
              Have any Questions ? Reach out to us and we’ll get back to you as
              soon as possible.
            </p>

            <div className="contact-info">
              <p>
                <span className="contact-icon-wrap">
                  <img src={contactLocation} alt="Location" className="contact-icon-img" />
                </span>
                <span>531/2 Colombo 05</span>
              </p>

              <p>
                <span className="contact-icon-wrap">
                  <img src={contactPhone} alt="Phone" className="contact-icon-img" />
                </span>
                <span>0112345678</span>
              </p>

              <p>
                <span className="contact-icon-wrap">
                  <img src={contactEmail} alt="Email" className="contact-icon-img" />
                </span>
                <span>info@fitnesstrainers.com</span>
              </p>
            </div>
          </div>

          <div className="contact-right">
            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={errors.name ? "input-error" : ""}
                />
                {errors.name && <p className="form-error">{errors.name}</p>}
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={errors.email ? "input-error" : ""}
                />
                {errors.email && <p className="form-error">{errors.email}</p>}
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  rows="5"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={errors.message ? "input-error" : ""}
                ></textarea>
                {errors.message && <p className="form-error">{errors.message}</p>}
              </div>

              {success && <p className="form-success">{success}</p>}

              <button type="submit" className="contact-btn">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;