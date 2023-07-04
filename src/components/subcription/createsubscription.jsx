import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row, Form, Table } from "react-bootstrap";
import { GrFormAdd } from "react-icons/gr";
import CreatableSelect from "react-select/creatable";
import { countryOptions, taxOptions } from "../../data";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { BASE_URL } from "../../constants/BASE_URL";
import moment from "moment";

const CreateSubscription = () => {
  const [tax, setTax] = useState();
  const [discount, setDiscount] = useState();

  const [recurringPeriod, setRecurringPeriod] = useState();
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [selectedItems, setSelectedItems] = useState([]);

  const navigate = useNavigate();

  //customers from created customers
  const [customerId, setCustomerId] = useState();
  const [customers, setCustomers] = useState([]);

  //states for products

  const [itemId, setItemId] = useState();
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState();

  useEffect(() => {
    fetch("http://localhost:8080/customers")
      .then((response) => response.json())
      .then((data) => {
        setCustomers(data?.data);
      })
      .catch((error) => {
        console.log("Error", error);
      });

    //fetching products

    fetch("http://localhost:8080/products")
      .then((response) => response.json())
      .then((data) => {
        setItems(data?.data);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  }, []);

  


  const handleCreateSubscription = async (e) => {
    e.preventDefault();

    try {
      const invoiceItems = selectedItems.map((item) => ({
        productId: item.itemId,
        quantity: item.quantity,
      }));

      const invoiceData = {
  
        startDate: moment(startDate, "YYYY-MM-DD").format("DD-MM-YYYY"),
        endDate: moment(endDate, "YYYY-MM-DD").format("DD-MM-YYYY"),
        customerId: customerId,
        items: invoiceItems,
        tax: tax,
        discount: discount,
      };

      const response = await BASE_URL.post("/subscriptions", invoiceData);

      if (response.data.message === "Success") {
        toast.success("Subscription created successfully", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 3000,
        });
      } else {
        toast.error("Failed to create subscription", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 3000,
        });
      }

      navigate("/invoice-platform/subscriptions");
    } catch (error) {
      console.log(error);
    }
  };
  let id = 1;

  const [column, setColumn] = useState([
    { id: id, product: "", quantity: "",  tax: "", discount: "" },
    
  ]);

  const addColumns = () => {
    setColumn([
      ...column,
      {
        id: id++,
        product: "",
        quantity: "",
        tax: "",
        discount: "",
      },
    ]);
  };
  console.log("coll ", typeof column, column, id);


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


  return (
    <Container className="main mt-5">
      <Row>
        <Col md={8}>
          <h2 className="mb-3">New Subscription</h2>
        </Col>
      </Row>
      <Row className="my-3">
        <Col md={10} className="mt-2">
          <h5>Product information</h5>

          <hr />
          <Row className="my-3">
        <Col 
        >
          <Button style={{float:"right"}} variant="success" onClick={addColumns}>Add product  <GrFormAdd  /></Button>
         
        </Col>
      </Row>
          <Row className="mb-3">
            <Table>
              <thead>
                <tr>
                  <td style={{ width: "25em" }}>Product</td>
                  <td style={{ width: "8em" }}>Quantity</td>
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
        <Col md={10} className="mt-2">
          <h5>Customer details</h5>
          <p>Customer account and personal information</p>
          <hr />
          <Row className="mb-3">
            <Col>
              <Form.Group controlId="formGridPassword" className="my-3">
                <Form.Label>Customer Name</Form.Label>
                {/* <CreatableSelect isClearable options={taxOptions} /> */}
                <Form.Select
                  value={customerId}
                  onChange={(e) => setCustomerId(e.target.value)}>
                  <option value="">Select a customer</option>
                  {customers.map((customer) => (
                    <option value={customer.id} key={customer.id}>
                      {customer.name}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group
                as={Row}
                controlId="formGridPassword"
                className="my-3">
                <Form.Group as={Col} md={4}>
                  <Form.Label>Start Date</Form.Label>
                  <Form.Control
                    className=" me-2"
                    type="date"
                    placeholder="start date"
                    id="date"
                    onChange={(e) => setStartDate(e.target.value)}
                  />
                </Form.Group>
                <Form.Group as={Col} md={4}>
                  <Form.Label>End Date</Form.Label>
                  <Form.Control
                    className=" me-2"
                    type="date"
                    placeholder="end date"
                    id="date"
                    onChange={(e) => setEndDate(e.target.value)}
                  />
                </Form.Group>
                <Form.Group as={Col} md={4}>
                  <Form.Label>Recurring Period</Form.Label>
                  <Form.Control
                    className="me-2"
                    type="number"
                    onChange={(e) => setRecurringPeriod(e.target.value)}
                  />
                </Form.Group>
              </Form.Group>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="my-3">
        <Col md={10} className="d-flex flex-row-reverse">
          <Button
            variant="success"
            type="submit"
            className="text-white"
            onClick={handleCreateSubscription}>
            Activate
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default CreateSubscription;
