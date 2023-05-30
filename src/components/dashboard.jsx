import React from "react";
import { Col, Container, Row, Form } from "react-bootstrap";

const Dashboard = () => {
  return (
    <Container className="main mt-5">
      <Row>
        <Col md={8}>
          <h2 className="mb-3">Dashboard</h2>
        </Col>
        <Col>
          <Form.Group>
            <div className="d-flex flex-row">
              <Form.Control
                className="date me-2"
                type="date"
                placeholder="start date"
                size="sm"
                id="date"
              />

              <Form.Control
                className="date"
                type="date"
                placeholder="end date"
                size="sm"
                id="date"
              />
            </div>
          </Form.Group>
        </Col>
      </Row>

      <Row className="my-3">
        <Col className="mt-2">
          <h5>Receivables</h5>
          <p>Amount yet to be paid by customers</p>
          <hr />
          <p>
            Total unpaid invoices:<b>¢2400</b>
          </p>
        </Col>
        <Col className="mt-2">
          <h5>Paid</h5>
          <p> Total amount paid by customers</p>
          <hr />
          <p>
            Total paid invoices:<b>¢2400</b>
          </p>
        </Col>
      </Row>
      <Row className="my-3">
        <Col className="mt-2">
          <h5>Cash flow chart</h5>
          <p> Total amount made and due customers</p>
          <hr />
          <Row>
            <Col sm={2}>
              <p>income</p>
            </Col>
            <Col sm={2}>
              <p>unpaid</p>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="my-3">
        <Col className="mt-2">
          <h5>Income by type</h5>
          <p>Total income across invoice types </p>
          <hr />
        </Col>
        <Col className="mt-2">
          <h5>Account balance</h5>
          <p> Total amount in bank account</p>
          <hr />
          <Row>
            <Col md={10}>Cash</Col>
            <Col md={2}>
              <b>¢2400</b>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
