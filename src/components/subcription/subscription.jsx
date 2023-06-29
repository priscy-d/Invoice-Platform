import React from "react";
import { Button, Col, Container, Row, Table, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import MaterialCheckbox from "@mui/material/Checkbox";

const Subscription = () => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/invoice-platform/subscriptions/create-subscription");
  };
  return (
    <Container className="mt-5">
      <Row>
        <Col md={10}>
          <h2>Subscriptions</h2>
        </Col>
        <Col md={2} ClassName="d-flex flex-row-reverse">
          <Button variant="success" onClick={handleSubmit}>
            New subscription
          </Button>
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
            <th>Customer</th>
            <th>Items</th>
            <th>Status</th>
            <th>Start Date</th>
            <th>Recurring Period</th>
          </tr>
        </thead>
        <tbody>
          <tr
            onClick={() =>
              navigate("/invoice-platform/subscriptions/view-subscription")
            }
          >
            <td>
              <MaterialCheckbox size="small" />
            </td>
            <td>Priscilla</td>
            <td>
              <p>Laptop</p>
              <p>Phone</p>
            </td>
            <td>Active</td>
            <td>24th March</td>
            <td>Monthly</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};

export default Subscription;
