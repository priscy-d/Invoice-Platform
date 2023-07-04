import React from "react";
import { Button, Col, Container, Row, Table, Form, Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import MaterialCheckbox from "@mui/material/Checkbox";
import { useEffect, useState } from "react";
import Pagination from "../pagination";

const Invoices = () => {
  const navigate = useNavigate();

  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/invoices")
      .then((response) => response.json())
      .then((data) => {
        const sortedInvoices = data?.data.sort((a, b) => {
          return new Date(b.createdDate) - new Date(a.createdDate);
        });
        setInvoices(sortedInvoices);
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  }, []);

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredInvoices, setFilteredInvoices] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(15);
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const data = filteredInvoices?.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages = filteredInvoices
    ? Math.ceil(filteredInvoices?.length / recordsPerPage)
    : 1;

  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    const filtered = invoices.filter(
      (invoice) =>
        (invoice.title &&
          invoice.title.toLowerCase().includes(query.toLowerCase())) ||
        (invoice.status &&
          invoice.status.toLowerCase().includes(query.toLowerCase())) ||
        (invoice.account &&
          invoice.account.toLowerCase().includes(query.toLowerCase())) ||
        (invoice.product &&
          invoice.product.toLowerCase().includes(query.toLowerCase())) ||
        (invoice.amount &&
          invoice.amount.toLowerCase().includes(query.toLowerCase()))
    );
    setFilteredInvoices(filtered);
  };
  useEffect(() => {
    setFilteredInvoices(invoices || []);
  }, [invoices]);

  const handleSubmit = () => {
    navigate("/invoice-platform/invoices/create-invoice");
  };

  return (
    <Container className="mt-5">
      <Row className="mb-2">
        <Col md={10}>
          <h2>Invoices</h2>
        </Col>
        <Col md={2} ClassName="d-flex flex-row-reverse">
          <Button variant="success" onClick={handleSubmit}>
            New Invoice
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
        placeholder="search"
        value={searchQuery}
        onChange={handleSearchChange}
        className="my-4 search-input"></Form.Control>
      <Table hover bordered size="sm">
        <thead className="table-light">
          <tr>
            <th>
              <MaterialCheckbox size="small" />
            </th>
            <th>Invoice Number</th>
            <th>Title</th>
            <th>Due date</th>
            <th>Status</th>
            <th>Customer</th>
            
          </tr>
        </thead>
        <tbody>
          {data?.map((invoice) => (
            <tr
              key={invoice.id}
              onClick={() =>
                navigate("/invoice-platform/invoices/view-invoice")
              }>
              <td>
                <MaterialCheckbox size="small" />
              </td>
              <td>{invoice.invoiceNumber}</td>
              <td>{invoice.title}</td>
              <td>{invoice.dueDate}</td>
              <td>{invoice.status}</td>
              <td>{invoice.customerId.name}</td>
              
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

export default Invoices;
