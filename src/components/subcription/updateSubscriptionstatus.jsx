import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";

const UpdateSubscriptionStatus = ({ show, setShow }) => {
  const handleClose = () => setShow(false);
  return (
    <Modal
      show={show}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
      size="auto"
    >
      <Modal.Header closeButton>
        <Row>
          <Col>
            <h4 className="mb-3"> Update Subscription status</h4>
          </Col>
        </Row>
      </Modal.Header>
      <Modal.Body className="modal-body">
        <p>
          Subscription <b>active</b> since <b>24th Oct</b>
        </p>
        <Row className="my-5">
          <Col className="d-flex flex-row-reverse">
            <Button variant="danger" type="submit" className="text-white">
              Deactivate
            </Button>
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
};

export default UpdateSubscriptionStatus;
