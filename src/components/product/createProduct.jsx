import React, { useState } from "react";
import { Button, Col, Container, Row, Form } from "react-bootstrap";
import { BASE_URL } from "../../constants/BASE_URL";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const CreateProduct = () => {
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");

  const [type, setType] = useState("ONE_TIME");
  const [unitPrice, setUnitPrice] = useState();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await BASE_URL.post("/products", {
        productName: productName,
        description: description,
        productState: type,
        unitPrice: parseFloat(unitPrice),
        recurringPeriod: 4,
      });
      console.log("product", response);
      if (response.data.message === "Success") {
        toast.success("Product Created", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 3000,
        });
      }else {
        toast.success("Failed to create product", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 3000,
          type: "error",
        });
      }

      navigate("/invoice-platform/products");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container className="main mt-5">
      <Row>
        <Col md={8}>
          <h2 className="mb-3">New Product</h2>
        </Col>
      </Row>

      <Row className="my-3">
        <Col md={10} className="mt-2">
          <h5>General</h5>
          <p>Details about the product</p>
          <hr />
          <Row>
            <Form.Group as={Col} className="mb-3" controlId="formGridAddress1" md={11}>
              <Form.Label>Type</Form.Label>
              <Form.Select
                onChange={(e) => setType(e.target.value)}
                className="w-50">
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
                    type="text"
                    onChange={(e) => setProductName(e.target.value)}
                    c
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
              onChange={(e) => setDescription(e.target.value)}
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
            <Col md={6}>
              <Form.Group as={Col} controlId="formGridEmail" className="my-3">
                <Form.Label className="mt-3">Unit Price</Form.Label>
                <Form.Control
                  className="form-fields "
                  type="text"
                  onChange={(e) => setUnitPrice(e.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="my-5">
        <Col md={10} className="d-flex flex-row-reverse">
          <Button
            variant="success"
            type="submit"
            className="text-white"
            onClick={handleSubmit}>
            Submit
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default CreateProduct;
