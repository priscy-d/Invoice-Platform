import React, { useState, useEffect } from "react";
import { Button, Col, Container, Row, Form, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import MaterialCheckbox from "@mui/material/Checkbox";
import Pagination from "../pagination";
import DeleteProductModal from "./deleteProductModal";

import { AiOutlineDelete } from "react-icons/ai";

const Items = () => {
  const [deleteModal, setDeleteModal] = useState(false);

  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/invoice-platform/products/create-product");
  };

const getAllProducts =async ()=>{

  fetch("http://localhost:8080/products")
      .then((response) => response.json())
      .then((data) => {
        const sortedProducts = data?.data.sort((a, b) => {
          return new Date(b.createdDate) - new Date(a.createdDate);
        });
        setProducts(sortedProducts);
      })
      .catch((error) => {
        console.log("Error:", error);
      });
}
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts()
   
  },[]);

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(15);
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const data = filteredProducts?.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages = filteredProducts
    ? Math.ceil(filteredProducts?.length / recordsPerPage)
    : 1;
  const [showAction, setShowAction] = useState(false);
  const action = () => {
    return (
      <Button
        onClick={() => setDeleteModal(true)}
        variant="danger"
        style={{ float: "right" }}>
        <AiOutlineDelete />
      </Button>
    );
  };

 

  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
  };
  
  useEffect(() => {
    const filtered = products.filter(
      (product) =>
        (product.productName &&
          product.productName.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (product.productState &&
          product.productState.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (product.unitPrice &&
          product.unitPrice.toString().includes(searchQuery.toLowerCase()))
    );
    setFilteredProducts(filtered);
  }, [products, searchQuery]);
  
  useEffect(() => {
    if (!products) {
      setFilteredProducts([]);
    }
  }, [products]);
  
  useEffect(() => {
    setFilteredProducts(products);
  }, []);
  

  
  return (
    <Container className="mt-5">
      <DeleteProductModal show={deleteModal} setShow={setDeleteModal} />
      <Row>
        <Col md={10}>
          <h2>Product</h2>
        </Col>
        <Col md={2} ClassName="d-flex flex-row-reverse">
          <Button variant="success" onClick={handleSubmit}>
            New product
          </Button>
        </Col>
      </Row>
      <Form.Control
        type="text"
        placeholder="search  for products"
        className="my-4 search-input"
        value={searchQuery}
        onChange={handleSearchChange}></Form.Control>

      <Table hover bordered size="sm">
        <thead className="table-light">
          <tr>
            <th>
              <MaterialCheckbox size="small" />
            </th>
            <th>Name</th>
            <th>Type</th>
            <th>Sale Price</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((product) => (
            <tr>
              <td>
                <MaterialCheckbox size="small" />
              </td>
              <td
                key={product.id}
                onClick={() => {
                  localStorage.setItem("productId", product.id);
                  navigate("/invoice-platform/products/edit-product");
                }}>
                {product.productName}
              </td>
              <td>{product.productState}</td>

              <td
                onMouseEnter={() => {
                  setShowAction(true);
                  localStorage.setItem("productId", product.id);
                }}>
              {product.unitPrice} {showAction ? action() : null}
              </td>
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
