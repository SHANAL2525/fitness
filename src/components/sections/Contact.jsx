import { useState } from "react";

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
    <section id="contact" className="section section--dark">
      <div className="container contact">
        <div className="contact-left">
          <p className="section-subtitle">CONTACT US</p>
          <h2 className="section-title">Get In Touch With Us</h2>
          <p className="section-text">
            Have any questions? Reach out to us and we’ll get back to you as soon
            as possible.
          </p>

          <div className="contact-info">
            <p>📍 531/2 Colombo 05</p>
            <p>📞 0112345678</p>
            <p>✉ info@fitnesstrainers.com</p>
          </div>
        </div>

        <div className="contact-right">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <p className="form-error">{errors.name}</p>}
            </div>

            <div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <p className="form-error">{errors.email}</p>}
            </div>

            <div>
              <textarea
                rows="5"
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              {errors.message && <p className="form-error">{errors.message}</p>}
            </div>

            {success && <p className="form-success">{success}</p>}

            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;