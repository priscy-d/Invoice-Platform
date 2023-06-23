import React, { useState, useEffect } from "react";
import { Button, Col, Container, Row, Table, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Pagination from "../pagination";



const Items = () => {
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/invoice-platform/products/create-product");
  };

  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8082/products")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setProducts(data?.data);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  }, []);

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(15);
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const data = filteredProducts?.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages = filteredProducts? Math.ceil(filteredProducts?.length / recordsPerPage) : 1;

  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    const filtered = products.filter(
      (product) =>
        (product.productName &&
          product.productName.toLowerCase().includes(query.toLowerCase())) ||
        (product.isRecurring &&
          product.isRecurring.toLowerCase().includes(query.toLowerCase())) ||
        (product.description &&
          product.description.toLowerCase().includes(query.toLowerCase())) ||
        (product.idNumber &&
          product.idNumber.toLowerCase().includes(query.toLowerCase())) 
        
    );
    setFilteredProducts(filtered);
  };
  useEffect(() => {
    setFilteredProducts(products || []);
  }, [products]);


  return (
    <Container className="mt-5">
      <Row>
        <Col md={10}>
          <h2>Product</h2>
        </Col>
        <Col md={2} ClassName="d-flex flex-row-reverse">
          <Button variant="success" onClick={handleSubmit} >
            New product
          </Button>
        </Col>
      </Row>
      <Form.Control
        type="text"
        placeholder="search  for products"
        className="my-4 search-input" value={searchQuery}onChange={handleSearchChange}></Form.Control>
      <Table hover bordered size="sm">
        <thead className="table-light">
          <tr>
            <th>Name</th>
            <th>Type</th>
            {/* <th>Taxes</th> */}
            <th>Sale Price</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((product) => (
            
            <tr key={product.id}  onClick={() => {localStorage.setItem("productId",product.id); navigate("/invoice-platform/products/edit-product")}}>
              <td>{product.productName}</td>
              <td>{product.isRecurring}</td>
              {/* <td>{product.taxes}</td> */}
              <td>{product.unitPrice}</td>
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

export default Items;