import React, { useState, useEffect } from "react";
import { Button, Col, Container, Row, Form, Dropdown } from "react-bootstrap";

import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { BsThreeDots } from "react-icons/bs";

const EditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [unitPrice, setUnitPrice] = useState("");
  const [productState, setProductState] = useState("");

  const productId = localStorage.getItem("productId");
  useEffect(() => {
    const getProductById = async () => {
      try {
        const response = await fetch(
          `http://0.0.0.0:8080/products/${productId}`
        );
        const data = await response.json();
        setProductName(data.data.productName);
        setDescription(data.data.description);
        setUnitPrice(data.data.unitPrice);
        setProductState(data.data.productState);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    getProductById();
  }, [id]);

  const handleProductNameChange = (e) => {
    setProductName(e.target.value);
  };
  const handleProductDescriptionChange = (e) => {
    setDescription(e.target.value);
  };
  const handleProductUnitPriceChange = (e) => {
    setUnitPrice(e.target.value);
  };
  const handleProductIsRecurringChange = (e) => {
    setProductState(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const updateProduct = async () => {
      try {
        const response = await fetch(
          `http://0.0.0.0:8080/products/${productId}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              productName: productName,
              description: description,
              productState: productState,
              unitPrice: unitPrice,
            }),
          }
        );
        navigate("/invoice-platform/products");
        console.log(response, "ama");

        if (response.status === 200) {
          toast.success("product updated successfully", {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 3000,
          });
        } else {
          toast.success("Failed to update product", {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 3000,
            type: "error",
          });
        }

        // Redirect back to the product list page after updating
      } catch (error) {
        console.log(error);
      }
    };

    updateProduct();
  };

  return (
    <Container className="main mt-5">
      <Row>
        <Col md={8}>
          <h2 className="mb-3">Edit Product</h2>
        </Col>
        <Col md={2}>
         
            
                <Button variant="light">Delete</Button>
              
        
        </Col>
      </Row>

      <Row className="my-3">
        <Col md={10} className="mt-2">
          <h5>General</h5>
          <p>Details about the product</p>
          <hr />
          <Row>
            <Form.Group
              as={Col}
              className="mb-3"
              controlId="formGridAddress1"
              md={11}>
              <Form.Label>Type</Form.Label>

              <Form.Select
                className="w-50"
                value={productState}
                onChange={handleProductIsRecurringChange}>
                <option value={"RECURRING"}>Recurring</option>
                <option selected value={"ONE_TIME"}>
                  One-Time
                </option>
              </Form.Select>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Row className="mb-3">
              <Col md={6}>
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Product Name</Form.Label>
                  <Form.Control
                    value={productName}
                    type="text"
                    // defaultValue={product.productName}
                    onChange={handleProductNameChange}
                  />
                </Form.Group>
              </Col>
            </Row>
          </Row>

          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={5}
              value={description}
              onChange={handleProductDescriptionChange}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row className="my-3">
        <Col md={10} className="mt-2">
          <h5>Billing</h5>
          <p>Sales information</p>
          <hr />
          <Row className="mb-3">
            <Form.Group
              as={Col}
              controlId="formGridEmail"
              className="my-3"
              md={6}>
              <Form.Label className="w=25" md={6}>
                Unit Price
              </Form.Label>
              <Form.Control
                type="text"
                value={unitPrice}
                onChange={handleProductUnitPriceChange}
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
            Update
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default EditProduct;
