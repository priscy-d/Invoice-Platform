import React from "react";
import {
  Badge,
  Button,
  Col,
  Container,
  Row,
  Form,
  Table,
} from "react-bootstrap";
import CreatableSelect from "react-select/creatable";
import { countryOptions, taxOptions } from "../../data";

const CreateInvoice = () => {
  return (
    <Container className="main mt-5">
      <Row>
        <Col md={8}>
          <h2 className="mb-3">
            Invoice: INV-001
            <Badge className="mx-2" pill text="danger" bg="light">
              sent
            </Badge>
          </h2>
        </Col>
        <Col md={2}>
          <Button variant="success">Edit</Button>
        </Col>
      </Row>

      <Row className="my-3">
        <Col md={10} className="mt-2">
          <Row className="mb-3">
            <Col className="mb-3" md={6}>
              <Form.Group controlId="formGridEmail">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
            </Col>
            <Col className="mb-3" md={6}>
              <Form.Group controlId="formGridEmail">
                <Form.Label>Subheading</Form.Label>
                <Form.Control type="email" />
              </Form.Group>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default CreateInvoice;
