import React,{useState} from "react";
import './footer.css';
import { Button, Modal,ModalFooter,Form } from "react-bootstrap";



const Slot = () => {
    const [modalAction, setModalAction] = useState(false);

    const handleModal = () => {
      console.log("Cancelled");
      setModalAction(!modalAction);
    };
  return ( <>
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
</>
  )
}

export default Slot