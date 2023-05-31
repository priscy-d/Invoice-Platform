import React from "react";
import { Button, Col, Container, Row, Form } from "react-bootstrap";

const CreateCustomer = () => {
  return (
    <Container className="main mt-5">
      <Row>
        <Col md={8}>
          <h2 className="mb-3">New Product</h2>
        </Col>
      </Row>

      <Row className="my-3">
        <Col md={10} className="mt-2">
          <h5>General</h5>
          <p>Details about the product</p>
          <hr />
          <Row>
            <Form.Group as={Col} className="mb-3" controlId="formGridAddress1">
              <Form.Label>Type</Form.Label>
              <Form.Group>
                <Button className="me-3" variant="outline-dark">
                  One-time
                </Button>
                <Button variant="outline-dark">Recurring</Button>
              </Form.Group>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control className="form-fields" type="text" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Category</Form.Label>
              <Form.Control className="form-fields" type="text" />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>Description</Form.Label>
            <Form.Control className="form-fields" as="textarea" rows={5} />
          </Form.Group>
        </Col>
      </Row>
      <Row className="my-3">
        <Col md={10} className="mt-2">
          <h5>Billing</h5>
          <p>Sales information</p>
          <hr />
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail" className="my-3">
              <Form.Check
                type="checkbox"
                id={`default-checkbox`}
                label={`Sales information`}
              />
              <Form.Label className="mt-3">Sales Price</Form.Label>
              <Form.Control className="form-fields " type="text" />
              <Form.Label className="mt-3">Tax</Form.Label>
              <Form.Control className="form-fields" type="text" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword" className="my-3">
              <Form.Check
                type="checkbox"
                id={`default-checkbox`}
                label={`Purchase information`}
              />
              <Form.Label className="mt-3">Purchase Price</Form.Label>
              <Form.Control className="form-fields" type="text" />
            </Form.Group>
          </Row>
        </Col>
      </Row>
      <Row className="my-5">
        <Col md={10} className="d-flex flex-row-reverse">
          <Button variant="dark" type="submit" className="text-white">
            Submit
          </Button>
          <Button variant="outline-dark" type="button" className="me-3 ">
            Preview
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default CreateCustomer;
