import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import front from '../../assets/scr.png';
import './header.css';

const Header = () => {
  const btn = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_yzowfbn', 'template_eq4ohup', btn.target, 'l9tJTS8e20181O-Y0')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div className="jac__header section__padding" id="home">
    {/* <div className="jac__header-image">
      <img src={ai} />
    </div> */}
    <div className="jac__header-content">
      <h1 className="gradient__text">Let&apos;s Build A Relationship Between <br /> Electronic Vehicle and Nature. </h1>
      <p>Future of Vehicles will be Electronics, <br />Eco-friendly, No harm of Nature , No more engine voice.. <br />come with us and grow together </p>

      <div className="jac__header-content__input">
        <input type="email" name="email" placeholder="Your Email Address" />
        <button type="button" ref={btn} onClick={sendEmail}>Contact Us</button>
      </div>

      <div className="jac__header-content__people">
        {/* <img src={people} /> */}
        <p>3000 happy family we get till now.</p>
      </div>
    </div>
    <div className="jac__header-image">
      <img src={front} alt=" yakuza"/>
    </div>
  </div>

  )
}

export default Header