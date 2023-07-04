import React, { useEffect, useState } from "react";
import {
  Button,
  Col,
  Container,
  Row,
  Form,
  DropdownButton,
} from "react-bootstrap";
import CreatableSelect from "react-select/creatable";
import { countryOptions, currencyOptions } from "../../data";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../constants/BASE_URL";
import { toast } from "react-toastify";
import DropdownItem from "react-bootstrap/esm/DropdownItem";

const CreateCustomer = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [taxNumber, setTaxNumber] = useState("");
  const [country, setCountry] = useState("");
  const [currency, setCurrency] = useState("");
  const [city, setCity] = useState("");
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return emailRegex.test(email);
  };
  const [currencies, setCurrencies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/currency")
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        setCurrencies(data?.data);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  }, []);

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
    setCurrency("");
    setEmail("");
    setPhone("");
    setTaxNumber("");
    setCountry("");
    setCity("");
    setErrors({});
    try {
      const response = await BASE_URL.post("/customers", {
        name: name,
        email: email,
        phoneNumber: phone,
        taxNumber: taxNumber,
        currency: currency,
        country: country,
        city: city,
      });
      console.log(response);
      
      if (response.data.message === "Success") {
        toast.success("Customer Created successfully", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 3000,
        });
      } else {
        toast.success("Failed to create customer", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 3000,
          type: "error",
        });
      }

      navigate("/invoice-platform/customers");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container className="main mt-5">
      <Form>
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
                  {errors.name && (
                    <span style={{ color: "red", fontWeight: "bold" }}>
                      {errors.name}
                    </span>
                  )}
                </Form.Group>
              </Col>
              <Col className="mb-3" md={3}>
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    className="form-fields"
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  {errors.email && (
                    <span style={{ color: "red", fontWeight: "bold" }}>
                      {errors.email}
                    </span>
                  )}
                </Form.Group>
              </Col>

              <Col className="mb-3" md={3}>
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Phone</Form.Label>
                  <Form.Control
                    className="form-fields"
                    type="phone"
                    onChange={(e) => setPhone(e.target.value)}
                  />
                  {errors.phone && (
                    <span style={{ color: "red", fontWeight: "bold" }}>
                      {errors.phone}
                    </span>
                  )}
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
                {errors.taxNumber && (
                  <span style={{ color: "red", fontWeight: "bold" }}>
                    {errors.taxNumber}
                  </span>
                )}
              </Form.Group>

              <Form.Group
                as={Col}
                controlId="formGridPassword"
                className="my-3">
                <Form.Label>Currency</Form.Label>
                <Form.Select onChange={(e) => setCurrency(e.target.value)}>
                  {currencies?.map((currency) => {
                    return (
                      <option value={currency?.id} key={currency.id}>
                        {currency?.currencyName}
                      </option>
                    );
                  })}
                </Form.Select>
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
                <Form.Control
                  className="form-fields"
                  type="text"
                  onChange={(e) => setCountry(e.target.value)}
                />
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
        <Row className="my-3">
          <Col md={10} className="d-flex flex-row-reverse">
            <Button
              variant="success"
              type="submit"
              className="text-white"
              onClick={handleSubmit}>
              Submit
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default CreateCustomer;
