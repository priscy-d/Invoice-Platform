import React from "react";
import { Row, Col, Alert, Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";

const ConfirmAction = ({ action, setAction }) => {
  const handleClose = () => setAction(false);
  return (
    <Modal
      show={action}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
      size="sm"
    >
      <Modal.Header closeButton>
        <Row>
          <Col>
            <h2 className="mb-3"> Customer Statement</h2>
          </Col>
        </Row>
      </Modal.Header>
      <Modal.Body className="modal-body">
        <Alert>
          new payment made <Alert.Link>id012345</Alert.Link>
        </Alert>
        <Row className="my-5">
          <Col className="d-flex flex-row-reverse">
            <Button variant="success" type="submit" className="text-white">
              Export Data
            </Button>
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
};

export default ConfirmAction;
