import React from "react";
import { Button, Col, Container, Row, Form } from "react-bootstrap";

const CreateInvoice = () => {
  return (
    <Container className="main mt-5">
      <Row>
        <Col md={8}>
          <h2 className="mb-3">New Invoice</h2>
        </Col>
      </Row>

      <Row className="my-3">
        <Col md={10} className="mt-2">
          <h5>General</h5>
          <p>Adding your personal identification information</p>
          <hr />
          <Row className="mb-3">
            <Col className="mb-3" md={6}>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Title</Form.Label>
                <Form.Control className="form-fields" type="text" />
              </Form.Group>
            </Col>
            <div className="mb-3">
              <Form.Group as={Col} md={6} controlId="formGridEmail">
                <Form.Label>Subheading</Form.Label>
                <Form.Control className="form-fields" type="email" />
              </Form.Group>
            </div>
          </Row>
        </Col>
      </Row>
      <Row className="my-3">
        <Col md={10} className="mt-2">
          <h5>Customer details</h5>
          <p>Customer account and personal information</p>
          <hr />
          <Row className="mb-3">
            <Col>
              <Form.Group controlId="formGridPassword" className="my-3">
                <Form.Label>Customer</Form.Label>
                <Form.Control className="form-fields" type="text" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group
                as={Col}
                md={6}
                controlId="formGridPassword"
                className="my-3">
                <Form.Label>Invoice Date</Form.Label>
                <Form.Control className="form-fields" type="text" />
                <Form.Label>Due Date</Form.Label>
                <Form.Control className="form-fields" type="text" />
              </Form.Group>
              <Form.Group
                as={Col}
                md={6}
                controlId="formGridPassword"
                className="my-3">
                <Form.Label>Invoice number</Form.Label>
                <Form.Control className="form-fields" type="text" />
              </Form.Group>
            </Col>
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
            <Form.Group as={Col} controlId="formGridPassword" className="my-3">
              <Form.Label>Discount</Form.Label>
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

export default CreateInvoice;
