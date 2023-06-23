import React from "react";
import {
  Badge,
  Button,
  Col,
  Container,
  Row,
  Form,
  Card,
  Dropdown,
  Table,
} from "react-bootstrap";
import { BsThreeDots } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const ViewCustomer = () => {
  const navigate = useNavigate();

  return (
    <Container className="main mt-5">
      <Row>
        <Col md={10}>
          <h2 className="mb-3">Priscy</h2>
        </Col>
        <Col md={2} className="d-flex flex-row">
          <div className="me-2">
            <Button
              variant="success"
              className="text-white"
              onClick={() =>
                navigate("/invoice-platform/invoices/create-invoice")
              }
            >
              New Invoice
            </Button>
          </div>
          <div>
            <Dropdown>
              <Dropdown.Toggle variant="light" id="dropdown-basic">
                <BsThreeDots roundedCircle />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item eventKey="2">Customer statement</Dropdown.Item>
                <Dropdown.Item eventKey="3">Edit</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item eventKey="4">Delete</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col className="my-5 me-4 content" md={4}>
          <div className="my-4">
            <h5>Created</h5>
            <p>
              <b>Priscy</b> was created on <b>24th Mar</b>
            </p>
          </div>

          <div className="my-4 ">
            <h5>Address</h5>
            <p>Location, city</p>
            <p>Ghana</p>
            <p>2334578654</p>
            <p>company@email.com</p>
          </div>
        </Col>
        <Col className="mb-3 my-5" md={7}>
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

          <div className="verticalline">
            <div className="mx-2 my-3">
              <h6>Invoices</h6>
            </div>
            <Table hover bordered size="sm" className="mx-2 my-3">
              <thead className="content">
                <tr>
                  <th>
                    <p>
                      <b>Due date</b>
                    </p>
                  </th>
                  <th>
                    <p>
                      <b>Status</b>
                    </p>
                  </th>
                  <th>
                    <p>
                      <b>Type</b>
                    </p>
                  </th>
                  <th>
                    <p>
                      <b>Amount</b>
                    </p>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <p>18 May 2023</p>
                  </td>
                  <td>
                    <p>Sent</p>
                  </td>
                  <td>
                    <p>Subscription</p>
                  </td>
                  <td>
                    <p>¢2400</p>
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ViewCustomer;
