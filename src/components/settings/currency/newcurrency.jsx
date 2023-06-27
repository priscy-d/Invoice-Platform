import React from "react";
import { Button, Col, Container, Row, Form, Table } from "react-bootstrap";

const NewCurrency = () => {
  return (
    <Container className="main mt-5">
      <Row>
        <Col md={8}>
          <h2 className="mb-3">New Currency</h2>
        </Col>
      </Row>

      <Row className="my-3">
        <Col md={10} className="mt-2">
          <h5>General</h5>
          <p>Add a new currency to existing curencies</p>
          <hr />
          <Row className="mb-3">
            <Form.Group as={Col} md={6} className="my-3">
              <Form.Label>Currency Name</Form.Label>
              <Form.Control className="me-2" type="text" />
            </Form.Group>
            <Form.Group as={Col} md={6} className="my-3">
              <Form.Label>Exchange Rate</Form.Label>
              <Form.Control className="me-2" type="text" />
            </Form.Group>
            <Form.Group as={Col} md={6} className="my-3">
              <Form.Label>Currency Code</Form.Label>
              <Form.Control className="me-2" type="text" />
            </Form.Group>
            <Form.Group as={Col} md={6} className="my-3">
              <Form.Label>Country</Form.Label>
              <Form.Control className="me-2" type="text" />
            </Form.Group>
          </Row>
        </Col>
      </Row>

      <Row>
        <Col md={10} className="d-flex flex-row-reverse">
          <Button variant="success" type="submit" className="text-white">
            Create currency
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default NewCurrency;
