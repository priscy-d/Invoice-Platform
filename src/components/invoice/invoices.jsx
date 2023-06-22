import React from "react";
import { Button, Col, Container, Row, Table, Form, Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Invoices = () => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/invoice-platform/invoices/create-invoice");
  };

  return (
    <Container className="mt-5">
      <Row className="mb-2">
        <Col md={10}>
          <h2>Invoices</h2>
        </Col>
        <Col md={2} ClassName="d-flex flex-row-reverse">
          <Button variant="success" onClick={handleSubmit}>
            New Invoice
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
      <Nav className="me-auto">
        <Nav.Link className="linked" href="/invoice-platform/invoices">
          Invoices
        </Nav.Link>
        <Nav.Link
          className="linked"
          href="/invoice-platform/invoices/recurring-templates">
          Recurring templates
        </Nav.Link>
      </Nav>

      <Form.Control
        type="text"
        placeholder="search"
        className="my-4 search-input"></Form.Control>
      <Table hover bordered size="sm">
        <thead className="table-light">
          <tr>
            <th>Due date</th>
            <th>Status</th>
            <th>Customer</th>
            <th>Type</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr
            onClick={() => navigate("/invoice-platform/invoices/view-invoice")}>
            
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};

export default Invoices;
