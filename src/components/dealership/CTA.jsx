import React, { useState } from "react";
import { Modal, Form, Button, ModalBody, ModalFooter } from "react-bootstrap";
import leftimg from "../../assets/JAIN.png";
import "./cta.css";
function CTA() {
  // const values = [true, "sm-down", "md-down", "lg-down", "xl-down", "xxl-down"];
  // const [fullscreen, setFullscreen] = useState(true);
  const [modalAction, setModalAction] = useState(false);

  const handleModal = (breakpoint) => {
    // setFullscreen(breakpoint);
    setModalAction(!modalAction);
  };

  return (
    <div className="jac__cta">
      <div className="jac__cta-content">
        <p>Request to get started business with us!</p>
        <h3>
          Apply today for Dealership and make a part of happy wide family.
        </h3>
      </div>
      <div className="jac__cta-btn">
        <button type="button" onClick={() => handleModal()}>
          Apply
        </button>
      </div>
      <Modal
        fullscreen={true}
        show={modalAction}
        dialogClassName="modal-90w"
        onHide={() => handleModal()}
        
      >
        <Modal.Header className="head-counting  "  closeButton>
          <p className="head" >Fill Your Informations</p>
          </Modal.Header>
        
        <ModalBody   >
          {/* <div >
           

          </div>
          <div className="jac-dealer">
          <img src={leftimg} alt="" />
            <Form onSubmit="">
              <label className="model-body">
                <h5 className="text-head">Name</h5>{" "}
              </label>
              <input
                type="text"
                name="name"
                placeholder="Dealership candidate Name"
              />

              <label className="model-body">
                <h5 className="text-head">location</h5>
              </label>
              <input
                type="text"
                name="location"
                placeholder="where in City??"
              />

              <label className="model-body">
                <h5 className="text-head">Landmark</h5>
              </label>
              <input
                type="text"
                name="landmark"
                placeholder="Landmark near You?"
              />

              <label className="model-body">
                <h5 className="text-head">Nearest Police Station</h5>
              </label>
              <input className="model-body" type="text" name="nps" />

              <Button className="mt-5" onClick={() => handleModal()}> Close</Button>
            </Form>
          </div> */}
          <div className="form-wrapper">
        
        <div className="form-flex">
          <div className="form-left">
            <div className="form-center">
              <div className="form-text">
               
               
              </div>
              <div className="form">
              <img src={leftimg} alt="" />
               
              </div>
            </div>
          </div>
          <div className="form-right">
            <div className="form-center">
              <div className="form-text">
                <h2 className="heading">DealerShip Form</h2>
              </div>
              <Form onSubmit="">
              <label className="model-body">
                <h5 className="text-head">Name</h5>{" "}
              </label>
              <input
                type="text"
                name="name"
                placeholder="Dealership candidate Name"
                required
              />

              <label className="model-body">
                <h5 className="text-head">location</h5>
              </label>
              <input
                type="text"
                name="location"
                placeholder="where in City??"
                required
              />

              <label className="model-body">
                <h5 className="text-head">Landmark</h5>
              </label>
              <input
                type="text"
                name="landmark"
                placeholder="Landmark near You?"
                required
              />

              <label className="model-body">
                <h5 className="text-head">Nearest Police Station</h5>
              </label>
              <input className="model-body" type="text" name="nps" placeholder="Police Station name" required />
<ModalFooter>
              <Button className="mt-5" onClick={() => ' '}> Submit</Button>
             <Button className="mt-5"  onClick={() => handleModal()}> Close</Button> 
             </ModalFooter>    
            </Form>
              </div>   
          </div>
        </div>
      </div>
        </ModalBody>
<ModalFooter className="head-count">
  <h3 className="footer-head"> jain Auto Pvt. Ltd, Indore</h3>
</ModalFooter>
       
       
      </Modal>


     
      
    </div>
  );
}

export default CTA;
