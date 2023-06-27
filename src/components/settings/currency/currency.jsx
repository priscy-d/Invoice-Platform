import React from "react";
import { Button, Col, Container, Row, Table, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const CurrencySetting = () => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/invoice-platform/settings/new-currency");
  };
  return (
    <Container className="mt-5">
      <Row>
        <Col md={10}>
          <h2>Currencies</h2>
        </Col>
        <Col md={2} ClassName="d-flex flex-row-reverse">
          <Button variant="success" onClick={handleSubmit}>
            New currency
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
            <th> Currency Name</th>
            <th>Exchange rate</th>
            <th>Code</th>
          </tr>
        </thead>
        <tbody>
          <tr
            onClick={() => navigate("/invoice-platform/settings/new-currency")}
          >
            <td>Ghana cedi</td>
            <td>
              <p>12</p>
            </td>
            <td>
              <p>GHS</p>
            </td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};

export default CurrencySetting;
