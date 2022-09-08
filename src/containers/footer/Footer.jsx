import React from "react";
import {Link} from "react-router-dom";
import {
  RiFacebookBoxFill,
  RiGoogleFill,
  RiInstagramFill,
} from "react-icons/ri";
import jacLogo from "../../assets/JAIN-10re.png";
import "./footer.css";

const Footer = () => {
  return (
    <div className="jac__footer section__padding">
      <div className="jac__footer-links">
        <div className="jac__footer-links_logo">
          <img src={jacLogo} alt="jain Auto Corp." />
          <p>
            partners with Yakuza electronic, <br /> All Rights Reserved to
            partnership
          </p>
        </div>
        <div className="jac__footer-links_div">
          <h2>Touch Up</h2>
          <p><Link to="./contact">Jain Auto contact</Link></p>
          <p>Stores</p>
         
        </div>
        <div className="jac__footer-links_div">
          <h2>Company</h2>
          <a href=" ">
            <p><Link to="/tearm-and-condition">Terms and Conditions</Link></p>
          </a>
          <a href=" ">
            <p><Link to="/privacy-policy">Privacy Policy</Link></p>
          </a>
        </div>
        <div className="jac__footer-links_div">
          <h2>Touch on Social Media</h2>
          <li className="social">
           
            <RiInstagramFill className="social-icon" /> <p>Instagram</p>{" "}
          </li>
          <li className="social">
            <RiFacebookBoxFill className="social-icon" />
            <p>Facebook</p>
          </li>
          <li className="social">
            <RiGoogleFill className="social-icon" />
            <p>Gmail</p>
          </li>
        </div>
      </div>

      <div className="jac__footer-copyright">
        <p color="yellow">Desigend by</p>{" "}
        <p>TechNovarsis pvt Ltd. @2022 All rights reserved.</p>
      </div>
   </div>
  );
};

export default Footer;
