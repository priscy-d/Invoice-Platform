import React from "react";
import {
  Badge,
  Button,
  Col,
  Container,
  Row,
  Form,
  Card,
  Dropdown,
} from "react-bootstrap";
import CreatableSelect from "react-select/creatable";
import { countryOptions, taxOptions } from "../../data";
import { BsThreeDots } from "react-icons/bs";

const CreateInvoice = () => {
  return (
    <Container className="main mt-5">
      <Row>
        <Col md={10}>
          <h2 className="mb-3">
            Invoice: INV-001
            <Badge className="mx-2" pill text="danger" bg="light">
              sent
            </Badge>
          </h2>
        </Col>
        <Col md={2}>
          <Button variant="success" className="text-white">
            Edit
          </Button>
          <Dropdown>
            <Dropdown.Toggle variant="light" id="dropdown-basic">
              <BsThreeDots roundedCircle />
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item eventKey="1">Edit</Dropdown.Item>
              <Dropdown.Item eventKey="2">Download as PDf</Dropdown.Item>
              <Dropdown.Item eventKey="3">Send Email</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item eventKey="4">Delete</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
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
              <Card></Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default CreateInvoice;
