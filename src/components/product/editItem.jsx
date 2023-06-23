import React, { useState, useEffect } from "react";
import { Button, Col, Container, Row, Form } from "react-bootstrap";

import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const EditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    id: "",
    productName: "",
    description: "",
    unitPrice: "",
    isRecurring: "",
  });

  const productId = localStorage.getItem('productId')

  useEffect(() => {
    const getProductById = async () => {
      try {
        const response = await fetch(`http://0.0.0.0:8082/products/${productId}`);
        const data = await response.json();
        setProduct(data.data);
        console.log(data);
      } catch (error) {
        console.log(error);
        
      }
    };
    getProductById();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const updateProduct = async () => {
      try {
        await fetch(`/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(product),
        });
        navigate("/invoice-platform/products"); // Redirect back to the product list page after updating
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

              <Form.Select className="w-50" defaultValue={product.isRecurring}
            onChange={handleInputChange}>
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
                  <Form.Control type="text" defaultValue={product.productName}
            onChange={handleInputChange}/>
                </Form.Group>
              </Col>
            </Row>
          </Row>

          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" rows={5} defaultValue={product.description}
            onChange={handleInputChange} />
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
              <Form.Control type="text" defaultValue={product.unitPrice}
            onChange={handleInputChange} />
            </Form.Group>
          </Row>
        </Col>
      </Row>
      <Row className="my-5">
        <Col md={10} className="d-flex flex-row-reverse">
          <Button variant="success" type="submit" className="text-white" onClick={handleSubmit}>
            Submit
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default EditProduct;