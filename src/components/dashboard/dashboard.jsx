import React, { useState } from "react";
import { Col, Container, Row, Form, Card } from "react-bootstrap";
import { Bar, Doughnut } from "react-chartjs-2";
import { Data, TotalByType } from "../../data";
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
                className=" me-2"
                type="date"
                placeholder="start date"
                size="sm"
                id="date"
              />

              <Form.Control
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
          <Card className="p-3 bg-light border-light">
            <h5>Receivables</h5>
            <p>Amount yet to be paid by customers</p>
            <h4>¢2400</h4>
          </Card>
        </Col>
        <Col className="mt-2">
          <Card className="p-3 bg-info border-info">
            <h5>Paid</h5>
            <p>Total amount paid by customers</p>
            <h4>¢2400</h4>
          </Card>
        </Col>
        <Col className="mt-2">
          <Card className="p-3 bg-success border-success">
            <h5>Account balance</h5>
            <p>Total amount in bank account</p>
            <h4>¢2400</h4>
          </Card>
        </Col>
      </Row>
      <Row className="my-5">
        <h5>Cash flow chart</h5>
        <p> Total amount made and due customers</p>
        <hr />
        <Col md={10}>
          <div className="graph">
            <Bar data={data} />
          </div>
        </Col>
        <Col className="my-5">
          <div>
            <h5>Income</h5>
            <p>
              <b>¢2400</b>
            </p>
          </div>
          <div>
            <h5>Unpaid</h5>
            <p>
              {" "}
              <b>¢2400</b>
            </p>
          </div>
        </Col>
      </Row>
      <Row className="my-5">
        <Col md={8} className="mt-2">
          <h5>Income by type</h5>
          <p>Total income across invoice types </p>
          <hr />
          <div className="dough-graph mt-3">
            <Doughnut data={totalData} />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
