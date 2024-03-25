import React, { useState } from "react";
import { ContactContainer } from "./styles";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <ContactContainer>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            placeholder="Enter your message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button type="submit">Submit</button>
        </form>
      </div>

      <h2>Contact Me</h2>
      <div className="social-links">
        <a href="https://www.instagram.com/xiangg_d/">
          <FaInstagram size={40} />
        </a>
        <a href="https://www.facebook.com/xiangdi.su/">
          <FaFacebook size={40} />
        </a>
        <a href="https://www.linkedin.com/in/xiangdi-su-433821234/">
          <FaLinkedin size={40} />
        </a>
      </div>
      <h2>Phone: 514-571-4892</h2>
      <h2>Email: Xiangdi10@gmail.com</h2>
    </ContactContainer>
  );
};

export default Contact;
