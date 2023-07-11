import React from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";

const EditCustomerModal = ({ show, setShow }) => {
  const handleClose = () => setShow(false);

  return (
    <Modal
      show={show}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
      size="xl">
      <Modal.Header closeButton>
        <Row>
          <Col>
            <h2 className="mb-3">Edit Customer</h2>
          </Col>
        </Row>
      </Modal.Header>
      <Modal.Body className="modal-body">
        <Form>
          <Row className="my-3">
            <Col className="mt-2">
              <h5>General</h5>
              <p>Customer personal information</p>
              <hr />
              <Row className="mb-3">
                <Col className="mb-3" md={6}>
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control className="form-fields" type="text" />
                  </Form.Group>
                </Col>
                <Col className="mb-3" md={6}>
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control className="form-fields" type="email" />
                  </Form.Group>
                </Col>

                <Col className="mb-3" md={6}>
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control className="form-fields" type="phone" />
                  </Form.Group>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className="my-3">
            <Col className="mt-2">
              <h5>Billing</h5>
              <p>Customer account information</p>
              <hr />
              <Row className="mb-3">
                <Form.Group
                  as={Col}
                  controlId="formGridPassword"
                  className="my-3">
                  <Form.Label>Tax Number</Form.Label>
                  <Form.Control className="form-fields" type="text" />
                </Form.Group>

                <Form.Group
                  as={Col}
                  controlId="formGridPassword"
                  className="my-3">
                  <Form.Label>Currency</Form.Label>
                </Form.Group>
              </Row>
            </Col>
          </Row>
          <Row className="my-3">
            <Col className="mt-2">
              <h5>Address</h5>
              <p>Address information of the customer</p>
              <hr />
              <Row className="mb-3">
                <Form.Group
                  as={Col}
                  controlId="formGridPassword"
                  className="my-3">
                  <Form.Label>Country</Form.Label>
                </Form.Group>

                <Form.Group
                  as={Col}
                  controlId="formGridPassword"
                  className="my-3">
                  <Form.Label>City</Form.Label>
                  <Form.Control className="form-fields" type="text" />
                </Form.Group>
              </Row>
            </Col>
          </Row>
          <Row className="my-5">
            <Col className="d-flex flex-row-reverse">
              <Button variant="success" type="submit" className="text-white">
                Save Changes
              </Button>
              <Button
                variant="danger"
                type="button"
                className="me-3 text-white">
                Cancel
              </Button>
            </Col>
          </Row>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default EditCustomerModal;
