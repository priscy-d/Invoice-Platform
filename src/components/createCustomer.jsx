import axios from "axios";
import React, {  useState } from "react";
import { Button, Col, Container, Row, Form } from "react-bootstrap";

const CreateCustomer = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [taxNumber, setTaxNumber] = useState('');
  const [currency, setCurrency] = useState('');
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');

  const handleSubmit = async(e) =>{
    e.preventDefault()
    try {
      const response = await axios.post('http://0.0.0.0:8081/customers',{
      name:name,
      email:email,
      phone:phone,
      taxNumber: taxNumber,
      currency: currency,
      country:country,
      city: city,
    })
  
   
      
    } catch (error) {
      console.log(error);
      
    }
  }
  


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
                <Form.Control className="form-fields" type="text" value={name} onChange={(e) => setName(e.target.value)}/>
              </Form.Group>
            </Col>
            <div className="mb-3">
              <Form.Group as={Col} md={6} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control className="form-fields" type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
              </Form.Group>
            </div>

            <div className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail" md={6}>
                <Form.Label>Phone</Form.Label>
                <Form.Control className="form-fields" type="phone" value={phone} onChange={(e) => setPhone(e.target.value)}/>
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
            <Form.Group as={Col} controlId="formGridPassword" className="my-3">
              <Form.Label>Tax Number</Form.Label>
              <Form.Control className="form-fields" type="text" value={taxNumber} onChange={(e) => setTaxNumber(e.target.value)}/>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword" className="my-3">
              <Form.Label>Currency</Form.Label>
              <Form.Control className="form-fields" type="text" value={currency} onChange={(e) => setCurrency(e.target.value)}/>
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
            <Form.Group as={Col} controlId="formGridPassword" className="my-3">
              <Form.Label>Country</Form.Label>
              <Form.Control className="form-fields" type="text" value={country} onChange={(e) => setCountry(e.target.value)} />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword" className="my-3">
              <Form.Label>City</Form.Label>
              <Form.Control className="form-fields" type="text" value={city} onChange={(e) => setCity(e.target.value)}/>
            </Form.Group>
          </Row>
        </Col>
      </Row>
      <Row className="my-5">
        <Col md={10} className="d-flex flex-row-reverse">
          <Button variant="success" className="text-white" onClick={handleSubmit}>
            Submit
          </Button>
          <Button
            variant="outline-light"
            type="button"
            className="me-3 text-dark" >
            Preview
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default CreateCustomer;
