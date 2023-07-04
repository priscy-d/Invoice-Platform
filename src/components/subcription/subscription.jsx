import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row, Table, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import MaterialCheckbox from "@mui/material/Checkbox";
import Pagination from "../pagination";


const Subscription = () => {
  const navigate = useNavigate();

  const [subscriptions, setSubscriptions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/subscriptions")
      .then((response) => response.json())
      .then((data) => {
        const sortedSubscriptions = data?.data.sort((a, b) => {
          return new Date(b.createdDate) - new Date(a.createdDate);
        });
        setSubscriptions(sortedSubscriptions);
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  }, []);

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredSubscriptions, setFilteredSubscriptions] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(15);
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const data = filteredSubscriptions?.slice(
    indexOfFirstRecord,
    indexOfLastRecord
  );
  console.log("data", data);
  const nPages = filteredSubscriptions
    ? Math.ceil(filteredSubscriptions?.length / recordsPerPage)
    : 1;

  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    const filtered = subscriptions.filter((subscription) => {
      const items = subscription.items
        ? subscription.items.map((it) => it.productId.productName.toLowerCase())
        : [];
      const subscriptionsNumber = subscription.subscriptionsNumber
        ? subscription.subscriptionsNumber.toLowerCase()
        : "";
      const startDate = subscription.startDate
        ? subscription.startDate.toLowerCase()
        : "";
      const endDate = subscription.endDate ? subscription.endDate.toLowerCase() : "";
      const customerName = subscription.customerId
        ? subscription.customerId.name.toLowerCase()
        : "";
  
      return (
        items.some((itemName) => itemName.includes(query.toLowerCase())) ||
        subscriptionsNumber.includes(query.toLowerCase()) ||
        startDate.includes(query.toLowerCase()) ||
        endDate.includes(query.toLowerCase()) ||
        customerName.includes(query.toLowerCase()) // Include search by customer name
      );
    });
    setFilteredSubscriptions(filtered);
  };
  
  useEffect(() => {
    setFilteredSubscriptions(subscriptions || []);
  }, [subscriptions]);
  
  
  useEffect(() => {
    setFilteredSubscriptions(subscriptions || []);
  }, [subscriptions]);
  

  const handleSubmit = () => {
    navigate("/invoice-platform/subscriptions/create-subscription");
  };
  return (
    <Container className="mt-5">
      <Row>
        <Col md={10}>
          <h2>Subscriptions</h2>
        </Col>
        <Col md={2} ClassName="d-flex flex-row-reverse">
          <Button variant="success" onClick={handleSubmit}>
            New subscription
          </Button>
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
            <th>Customer</th>
            <th>Items</th>
            <th>subscriptions Number</th>
            <th>Start Date</th>
            <th>End Date</th>
          </tr>
        </thead>
        <tbody>
  {data?.map((subscription) => (
    <tr key={subscription.id}>
      <td>
        <MaterialCheckbox size="small" />
      </td>
      <td
        onClick={() =>
          navigate("/invoice-platform/subscriptions/view-subscription")
        }
      >
        {subscription.customerId.name}
      </td>
      <td>
        {subscription.items.map((item, index) => (
          <React.Fragment key={item.productId.id}>
            {item.productId.productName}
            {index !== subscription.items.length - 1 && ", "}
          </React.Fragment>
        ))}
      </td>
      <td>{subscription.subscriptionNumber}</td>
      <td>{subscription.startDate}</td>
      <td>{subscription.endDate}</td>
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

export default Subscription;
