import React, { useState } from "react";
import { Button, Col, Container, Row, Form } from "react-bootstrap";
import CreatableSelect from "react-select/creatable";
import { countryOptions, currencyOptions } from "../../data";
import { useNavigate } from "react-router-dom";

const CreateCustomer = () => {
  const navigate = useNavigate();

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [city, setCity] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [taxNumber, setTaxNumber] = useState();
  const [currency, setCurrency] = useState();
  const [country, setCountry] = useState();

  const createCustomer = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/customers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          email: email,
          city: city,
          phoneNumber: phoneNumber,
          taxNumber: taxNumber,
          currency: currency,
          country: country,
        }),
      });
      const data = await response.json();
      // Upload();
      if (data.message === "Success") {
        navigate("/customers");
      }

      console.log("Success:", data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <Container className="main mt-5">
      <Form onSubmit={createCustomer}>
        <Row>
          <Col md={8}>
            <h2 className="mb-3">New Customer</h2>
          </Col>
        </Row>
        <Row className="my-3">
          <Col md={10} className="mt-2">
            <h5>General</h5>
            <p>Customer personal information</p>
            <hr />
            <Row className="mb-3">
              <Col className="mb-3" md={6}>
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    className="form-fields"
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col className="mb-3" md={6}>
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    className="form-fields"
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>
              </Col>

              <Col className="mb-3" md={6}>
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Phone</Form.Label>
                  <Form.Control
                    className="form-fields"
                    type="phone"
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </Form.Group>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="my-3">
          <Col md={10} className="mt-2">
            <h5>Billing</h5>
            <p>Customer account information</p>
            <hr />
            <Row className="mb-3">
              <Form.Group
                as={Col}
                controlId="formGridPassword"
                className="my-3">
                <Form.Label>Tax Number</Form.Label>
                <Form.Control
                  className="form-fields"
                  type="text"
                  onChange={(e) => setTaxNumber(e.target.value)}
                />
              </Form.Group>

              <Form.Group
                as={Col}
                controlId="formGridPassword"
                className="my-3">
                <Form.Label>Currency</Form.Label>
                <CreatableSelect isClearable options={currencyOptions} />
              </Form.Group>
            </Row>
          </Col>
        </Row>
        <Row className="my-3">
          <Col md={10} className="mt-2">
            <h5>Address</h5>
            <p>Address information of the customer</p>
            <hr />
            <Row className="mb-3">
              <Form.Group
                as={Col}
                controlId="formGridPassword"
                className="my-3">
                <Form.Label>Country</Form.Label>
                <CreatableSelect isClearable options={countryOptions} />
              </Form.Group>

              <Form.Group
                as={Col}
                controlId="formGridPassword"
                className="my-3">
                <Form.Label>City</Form.Label>
                <Form.Control
                  className="form-fields"
                  type="text"
                  onChange={(e) => setCity(e.target.value)}
                />
              </Form.Group>
            </Row>
          </Col>
        </Row>
        <Row className="my-5">
          <Col md={10} className="d-flex flex-row-reverse">
            <Button variant="success" type="submit" className="text-white">
              Submit
            </Button>
            <Button
              variant="outline-light"
              type="button"
              className="me-3 text-dark">
              Preview
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default CreateCustomer;
