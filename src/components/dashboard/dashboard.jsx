import React, { useEffect, useState, useRef } from "react";
import { Col, Container, Row, Form, Card } from "react-bootstrap";
import { Bar, Doughnut, Line, PolarArea, Pie } from "react-chartjs-2";
import { Data, TotalByType, transactions, Status } from "../../data";
import { Chart as ChartJS } from "chart.js/auto";
import { init } from "../../Keycloak";

const Dashboard = () => {
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const fetchCurrentDate = () => {
      const date = new Date();
      const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      };
      const formattedDate = date.toLocaleDateString(undefined, options);
      setCurrentDate(formattedDate);
    };

    fetchCurrentDate();
  }, []);

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
  let isRun = useRef(false);
  useEffect(() => {
    if (isRun.current) return;
    isRun.current = true;
    init();
  }, []);

  const [status, setStatus] = useState(Status);
  const [someData, setSomeData] = useState({
    datasets: [
      {
        label: "income",
        data: TotalByType.map((info) => info.total),
      },
    ],
  });
  const [cardItem, setCardItem] = useState(transactions);
  return (
    <Container className="main mt-5">
      <Row>
        <Col md={8}>
          <h2 className="mb-3">Dashboard</h2>
        </Col>
        <Col>
          <Form.Group>
            {/* <div className="d-flex flex-row">
              <Form.Control
                className=" me-2"
                type="date"
                placeholder="start date"
                size="sm"
                id="date"
              />

              <Form.Control
                type="date"
                placeholder={currentDate}
                size="sm"
                id="date"
                
              />
            </div> */}
            

            {currentDate}
          </Form.Group>
        </Col>
      </Row>

      <Row className="my-3">
        {cardItem.map((item) => {
          const { name, description, amount } = item;
          return (
            <Col>
              <Card className="p-3 bg-light border-light">
                <Row>
                  <Col md={9}>
                    <h5>{name}</h5>
                    <p>{description}</p>
                    <h4>{amount}</h4>
                  </Col>
                  <Col md={3}>
                    <div>
                      <Doughnut data={someData} />
                    </div>
                  </Col>
                </Row>
              </Card>
            </Col>
          );
        })}
      </Row>
      <Row>
        <Col md={6}>
          <Row className="my-5 ">
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
        </Col>
        <Col md={6}>
          <Row className="my-5">
            <h5>Customer acquisition</h5>
            <p> Customer acquisition flow per month</p>
            <hr />
            <Col md={10}>
              <div className="graph">
                <Line data={data} />
              </div>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row className="my-3">
        {status.map((item) => {
          const { name, description, amount } = item;
          return (
            <Col>
              <Card className="p-3 bg-light border-light">
                <Row>
                  <Col md={9}>
                    <h5>{name}</h5>
                    <p>{description}</p>
                    <h4>{amount}</h4>
                  </Col>
                  <Col md={3}>
                    <div>
                      <Doughnut data={someData} />
                    </div>
                  </Col>
                </Row>
              </Card>
            </Col>
          );
        })}
      </Row>

      <Row className="my-5">
        <Col md={6} className="mt-2">
          <h5>Income by type</h5>
          <p>Total income across invoice types </p>
          <hr />
          <div className="dough-graph mt-3">
            <Doughnut data={totalData} />
          </div>
        </Col>
        <Col md={6} className="mt-2">
          <h5>Subcriptions</h5>
          <p>Actiivities across recurring products</p>
          <hr />
          <div className="dough-graph mt-3">
            <PolarArea data={totalData} />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
