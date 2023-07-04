import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row, Table, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";



const CurrencySetting = () => {
  const[currencies, setCurrencies] = useState([]);

  useEffect(() => {
    const fetchCurrencies = async () => {
      try {
        const response = await axios.get("http://localhost:8080/currency");
        const data= response.data;
        setCurrencies(data?.data);
        
      } catch (error) {
        console.log(error);
        
      }
    }
    fetchCurrencies()
  },[])

  
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/invoice-platform/settings/new-currency");
  };
  return (
    <Container className="mt-5">
      <Row>
        <Col md={10}>
          <h2>Currencies</h2>
        </Col>
        <Col md={2} ClassName="d-flex flex-row-reverse">
          <Button variant="success" onClick={handleSubmit}>
            New currency
          </Button>
        </Col>
      </Row>
      <Form.Control
        type="text"
        placeholder="search"
        className="my-4 search-input"
      ></Form.Control>
      <Table hover bordered size="sm">
        <thead className="table-light">
          <tr>
            <th> Currency Name</th>
            <th>Exchange rate</th>
            <th> Currency Code</th>
          </tr>
        </thead>
        <tbody>
        {currencies.map((currency) => (
            <tr
              key={currency.id}
              onClick={() => navigate("/invoice-platform/settings/new-currency")}
            >
              <td>{currency.currencyName}</td>
              <td>
                <p>{currency.exchangeRate}</p>
              </td>
              <td>
                <p>{currency.currencyCode}</p>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default CurrencySetting;
