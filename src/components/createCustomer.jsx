import React from "react";
import { Button, Col, Container, Row, Form } from "react-bootstrap";

const CreateCustomer = () => {
  return (
    <Container className="main mt-5">
      <Row>
        <Col md={8}>
          <h2 className="mb-3">New Customer</h2>
        </Col>
      </Row>

      <Row className="my-3">
        <Col md={10} className="mt-2">
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
            <div className="mb-3">
              <Form.Group as={Col} md={6} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control className="form-fields" type="email" />
              </Form.Group>
            </div>

            <div className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail" md={6}>
                <Form.Label>Phone</Form.Label>
                <Form.Control className="form-fields" type="phone" />
              </Form.Group>
            </div>
          </Row>
        </Col>
      </Row>
      <Row className="my-3">
        <Col md={10} className="mt-2">
          <h5>Billing</h5>
          <p>Customer account information</p>
          <hr />
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridPassword" className="my-3">
              <Form.Label>Tax Number</Form.Label>
              <Form.Control className="form-fields" type="text" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword" className="my-3">
              <Form.Label>Currency</Form.Label>
              <Form.Control className="form-fields" type="text" />
            </Form.Group>
          </Row>
        </Col>
      </Row>
      <Row className="my-3">
        <Col md={10} className="mt-2">
          <h5>Address</h5>
          <p>Address information of the customer</p>
          <hr />
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridPassword" className="my-3">
              <Form.Label>Country</Form.Label>
              <Form.Control className="form-fields" type="text" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword" className="my-3">
              <Form.Label>City</Form.Label>
              <Form.Control className="form-fields" type="text" />
            </Form.Group>
          </Row>
        </Col>
      </Row>
      <Row className="my-5">
        <Col md={10} className="d-flex flex-row-reverse">
          <Button variant="success" type="submit" className="text-white">
            Submit
          </Button>
          <Button
            variant="outline-light"
            type="button"
            className="me-3 text-dark">
            Preview
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default CreateCustomer;
