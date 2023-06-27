import React, { useEffect, useState } from "react";
import {
  Button,
  Col,
  Container,
  Row,
  Form,
  Table,
  FormSelect,
} from "react-bootstrap";
import CreatableSelect from "react-select/creatable";
import { countryOptions, taxOptions } from "../../data";
import Select from "react-select";
import { BASE_URL } from "../../constants/BASE_URL";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const CreateInvoice = () => {
  const [customers, setCustomers] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const [productId, setProductId] = useState(null);

  const [title, setTitle] = useState();
  const [subHeading, setSubHeading] = useState();
  const [dueDate, setDueDate] = useState();
  const [customerId, setCustomerId] = useState();
  const [currency, setCurrency] = useState();
  const [tax, setTax] = useState();
  const [discount, setDiscount] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:8082/customers")
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        setCustomers(data?.data);
      })
      .catch((error) => {
        console.log("Error", error);
      });

    fetch("http://localhost:8082/products")
      .then((response) => response.json())
      .then((data) => {
        const pro = data?.data.map((prod) => ({
          label: prod.productName,
          value: prod.id,
        }));
        setAllProducts(pro);
      })

      .catch((error) => {
        console.log("Error", error);
      });
  }, []);

  const selectProductName = (Id) => {
    setProducts(Id);
    const proId = Id.map((product) => product.value);
    setProductId(proId);
  };

  const handleCreateInvoice = async (e) => {
    try {
      const response = await BASE_URL.post("/invoices", {
        setTitle: title,
        setSubHeading: subHeading,
        setDdueDate: dueDate,
        setCustomerId: customerId,
        setProductId: productId,
        setCurrency: currency,
        setTax: tax,
        setDiscount: discount,
      });
      console.log(response);
      if (response.data.message === "Success") {
        toast.success("Customer Created successfully", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 3000,
        });
      } else {
        toast.success("Failed to create customer", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 3000,
          type: "error",
        });
      }

      navigate("/invoice-platform/invoices");
    } catch (error) {
      console.log(error);
    }
    e.preventDefault();
  };
  return (
    <Container className="main mt-5">
      <Row>
        <Col md={8}>
          <h2 className="mb-3">New Invoice</h2>
        </Col>
      </Row>

      <Row className="my-3">
        <Col md={10} className="mt-2">
          <h5>General</h5>
          <p>Adding your personal identification information</p>
          <hr />
          <Row className="mb-3">
            <Col className="mb-3" md={6}>
              <Form.Group controlId="formGridEmail">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  onChange={(e) => setTitle(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col className="mb-3" md={6}>
              <Form.Group controlId="formGridEmail">
                <Form.Label>Subheading</Form.Label>
                <Form.Control
                  type="email"
                  onChange={(e) => setSubHeading(e.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="my-3">
        <Col md={10} className="mt-2">
          <h5>Customer details</h5>
          <p>Customer account and personal information</p>
          <hr />
          <Row className="mb-3">
            <Col>
              <Form.Group controlId="formGridPassword" className="my-3">
                <Form.Label>Customer Name</Form.Label>

                <FormSelect>
                  {customers?.map((customer, i) => {
                    return (
                      <option value={customer?.name} key={i}>
                        {customer?.name}
                      </option>
                    );
                  })}
                  onChange={(e) => setCustomerId(e.target.value)}
                </FormSelect>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group
                as={Row}
                controlId="formGridPassword"
                className="my-3">
                <Form.Group as={Col} md={6}>
                  <Form.Label>Invoice Date</Form.Label>
                  <Form.Control
                    className=" me-2"
                    type="date"
                    placeholder="start date"
                    id="date"
                  />
                </Form.Group>
                <Form.Group as={Col} md={6}>
                  <Form.Label>Due Date</Form.Label>
                  <Form.Control
                    className="me-2"
                    type="date"
                    placeholder="start date"
                    id="date"
                    onChange={(e) => setDueDate(e.target.value)}
                  />
                </Form.Group>
              </Form.Group>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="my-3">
        <Col md={10} className="mt-2">
          <Row className="mb-3">
            <Form.Group
              as={Col}
              md={6}
              controlId="formGridPassword"
              className="my-3">
              <Form.Label> Select Product </Form.Label>
              <Select
                closeMenuOnSelect={false}
                isMulti
                className="selectionPicker"
                isSearchable
                onChange={selectProductName}
                options={allProducts}
              />
            </Form.Group>
          </Row>
        </Col>
      </Row>
      <Row className="my-3">
        <Col md={10} className="mt-2">
          <h5>Product information</h5>

          <hr />
          <Row className="mb-3">
            <Table>
              <thead>
                <tr>
                  <td onChange={(e) => setCurrency(e.target.value)}>
                    Currency
                  </td>
                  <td onChange={(e) => setTax(e.target.value)}>Tax</td>
                  <td onChange={(e) => setDiscount(e.target.value)}>
                    Discount
                  </td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <CreatableSelect
                      isClearable
                      options={countryOptions}
                      className="tableSelect"
                    />
                  </td>
                  <td>
                    <CreatableSelect isClearable options={taxOptions} />
                  </td>
                  <td>
                    <Form.Control type="text" />
                  </td>
                </tr>
              </tbody>
            </Table>

            <Col md={2} className="d-flex justify-content-end"></Col>
          </Row>
        </Col>
      </Row>
      <Row className="my-5"></Row>
      <Row className="my-5">
        <Col md={10} className="d-flex flex-row-reverse">
          <Button
            variant="success"
            type="submit"
            className="text-white"
            onClick={handleCreateInvoice}>
            Submit
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default CreateInvoice;
