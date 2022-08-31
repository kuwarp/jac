import React, { useState } from "react";
import { Modal, Form, Button, ModalBody, ModalFooter } from "react-bootstrap";
// import leftimg from "../../assets/logo-1.png";
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
        // className="modal-clan"
      >
        {/* <ModalBody>
        <div className="left-img">
          <img src={leftimg} alt=" Dealership" />
        </div>
        </ModalBody> */}

        
        <ModalBody className="jac-dealer">
          <div>
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
<ModalFooter></ModalFooter>
              <Button onClick={() => handleModal()}> Close</Button>
            </Form>
          </div>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default CTA;
