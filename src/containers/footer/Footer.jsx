import React, { useState } from "react";
import { Button, Modal,ModalFooter,Form } from "react-bootstrap";
import {
  RiFacebookBoxFill,
  RiGoogleFill,
  RiInstagramFill,
} from "react-icons/ri";
import jacLogo from "../../assets/logo.png";
import "./footer.css";
const Footer = () => {
  const [modalAction, setModalAction] = useState(false);

  const handleModal = () => {
    console.log("Cancelled");
    setModalAction(!modalAction);
  };
  return (
    <div className="jac__footer section__padding">
      <div className="jac__footer-heading">
        <h1 className="gradient__text">
          Easy to Book your Slot for vechile Services <br /> <br />
          just one click
        </h1>
      </div>

      <div className="jac__footer-btn">
        <Button style={{background:'none', border:'none'}} onClick={() => handleModal()}> <p>Book Your Slot Rapidly</p></Button>
      </div>

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
          <p>jain Auto</p>
          <p>Stores</p>
          <p>e-vehicle</p>
        </div>
        <div className="jac__footer-links_div">
          <h2>Company</h2>
          <a href=" ">
            <p>Terms and Conditions</p>
          </a>
          <a href=" ">
            <p>Privacy Policy</p>
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
        <p>Novarsistech pvt Ltd. @2022 All rights reserved.</p>
      </div>

      <div>
        <Modal
          className="modal-do"
          show={modalAction}
          onHide={() => handleModal()}
        >
          <div className="head-count">
            <p className="head">Book from Home</p>
          </div>
          <Modal.Body className="model-body ">
            <Form  onSubmit=''>
              <label className="model-body">
                <h5 className="text-head">Name</h5>{" "}
              </label>
              <input
                type="text"
                name="name"
                placeholder="What is your good Name"
              />
            
              <label className="model-body">
                <h5 className="text-head">Phone</h5>
              </label>
              <input type="text" name="phone" placeholder="Contact No." />
              
              <label className="model-body">
                <h5 className="text-head">Vehcile Number</h5>
              </label>
              <input type="text" name="vechname" placeholder="For example: DL02AD2332" />
              <label className="model-body">
                <h5 className="text-head">Pick a date</h5>
              </label>
              <input className="model-body" type="date" name="date" />
              
    
          

              {/* <input  className="text-head" type="submit" value="Send" /> */}
              <ModalFooter>
                <Button className=" " type="submit" value="send">
                  SEND
                </Button>
                <Button onClick={() => handleModal()}>Close</Button>
              </ModalFooter>
            </Form>
          </Modal.Body>
          <div className="head-count">
            <h4 className=" footer-heading ">Jain Auto Corporation Pvt. Ltd</h4>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default Footer;
