import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { Button, Modal, Form, ModalFooter } from "react-bootstrap";
import Logo from "../../assets/logo.png";
import "./navbar.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [modalAction, setModalAction] = useState(false);

  const handleModal = () => {
    console.log("Cancelled");
    setModalAction(!modalAction);
  };

  // emailjs

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_yzowfbn",
        "template_8s3owoj",
        form.current,
        "l9tJTS8e20181O-Y0"
      )
      .then(
        (result) => {
          console.log(result.text);
          setModalAction(modalAction);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="jac__navbar">
      <div className="jac__navbar-links">
        <div className="jac__navbar-links_logo ">
          <img src={Logo} alt="Jain Auto" />
        </div>
        <div className="jac__navbar-links_container">
          <p>
            <a href="#home">Home</a>
          </p>
          <p>
            <a href="#wjac">Why Jain Auto?</a>
          </p>
          <p>
            <a href="./CTA">Open to DealerShip</a>
          </p>
          <p>
            <a href="#features">Contact</a>
          </p>
          <p>
            <a href="#blog">Library</a>
          </p>
        </div>
      </div>
      <div className="jac__navbar-sign">
        <button type="button" onClick={() => handleModal()}>
          Book a ride
        </button>
      </div>
      <div className="jac__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#e5f747"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#97968d"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="jac__navbar-menu_container scale-up-center">
            <div className="jac__navbar-menu_container-links">
              <p>
                <a href="#home">Home</a>
              </p>
              <p>
                <a href="#wjac">Why Jain Auto?</a>
              </p>
              <p>
                <a href="#possibility">DealerShip</a>
              </p>
              <p>
                <a href="#features">touch with us</a>
              </p>
              <p>
                <a href="#blog">Library</a>
              </p>
            </div>
            <div className="jac__navbar-menu_container-links-sign">
              <button type="button" onClick={() => handleModal()}>
                Book a ride
              </button>
            </div>
          </div>
        )}
      </div>
      {/* bootstrap modal */}
      <div>
        <Modal
          className="modal-do"
          show={modalAction}
          onHide={() => handleModal()}
        >
          <div className="head-count">
            <h3 className="head">Book a ride</h3>
          </div>
          <Modal.Body className="model-body ">
            <Form ref={form} onSubmit={sendEmail} >
              <label className="model-body">
                <h5 className="text-head">Name</h5>{" "}
              </label>
              <input
                type="text"
                name="name"
                placeholder="What is your good Name"
              />
              <label className="model-body">
                <h5 className="text-head">Email</h5>
              </label>
              <input type="email" name="email" placeholder="your email" />
              <label className="model-body">
                <h5 className="text-head">Phone</h5>
              </label>
              <input type="text" name="phone" placeholder="Contact No." />
              <label className="model-body">
                <h5 className="text-head">Pick a date</h5>
              </label>
              <input className="model-body" type="date" name="date" />
              <label className="model-body">
                <h5 className="text-head">Address</h5>
              </label>
              <textarea             
                name="address"
                placeholder="What is your Address"
                id=""
                cols="20"
                rows="4"
              />
              

              {/* <input  className="text-head" type="submit" value="Send" /> */}
              <ModalFooter><Button className=" " type="submit" value='send'>SEND</Button>
               <Button onClick={()=>handleModal()}>Close</Button>
          
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

export default Navbar;

{
  /* <div className=" head-count">
<h3 className="head">Book a ride</h3>
</div>
  

<Modal.Body className="model-body">
  <h5 className="text-head">Name</h5>{" "}
  <input
    type="text"
    name="searching"
    id=""
    placeholder="What's your good name?"
  />
</Modal.Body>
<Modal.Body className="model-body">
  <h5 className="text-head">Phone No.</h5>{" "}
  <input
    type="phone"
    name="phoe"
    id=""
    placeholder="phone no......."
  />
</Modal.Body>
<Modal.Body className="model-body">
  <h5 className="text-head">Email</h5>{" "}
  <input
    type="email"
    name="email"
    id=""
    placeholder="email here...."
  />
</Modal.Body>
<Modal.Body className="model-body">
  <h5 className="text-head">Pick up a date</h5>{" "}
  <input type="date" name="date" />
</Modal.Body>
<Modal.Body className="model-body">
  <h5 className="text-head">Address</h5>{" "}
  <input
    type="search"
    name="address"
    id=""
    placeholder="Start typing........."
  />
</Modal.Body>
<Modal.Footer>
  <Button onClick={() => handleModal()}>Close</Button>
  <Button onClick={() => sendEmail()}>Save</Button>
  <br />
</Modal.Footer>

</Modal> */
}
