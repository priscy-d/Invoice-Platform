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
import { useLocation } from "react-router-dom";
import DropdownButton from "react-bootstrap/DropdownButton";

const ViewSubscription = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  return (
    <Container className="main mt-5">
      <Row>
        <Col md={9}>
          <h2 className="mb-3">Subscription:{state.subscriptionNumber}</h2>
        </Col>
        <Col md={3} className="d-flex flex-row">
          <div className="me-2">
            <Button
              variant="success"
              className="text-white"
              onClick={() =>
                navigate("/invoice-platform/subscriptions/create-subscription" )
              }
            >
              New Subscription
            </Button>
          </div>
          <div>
            <DropdownButton
              title={<BsThreeDots roundedCircle />}
              variant="light"
            >
              <Dropdown.Item eventKey="2">
                Update subscription status
              </Dropdown.Item>
              <Dropdown.Item eventKey="3">Edit</Dropdown.Item>
              <Dropdown.Item eventKey="2">Download as PDf</Dropdown.Item>
              <Dropdown.Item eventKey="3">Send Email</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item eventKey="4">Delete</Dropdown.Item>
            </DropdownButton>
          </div>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col className="my-5 me-4" md={5}>
          <div className="my-4">
            <h5>Created</h5>
            <p>
              Invoice for <b>{state.subscription.customerId.name}</b> was created on <b>{state.subscription.createdDate}</b>
            </p>
            <hr />
          </div>

          <div className="my-4">
            <h5>Sent</h5>
            <p>
              Last invoice sent on <b>{state.subscription.createdDate}</b>
            </p>
            <hr />
          </div>

          <div className="my-4">
            <h5>Payment information</h5>
            <p>
              Last invoice sent on <b>{state. subscription.createdDate}</b>
            </p>
          </div>
        </Col>
        <Col className="mb-3" md={6}>
          <Card className="in-card invoice-card">
            <Row className="mx-3 mt-5">
              <Col>
                <h6> {state.subtitle}</h6>
              </Col>
              <Col className="d-flex flex-row-reverse">
                <Row>
                  <h5>
                    <b>Company</b>
                  </h5>
                  <p>{state.subscription.customerId.country}, {state.subscription.customerId.city}</p>
                  <p>{state.subscription.customerId.country}</p>
                  <p>{state.subscription.customerId.phoneNumber}</p>
                  <p>{state.subscription.customerId.country}</p>
                </Row>
              </Col>
              <hr />
            </Row>
            <Row className="mx-3 ">
              <Col>
                <Row>
                  <h6>Bill to </h6>
                  <p>
                    <b>{state.subscription.customerId.name}</b>
                  </p>
              <p>{state.subscription.customerId.country}, {state.subscription.customerId.city}</p>
                  
                  <p>{state.subscription.customerId.phoneNumber}</p>
                  <p>{state.subscription.customerId.email}</p>
                </Row>
              </Col>
              <Col className="d-flex flex-row-reverse mt-2">
                <Row>
                  <p>
                    <b>Invoice Number: </b>{state.subscription.subscriptionNumber}
                  </p>
                  <p>
                    <b>Invoice Date: </b>{state.subscription.createdDate}
                  </p>
                  <p>
                    <b>Due Date: </b>{state.subscription.endDate}
                  </p>
                </Row>
              </Col>
            </Row>

            <Row className="mx-3 my-4 ">
              <Table>
                <thead >
                  <tr className="tablehead text-white">
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
                {state.subscription.items?.map((item, index) => (
                  <tr key={index}>
                    <td>
                      <p>
                        <b>{item.productId.productName}</b>
                       
                      </p>
                      
                    </td>
                    <td>
                      <p>{item.quantity}</p>
                    </td>
                    <td>
                      {" "}
                      <p>{item.productId.unitPrice}</p>
                    </td>
                  </tr>
                  ))}
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
                        <p>{state.subscription.customerId.currency.currencyCode}{state.subscription.subTotal}</p>
                      </td>
                      <td>
                        <p>{state.subscription.customerId.currency.currencyCode} {state.subscription.totalAmount}</p>
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
