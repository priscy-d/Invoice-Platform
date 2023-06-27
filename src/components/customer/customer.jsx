import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row, Table, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Pagination from "../pagination";

const Customers = () => {
  const navigate = useNavigate();

  // "http://localhost:8080/customers"

  const handleSubmit = () => {
    navigate("/invoice-platform/customers/create-customer");
  };
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/customers")
      .then((response) => response.json())
      .then((data) => {
        const sortedCustomers = data?.data.sort((a, b) => {
          return new Date(b.createdDate) - new Date(a.createdDate);
        });
        setCustomers(sortedCustomers);
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  }, []);

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredCustomers, setFilteredCustomers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(18);
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const data = filteredCustomers?.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages = filteredCustomers
    ? Math.ceil(filteredCustomers?.length / recordsPerPage)
    : 1;

  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    const filtered = customers.filter(
      (customer) =>
        (customer.name &&
          customer.name.toLowerCase().includes(query.toLowerCase())) ||
        (customer.email &&
          customer.email.toLowerCase().includes(query.toLowerCase())) ||
        (customer.account &&
          customer.account.toLowerCase().includes(query.toLowerCase())) ||
        (customer.idNumber &&
          customer.idNumber.toLowerCase().includes(query.toLowerCase())) ||
        (customer.accountInfo &&
          customer.accountInfo.toLowerCase().includes(query.toLowerCase()))
    );
    setFilteredCustomers(filtered);
  };
  useEffect(() => {
    setFilteredCustomers(customers || []);
  }, [customers]);

  return (
    <Container className="mt-5">
      <Row>
        <Col md={10}>
          <h2>Customers</h2>
        </Col>
        <Col md={2} ClassName="d-flex flex-row-reverse">
          <Button variant="success" onClick={handleSubmit}>
            New customer
          </Button>
        </Col>
      </Row>
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
      <Form.Control
        type="text"
        placeholder="search customers"
        value={searchQuery}
        onChange={handleSearchChange}
        className="my-4 search-input"></Form.Control>
      <Table hover bordered size="sm">
        <thead className="table-light">
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Account info</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((customer) => (
            <tr key={customer.id}>
              <td>{customer.name}</td>
              <td>{customer.email}</td>
              <td>
                {customer.country}: {customer.city}
              </td>

              <td>{customer.accountInfo}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Pagination
        nPages={nPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </Container>
  );
};

export default Customers;
