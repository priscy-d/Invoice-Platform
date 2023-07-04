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
import { objectsToLabel } from "../../Utils/service";
import moment from "moment";
import { GrFormAdd } from "react-icons/gr";
import { prettyDOM } from "@testing-library/react";

const CreateInvoice = (props) => {
  const [customers, setCustomers] = useState([]);
  const [items, setItems] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [currency, setCurrency] = useState("");
  const [currencies, setCurrencies] = useState([]);
  const [tax, setTax] = useState(0);
  const [discount, setDiscount] = useState(0);

  const [title, setTitle] = useState("");
  const [subHeading, setSubHeading] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [customerId, setCustomerId] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:8080/customers")
      .then((response) => response.json())
      .then((data) => {
        setCustomers(data?.data);
      })
      .catch((error) => {
        console.log("Error", error);
      });

    fetch("http://localhost:8080/products")
      .then((response) => response.json())
      .then((data) => {
        setItems(data?.data);
      })
      .catch((error) => {
        console.log("Error", error);
      });

    fetch("http://localhost:8080/currency")
      .then((response) => response.json())
      .then((data) => {
        setCurrencies(data?.data);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  }, []);

  const handleItemQuantityChange = (itemId, quantity) => {
    const updatedItems = selectedItems.map((item) => {
      if (item.itemId === itemId) {
        return {
          ...item,
          quantity: quantity,
        };
      }
      return item;
    });
    setSelectedItems(updatedItems);
  };

  const handleCreateInvoice = async (e) => {
    e.preventDefault();

    try {
      const invoiceItems = selectedItems.map((item) => ({
        productId: item.itemId,
        quantity: item.quantity,
      }));

      const invoiceData = {
        title: title,
        subHeading: subHeading,
        dueDate: moment(dueDate, "YYYY-MM-DD").format("DD-MM-YYYY"),
        customerId: customerId,
        items: invoiceItems,
        currency: currency,
        tax: tax,
        discount: discount,
      };

      const response = await BASE_URL.post("/invoices", invoiceData);

      if (response.data.message === "Success") {
        toast.success("Invoice created successfully", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 3000,
        });
      } else {
        toast.error("Failed to create invoice", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 3000,
        });
      }

      navigate("/invoice-platform/invoices");
    } catch (error) {
      console.log(error);
    }
  };
  let id = 1;

  const [column, setColumn] = useState([
    { id: id, product: "", quantity: "", currency: "", tax: "", discount: "" },
    
  ]);

  const addColumns = () => {
    setColumn([
      ...column,
      {
        id: id++,
        product: "",
        quantity: "",
        currency: "",
        tax: "",
        discount: "",
      },
    ]);
  };
  console.log("coll ", typeof column, column, id);

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
                <Form.Select onChange={(e) => setCustomerId(e.target.value)}>
                  {customers?.map((customer) => {
                    return (
                      <option value={customer.id} key={customer.id}>
                        {customer?.name}
                      </option>
                    );
                  })}
                </Form.Select>
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
          <h5>Product information</h5>

          <hr />
          <Row className="my-3">
        <Col md={10} className=" d-flex flex-row-reverse">
          <Button variant="success" onClick={addColumns}>Add product  <GrFormAdd  /></Button>
         
        </Col>
      </Row>
          <Row className="mb-3">
            <Table>
              <thead>
                <tr>
                  <td style={{ width: "25em" }}>Product</td>
                  <td style={{ width: "8em" }}>Quantity</td>
                  <td style={{ width: "25em" }}>currency</td>
                  <td style={{ width: "18em" }}>Tax</td>
                  <td style={{ width: "18em" }}>Discount</td>
                </tr>
              </thead>
              <tbody>
                {column?.map((row) => (
                  <tr key={row.id}>
                    <td>
                      {" "}
                      <Form.Control
                        as="select"
                        onChange={(e) => {
                          const itemId = e.target.value;
                          const item = items.find((item) => item.id === itemId);
                          setSelectedItems([
                            ...selectedItems,
                            { itemId, quantity: 0 },
                          ]);
                        }}
                        required>
                        <option value="">Select a product</option>
                        {items.length > 0 &&
                          items.map((item) => (
                            <option key={item.id} value={item.id}>
                              {item.productName}
                            </option>
                          ))}
                      </Form.Control>
                    </td>
                    <td>
                    <Form.Control
                        type="number"
                        onChange={(e) => handleItemQuantityChange(e.target.value)}
                        min={0}
                      />
                      </td>
                    <td><Form.Group controlId="formGridEmail">
                        <Form.Select
                          onChange={(e) => {
                            setCurrency(e.target.value);
                          }}>
                          {currencies?.map((oneCurrency) => {
                            return (
                              <option
                                value={oneCurrency.id}
                                key={oneCurrency.id}>
                                {oneCurrency?.currencyCode}
                              </option>
                            );
                          })}
                        </Form.Select>
                      </Form.Group></td>
                    <td> <Form.Control
                        type="number"
                        onChange={(e) => setTax(e.target.value)}
                        min={0}
                      /></td>
                    <td><Form.Control
                        type="number"
                        onChange={(e) => setDiscount(e.target.value)}
                        min={0}
                      /></td>
                  </tr>
                ))}
                {column?.map((col) => {
                  <tr key={col.id}>
                    <td>
                      <Form.Control
                        as="select"
                        value={col.product}
                        onChange={(e) => {
                          const itemId = e.target.value;
                          const item = items.find((item) => item.id === itemId);
                          setSelectedItems([
                            ...selectedItems,
                            { itemId, quantity: 0 },
                          ]);
                        }}
                        required>
                        <option value="">Select a product</option>
                        {items.length > 0 &&
                          items.map((item) => (
                            <option key={item.id} value={item.id}>
                              {item.productName}
                            </option>
                          ))}
                      </Form.Control>
                    </td>

                    <td>
                      {selectedItems.map((selectedItem, index) => (
                        <Row key={index}>
                          <Col>
                            <Form.Group
                              controlId={`quantity-${selectedItem.id}`}>
                              <Form.Control
                                type="number"
                                value={col.quantity}
                                min="1"
                                // value={selectedItem.quantity}
                                onChange={(e) =>
                                  handleItemQuantityChange(
                                    selectedItem.itemId,
                                    parseInt(e.target.value)
                                  )
                                }
                                required
                              />
                            </Form.Group>
                          </Col>
                        </Row>
                      ))}
                    </td>
                    <td>
                      <Form.Group controlId="formGridEmail">
                        <Form.Select
                          onChange={(e) => {
                            setCurrency(e.target.value);
                          }}>
                          {currencies?.map((oneCurrency) => {
                            return (
                              <option
                                value={oneCurrency.id}
                                key={oneCurrency.id}>
                                {oneCurrency?.currencyCode}
                              </option>
                            );
                          })}
                        </Form.Select>
                      </Form.Group>
                    </td>
                    <td>
                      <Form.Control
                        type="number"
                        onChange={(e) => setTax(e.target.value)}
                        min={0}
                      />
                    </td>
                    <td>
                      <Form.Control
                        type="number"
                        onChange={(e) => setDiscount(e.target.value)}
                        min={0}
                      />
                    </td>
                  </tr>;
                })}
              </tbody>
            </Table>

            <Col md={2} className="d-flex justify-content-end"></Col>
          </Row>
        </Col>
      </Row>
     

      <Row className="my-3">
        <Col md={10} className="d-flex flex-row-reverse">
          <Button
            variant="success"
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
