import React from "react";
import { Button, Col, Container, Row, Form, Table } from "react-bootstrap";
import CreatableSelect from "react-select/creatable";
import { countryOptions, taxOptions } from "../../data";

const CreateSubscription = () => {
  return (
    <Container className="main mt-5">
      <Row>
        <Col md={8}>
          <h2 className="mb-3">New Subscription</h2>
        </Col>
      </Row>
      <Row className="my-3">
        <Col md={10} className="mt-2">
          <h5>Product information</h5>

          <hr />
          <Row className="mb-3">
            <Table>
              <thead>
                <tr>
                  <td>Item</td>
                  <td>Tax</td>
                  <td>Discount</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <CreatableSelect
                      isClearable
                      options={countryOptions}
                      className="tableSelect"
                    />
                  </td>
                  <td>
                    <CreatableSelect isClearable options={taxOptions} />
                  </td>
                  <td>
                    <Form.Control type="text" />
                  </td>
                </tr>
              </tbody>
            </Table>
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
                <Form.Label>Customer Name</Form.Label>
                <CreatableSelect isClearable options={taxOptions} />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group
                as={Row}
                controlId="formGridPassword"
                className="my-3"
              >
                <Form.Group as={Col} md={6}>
                  <Form.Label>Start Date</Form.Label>
                  <Form.Control
                    className=" me-2"
                    type="date"
                    placeholder="start date"
                    id="date"
                  />
                </Form.Group>
                <Form.Group as={Col} md={6}>
                  <Form.Label>Recurring Period</Form.Label>
                  <Form.Control className="me-2" type="number" />
                </Form.Group>
              </Form.Group>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row className="my-5"></Row>
      <Row className="my-5">
        <Col md={10} className="d-flex flex-row-reverse">
          <Button variant="success" type="submit" className="text-white">
            Activate
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default CreateSubscription;
