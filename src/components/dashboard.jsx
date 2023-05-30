import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Dashboard = () => {
  return (
    <Container className="mt-5">
      <h2>Dashboard</h2>
      <Row>
        <Col>
          <p>Receivables</p>
          <p>Total unpaid invoices</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
