import React from "react";
import { Button, Col, Container, Row, Form } from "react-bootstrap";
import CreatableSelect from "react-select/creatable";
import { taxOptions } from "../../data";

const EditProduct = () => {
  return (
    <Container className="main mt-5">
      <Row>
        <Col md={8}>
          <h2 className="mb-3">Edit Product</h2>
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
              <Form.Group as={Row} className="mb-3">
                <Col md={2}>
                  <Button variant="outline-dark" style={{ width: "90%" }}>
                    One-time
                  </Button>
                </Col>
                <Col md={2}>
                  <Button variant="outline-dark" style={{ width: "90%" }}>
                    Recurring
                  </Button>
                </Col>
              </Form.Group>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Row className="mb-3">
              <Col md={6}>
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" size="sm" />
                </Form.Group>
              </Col>
            </Row>
          </Row>

          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" rows={5} />
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
                checked
              />
              <Form.Label className="mt-3">Sales Price</Form.Label>
              <Form.Control type="text" size="sm" />
              <Form.Label className="mt-3">Tax</Form.Label>
              <CreatableSelect isClearable options={taxOptions} />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword" className="my-3">
              <Form.Check
                type="checkbox"
                id={`default-checkbox`}
                label={`Purchase information`}
                checked
              />
              <Form.Label className="mt-3">Purchase Price</Form.Label>
              <Form.Control size="sm" type="text" />
            </Form.Group>
          </Row>
        </Col>
      </Row>
      <Row className="my-5">
        <Col md={10} className="d-flex flex-row-reverse">
          <Button variant="success" type="submit" className="text-white">
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

export default EditProduct;
