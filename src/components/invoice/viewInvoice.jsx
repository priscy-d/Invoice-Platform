import React from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
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

const CreateInvoice = () => {
  const [viewed, setViewed] = useState(false);
  const { state } = useLocation();

  // console.log(state);
  // const handleViewed = () => {
  //   setViewed(true);
  // };

  return (
    <Container className="main mt-5">
      <Row>
        <Col md={10}>
          <h2 className="mb-3">
            Invoice Number: {state.invoice.invoiceNumber}
            <Badge className="mx-2 statusheight" pill text="danger" bg="light">
              <span className="status"></span>
            </Badge>
          </h2>
        </Col>
        <Col md={2} className="d-flex flex-row">
          <div className="me-2">
            <Button variant="success" className="text-white">
              Edit
            </Button>
          </div>
          <div>
            <Dropdown>
              <Dropdown.Toggle variant="light" id="dropdown-basic">
                <BsThreeDots roundedCircle />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item eventKey="2">Download as PDf</Dropdown.Item>
                <Dropdown.Item eventKey="3">Send Email</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item eventKey="4">Delete</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </Col>
      </Row>
      {/* {!viewed ? (
        <Row>
          <Col>
            <Button variant="primary" onClick={handleViewed}>
              Mark as Viewed
            </Button>
          </Col>
        </Row>
      ) : ( */}

      <Row className="mb-3">
        <Col className="my-5 me-4" md={5}>
          <div className="my-4">
            <h5>Created</h5>
            <p>
              Invoice for <b>{state.invoice.customerId.name}</b> was created on{""}{" "}
              <b>{state.invoice.createdDate}</b>
            </p>
            <hr />
          </div>

          <div className="my-4">
            <h5>Sent</h5>
            <p>
              Last invoice sent on <b>{state.invoice.createdDate}</b>
            </p>
            <hr />
          </div>

          <div className="my-4">
            <h5>Payment information</h5>
            <p>
              Last invoice sent on <b>{state.invoice.createdDate}</b>
            </p>
          </div>
        </Col>
        <Col className="mb-3" md={6}>
          <Card className="in-card invoice-card">
            <Row className="mx-3 mt-5">

              
              <Col>
              <h6>Title</h6>
                <p>{state.invoice.title}</p>
                <h6>subtitle</h6>
                <p>{state.invoice.subHeading}</p>
                <br></br>
              </Col>
              <Col className="d-flex flex-row-reverse">
                <Row>
                  <h5>
                    <b>Company</b>
                  </h5>
                  <p>
                    {state.invoice.customerId.country},
                    {state.invoice.customerId.city}
                  </p>
                  <p>{state.invoice.customerId.country}</p>
                  <p>{state.invoice.customerId.phoneNumber}</p>
                  <p>{state.invoice.customerId.email}</p>
                </Row>
              </Col>
              <hr />
            </Row>
            <Row className="mx-3 ">
              <Col>
                <Row>
                  <h6>Bill to </h6>
                  <p>
                    <b>{state.invoice.customerId.name}</b>
                  </p>
                  <p>
                    {" "}
                    {state.invoice.customerId.country},{state.invoice.customerId.city}
                  </p>
                  <p>{state.invoice.customerId.country}</p>
                  <p>{state.invoice.customerId.phoneNumber}</p>
                  <p>{state.invoice.customerId.email}</p>
                </Row>
              </Col>
              <Col className="d-flex flex-row-reverse mt-2">
                <Row>
                  <p>
                    <b>Invoice Number: </b>
                    {state.invoice.invoiceNumber}
                  </p>
                  <p>
                    <b>Invoice Date: </b>
                    {state.invoice.createdDate}
                  </p>
                  <p>
                    <b>Due Date: </b>
                    {state.invoice.dueDate}
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
                  {state.invoice.items?.map((item, index) => (
                    <tr key={index}>
                      <td>
                        <p>
                          <b>{item.productId.productName}</b>
                        </p>
                        <p>{item.description}</p>
                      </td>
                      <td>
                        <p>{item.quantity}</p>
                      </td>
                      <td>
                        {" "}
                        <p>{state.invoice.customerId.currency.currencyCode} {item.productId.unitPrice}</p>
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
                        <p>{state.invoice.customerId.currency.currencyCode} {state.invoice.subTotal}</p>
                      </td>
                      <td>
                        <p>{state.invoice.customerId.currency.currencyCode} {state.invoice.totalAmount}</p>
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

export default CreateInvoice;
