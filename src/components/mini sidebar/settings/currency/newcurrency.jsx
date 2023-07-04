import React, { useState } from "react";
import { Button, Col, Container, Row, Form, Table } from "react-bootstrap";
import { BASE_URL } from "../../../../constants/BASE_URL";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const NewCurrency = () => {
  const [currencyName, setCurrencyName] = useState("");
  const [country, setCountry] = useState("");
  const [currencyCode, setCurrencyCode] = useState("");
  const [exchangeRate, setExchangeRate] = useState("");
  const [isSubmitting, setIsSubmitting] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsSubmitting(true);

      const response = await BASE_URL.post("/currency", {
        currencyName,
        country,
        currencyCode,
        exchangeRate,
      });

      console.log("product", response);

      if (response.data.message === "Success") {
        toast.success("Currency Created", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 3000,
        });

        // Clear form fields
        setCurrencyName("");
        setCountry("");
        setCurrencyCode("");
        setExchangeRate("");

        navigate("/invoice-platform/settings/currencies");
      } else {
        toast.error("Failed to create currency", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 3000,
        });
      }
    } catch (error) {
      console.log(error);

      // Display an error message to the user
      toast.error("An error occurred. Please try again later.", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Container className="main mt-5">
      <Row>
        <Col md={8}>
          <h2 className="mb-3">New Currency</h2>
        </Col>
      </Row>

      <Row className="my-3">
        <Col md={10} className="mt-2">
          <h5>General</h5>
          <p>Add a new currency to existing curencies</p>
          <hr />
          <Row className="mb-3">
            <Form.Group as={Col} md={6} className="my-3">
              <Form.Label>Currency Name</Form.Label>
              <Form.Control
                className="me-2"
                type="text"
                value={currencyName}
                onChange={(e) => setCurrencyName(e.target.value)}
              />
            </Form.Group>
            <Form.Group as={Col} md={6} className="my-3">
              <Form.Label>Exchange Rate</Form.Label>
              <Form.Control
                className="me-2"
                type="text"
                value={exchangeRate}
                onChange={(e) => setExchangeRate(e.target.value)}
              />
            </Form.Group>
            <Form.Group as={Col} md={6} className="my-3">
              <Form.Label>Currency Code</Form.Label>
              <Form.Control
                className="me-2"
                type="text"
                value={currencyCode}
                onChange={(e) => setCurrencyCode(e.target.value)}
              />
            </Form.Group>
            <Form.Group as={Col} md={6} className="my-3">
              <Form.Label>Country</Form.Label>
              <Form.Control
                className="me-2"
                type="text"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              />
            </Form.Group>
          </Row>
        </Col>
      </Row>

      <Row>
        <Col md={10} className="d-flex flex-row-reverse">
          <Button
            variant="success"
            type="submit"
            className="text-white"
            onClick={handleSubmit}>
            Create currency
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default NewCurrency;
