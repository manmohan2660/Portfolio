import "./Footer.css";

import React from "react";
import {
  FaHome,
  FaPhone,
  FaMailBulk,
  FaLinkedin,
  FaTwitter,
  FaGithub,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container"></div>
      <div className="left">
        <div className="location">
          <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
        </div>

        <div>
          <p>Rampur Dis-Lakhisarai , Ps - Surajgarha Bihar.</p>
          <p>India</p>
        </div>
      </div>
      <div className="phone">
        <h4>
          <FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} />
          9142229663{" "}
        </h4>
      </div>

      <div className="email">
        <h4>
          <FaMailBulk
            size={20}
            style={{ color: "#fff", marginRight: "2rem" }}
          />
          Manmohan2660@gmail.com{" "}
        </h4>
      </div>

      <div className="right">
        <h4>About my journey</h4>
        <p>
         Looking for some amazing work in future in technical field
        </p>
      </div>

      <div className="social">
        <FaGithub size={20} style={{ color: "#fff", marginRight: "2rem" }} />
        <FaTwitter size={20} style={{ color: "#fff", marginRight: "2rem" }} />

        <FaLinkedin size={20} style={{ color: "#fff", marginRight: "2rem" }} />
      </div>
    </div>
  );
};

export default Footer;
