import React, { useState } from "react";
import { Col, Container, Row, Form } from "react-bootstrap";
import { Bar, Doughnut } from "react-chartjs-2";
import { Data, TotalByType } from "../data";
import { Chart as ChartJS } from "chart.js/auto";

const Dashboard = () => {
  const [data, setData] = useState({
    labels: Data.map((info) => info.month),
    datasets: [
      {
        label: "income",
        data: Data.map((info) => info.income),
      },
      {
        label: "unpaid",
        data: Data.map((info) => info.unpaid),
      },
    ],
  });
  const [totalData, setTotalData] = useState({
    labels: TotalByType.map((info) => info.name),
    datasets: [
      {
        label: "income",
        data: TotalByType.map((info) => info.total),
      },
    ],
  });

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
      <Row className="my-5">
        <h5>Cash flow chart</h5>
        <p> Total amount made and due customers</p>
        <hr />

        <div className="graph">
          <Bar data={data} />
        </div>
      </Row>
      <Row className="my-5">
        <Col className="mt-2">
          <h5>Income by type</h5>
          <p>Total income across invoice types </p>
          <hr />
          <div className="dough-graph mt-3">
            <Doughnut data={totalData} />
          </div>
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
