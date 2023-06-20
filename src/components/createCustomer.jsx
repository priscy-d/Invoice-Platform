import React, { useState } from "react";
import {  toast } from 'react-toastify';
import {
  Button,
  Col,
  Container,
  Row,
  Form,
  DropdownButton,
} from "react-bootstrap";
import { BASE_URL } from "../constants/BASE_URL";
import { Countries } from "../Utils/countries";
import DropdownItem from "react-bootstrap/esm/DropdownItem";
import { Link, useNavigate } from "react-router-dom";

const CreateCustomer = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [taxNumber, setTaxNumber] = useState("");
  const [country, setCountry] = useState(Countries[0]);
  const [currency, setCurrency] = useState(Countries[0].currencyType);
  const [countryName, setCountryName] = useState(Countries[0].name);
  const [city, setCity] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate()
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    
    e.preventDefault();
    const validationErrors = {};

    if (!name) {
      validationErrors.name = "Name is required.";
    }

    if (!email) {
      validationErrors.email = "Email is required.";
    } else if (!isValidEmail(email)) {
      validationErrors.email = "Invalid email format.";
    }

    if (!phone) {
      validationErrors.phone = "Phone is required.";

    }

    if (!taxNumber) {
      validationErrors.taxNumber = "tax Number is required.";
    }
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setName("");
    setEmail("");
    setPhone("");
    setTaxNumber("");
    setErrors({});
    try {
      const response = await BASE_URL.post("/customers", {
        name: name,
        email: email,
        phoneNumber: phone,
        taxNumber: taxNumber,
        currency: country.currencyType,
        country: country.name,
        city: city,
      });
      console.log(response)
      if (response.data.message === "Success") {
        toast.success("Customer Created", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 3000
        })    
      }
      
      navigate('/invoice-platform/customers')
      
    } catch (error) {
      console.log(error);
    }
    
  };

  return (
    <Container className="main mt-5">
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
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                {errors.name && <span style={{ color: 'red', fontWeight: 'bold' }}>{errors.name}</span>}
              </Form.Group>
            </Col>
            <div className="mb-3">
              <Form.Group as={Col} md={6} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  className="form-fields"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email && <span style={{ color: 'red', fontWeight: 'bold' }}>{errors.email}</span>}
              </Form.Group>
            </div>

            <div className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail" md={6}>
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  className="form-fields"
                  type="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                {errors.phone && <span style={{ color: 'red', fontWeight: 'bold' }}>{errors.phone}</span>}
              </Form.Group>
            </div>
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
              className="my-3"
              md={6}>
              <Form.Label>Tax Number</Form.Label>
              <Form.Control
                className="form-fields"
                type="text"
                value={taxNumber}
                onChange={(e) => setTaxNumber(e.target.value)}
              />
              {errors.taxNumber && <span style={{ color: 'red', fontWeight: 'bold' }}>{errors.taxNumber}</span>}
            </Form.Group>
            <Form.Label>Choose Currency</Form.Label>
            <Button className="w-auto" disabled variant="outline-light">
              {country.currencyType}value{currency}
            </Button>
          </Row>
        </Col>
      </Row>
      <Row className="my-3">
        <Col md={10} className="mt-2">
          <h5>Address</h5>
          <p>Address information of the customer</p>
          <hr />
          <Row className="mb-3">
            <label>choose country</label>
            <DropdownButton
              className="w=25"
              variant="outline-light"
              title={countryName}>
              {Countries.map((country, key) => {
                return (
                  <DropdownItem
                    key={key}
                    onClick={() => {
                      setCountryName(country.name);
                      setCountry(country);
                      setCurrency(country.currencyType);
                    }}>
                    {country.name}
                  </DropdownItem>
                );
              })}
            </DropdownButton>

            <Form.Group
              as={Col}
              controlId="formGridPassword"
              className="my-3"
              md={6}>
              <Form.Label>City</Form.Label>
              <Form.Control
                className="form-fields"
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </Form.Group>
          </Row>
        </Col>
      </Row>
      <Row className="my-5">
        <Col md={10} className="d-flex flex-row-reverse">
          <Button
            variant="success"
            className="text-white"
            onClick={handleSubmit}>
            Submit
          </Button>
          <Link to="" />
        </Col>
      </Row>
    </Container>
  );
};

export default CreateCustomer;
