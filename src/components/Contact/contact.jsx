/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import "./contact.css"
import Navbar from "../navbar/Navbar";
import fbicon from "../../assets/fb.png"
// import linkedin from "../../assets/in.png"
import youtube from "../../assets/yt.png"
import insta from "../../assets/insta.png"
import Footer from "../../containers/footer/Footer";
const Contact = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="form-wrapper">
        
      <div className="form-flex">
        <div className="form-left">
          <div className="form-center">
            <div className="form-text">
              <h2>Find Us Here</h2>
             
            </div>
            <div className="form">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117763.55154156586!2d75.79380945072901!3d22.724115838646572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fcad1b410ddb%3A0x96ec4da356240f4!2sIndore%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1662312321502!5m2!1sen!2sin" width="370px"  height="500px" allowfullscreen="true" loading="lazy" referrerpolicy="no-referrer-when-downgrade"/>
             
            </div>
          </div>
        </div>
        <div className="form-right">
          <div className="form-center">
            <div className="form-text">
              <h2 className="heading">Contact Information</h2>
            </div>
            <div className="right-row">
              <p>
                <strong>Address : </strong>Indore,Madhaya Pradesh, India
              </p>
            </div>
            <div className="right-row">
              <p><strong>Phone No: </strong>+91- </p>
            </div>
            <div className="right-row">
              <p><strong>Email : </strong>email@gmail.com</p>
            </div>
            <div className="line"></div>
            <div className="right-row">
              <p><strong>Dealership Enquires : </strong>email@gmail.com</p>
            </div>
            <div className="line"></div>
            <div className="right-row">
              <div className="icons">
                <div className="icon">
                  <img src={fbicon} alt="facebook" />
                </div>
                <div className="icon">
                  <img src={youtube} alt="YouTube" />
                </div>
                
                <div className="icon">
                  <img src={insta} alt="Instagram" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
< Footer/>
    </div>
    
  );
};

export default Contact;
