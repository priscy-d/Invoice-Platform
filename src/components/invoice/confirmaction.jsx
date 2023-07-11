import React from "react";
import { Row, Col, Alert, Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";

const ConfirmAction = ({ show, setShow }) => {
  const handleClose = () => setShow(false);

  return (
    <Modal
      show={show}
      onHide={handleClose}
      backdrop="static"
      size="auto" 
    >
     <Modal.Header closeButton>
        <Modal.Title>
          {" "}
          Are you sure you want to delete this Invoice?
        </Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ display: "flex", justifyContent: "center" }}>
        <Button
          className=" w-50"
          variant="danger"
        >
         Continue
        </Button>
      </Modal.Body>
    </Modal>
  );
};

export default ConfirmAction;
