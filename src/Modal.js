import React from "react";
import { Modal, Button } from "react-bootstrap";
import gmail from "./images/gmail.png";
function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          You Can Reach me out !
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4 style={{ alignContent: "center", textAlign: "center" }}>
          <a href="mailto:anmolreshi@gmail.com">
            <img
              alt="email"
              style={{ height: "29px", marginLeft: "0px" }}
              src={gmail}
            />
            <span style={{ marginLeft: "10px" }}>anmolreshi@gmail.com</span>
          </a>
        </h4>
        <p>
          <b>Note:</b> I dont See Emails at <b>Sunday</b>. Kindly email me from
          Monday to Saturday <b>(9:00 AM - 9:00 PM).</b>
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
export default MyVerticallyCenteredModal;
