import React from "react";
import {
  
  Button,
  Col,
  Container,
  Row,
  
  Card,
  Dropdown,
  Table,
} from "react-bootstrap";
import { BsThreeDots } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const ViewSubscription = () => {
  const navigate = useNavigate();

  return (
    <Container className="main mt-5">
      <Row>
        <Col md={9}>
          <h2 className="mb-3">Subscription:SUB-001</h2>
        </Col>
        <Col md={3} className="d-flex flex-row">
          <div className="me-2">
            <Button
              variant="success"
              className="text-white"
              onClick={() =>
                navigate("/invoice-platform/subscriptions/create-subscription")
              }
            >
              New Subscription
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
        <Col className="my-5 me-4" md={5}>
          <div className="my-4">
            <h5>Created</h5>
            <p>
              Invoice for <b>customer</b> was created on <b>24th Mar</b>
            </p>
            <hr />
          </div>

          <div className="my-4">
            <h5>Sent</h5>
            <p>
              Last invoice sent on <b>24th Mar</b>
            </p>
            <hr />
          </div>

          <div className="my-4">
            <h5>Payment information</h5>
            <p>
              Last invoice sent on <b>24th Mar</b>
            </p>
          </div>
        </Col>
        <Col className="mb-3" md={6}>
          <Card className="in-card invoice-card">
            <Row className="mx-3 mt-5">
              <Col>
                <h6>subtitle</h6>
              </Col>
              <Col className="d-flex flex-row-reverse">
                <Row>
                  <h5>
                    <b>Company</b>
                  </h5>
                  <p>Location, city</p>
                  <p>Ghana</p>
                  <p>2334578654</p>
                  <p>company@email.com</p>
                </Row>
              </Col>
              <hr />
            </Row>
            <Row className="mx-3 ">
              <Col>
                <Row>
                  <h6>Bill to </h6>
                  <p>
                    <b>Customer name</b>
                  </p>
                  <p>Location, city</p>
                  <p>Ghana</p>
                  <p>2334578654</p>
                  <p>company@email.com</p>
                </Row>
              </Col>
              <Col className="d-flex flex-row-reverse mt-2">
                <Row>
                  <p>
                    <b>Invoice Number: </b>INV-001
                  </p>
                  <p>
                    <b>Invoice Date: </b>24-Mar-2023
                  </p>
                  <p>
                    <b>Due Date: </b>01-Jan-2024
                  </p>
                </Row>
              </Col>
            </Row>

            <Row className="mx-3 my-4 ">
              <Table>
                <thead className="bg-dark text-white">
                  <tr>
                    <td>
                      <p>
                        <b>Item</b>
                      </p>
                    </td>
                    <td>
                      <p>
                        <b>Quantity</b>
                      </p>
                    </td>
                    <td>
                      <p>
                        <b>Price</b>
                      </p>
                    </td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <p>
                        <b>Item name</b>
                      </p>
                      <p>It's description</p>
                    </td>
                    <td>
                      <p>2</p>
                    </td>
                    <td>
                      {" "}
                      <p>5</p>
                    </td>
                  </tr>
                </tbody>
              </Table>

              <Col md={4} className="d-flex justify-content-end">
                <Table>
                  <thead>
                    <tr>
                      <td>
                        <p>Sub-total</p>
                      </td>
                      <td>
                        <p>Total</p>
                      </td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <p>500</p>
                      </td>
                      <td>
                        <p>600</p>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ViewSubscription;
