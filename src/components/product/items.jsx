import React from "react";
import { Button, Col, Container, Row, Form, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import MaterialCheckbox from "@mui/material/Checkbox";

const Items = () => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/invoice-platform/products/create-product");
  };

  return (
    <Container className="mt-5">
      <Row>
        <Col md={10}>
          <h2>Product</h2>
        </Col>
        <Col md={2} ClassName="d-flex flex-row-reverse">
          <Button variant="success" onClick={handleSubmit}>
            New product
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
            <th>Name</th>
            <th>Type</th>
            <th>Taxes</th>
            <th>Sale Price</th>
          </tr>
        </thead>
        <tbody>
          <tr
            onClick={() => navigate("/invoice-platform/products/edit-product")}
          >
            <td>
              <MaterialCheckbox size="small" />
            </td>
            <td>Monthly subscription</td>
            <td>Subscription</td>
            <td>5%</td>
            <td>¢1000</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};

export default Items;
