import React from "react";
import { Button, Col, Container, Row, Table, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import MaterialCheckbox from "@mui/material/Checkbox";

const Customers = () => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/invoice-platform/customers/create-customer");
  };
  return (
    <Container className="mt-5">
      <Row>
        <Col md={10}>
          <h2>Customers</h2>
        </Col>
        <Col md={2} ClassName="d-flex flex-row-reverse">
          <Button variant="success" onClick={handleSubmit}>
            New customer
          </Button>
        </Col>
      </Row>
      <Row className="mx-5 my-3">
        <Col>
          <h2 className="summary-text">¢2400</h2>
          <p>overdue</p>
        </Col>
        <Col>
          <h2 className="summary-text">¢2400</h2>
          <p>debited</p>
        </Col>
        <Col>
          <h2 className="summary-text">¢0</h2>
          <p>draft</p>
        </Col>
      </Row>
      <Form.Control
        type="text"
        placeholder="search"
        className="my-4 search-input"
      ></Form.Control>
      <Table hover bordered size="sm">
        <thead className="table-light">
          <tr>
            <th>
              <MaterialCheckbox size="small" />
            </th>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Account info</th>
          </tr>
        </thead>
        <tbody>
          <tr
            onClick={() =>
              navigate("/invoice-platform/customers/view-customer")
            }
          >
            <td>
              <MaterialCheckbox size="small" />
            </td>
            <td>Divine Eteba</td>
            <td>divineeteba@gmail.com</td>
            <td>Accra, Ghana</td>
            <td>
              <p>debit:¢1000</p> <p>credit:¢1000</p>
            </td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};

export default Customers;
