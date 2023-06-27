import React from "react";
import { Button, Col, Container, Row, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import {
  useRowSelect,
  HeaderCellSelect,
  CellSelect,
} from "@table-library/react-table-library/select";
import { Data } from "../../data";
import {
  Table,
  Header,
  HeaderRow,
  HeaderCell,
  Body,
  Cell,
} from "@table-library/react-table-library/table";

const Items = () => {
  const navigate = useNavigate();

  const data = { nodes: Data };
  const select = useRowSelect(Data);

  const handleSubmit = () => {
    navigate("/invoice-platform/products/create-product");
  };
  return (
    <Container className="mt-5">
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
        placeholder="search"
        className="my-4 search-input"
      ></Form.Control>
      <Table data={data} select={select}>
        {(tableList) => (
          <>
            <Header>
              <HeaderRow>
                <HeaderCellSelect />
                <HeaderCell>Task</HeaderCell>
                <HeaderCell>Deadline</HeaderCell>
                <HeaderCell>Type</HeaderCell>
              </HeaderRow>
            </Header>

            <Body>
              {tableList.map((item) => (
                <Row key={item.id} item={item}>
                  <CellSelect item={item} />
                  <Cell>{item.month}</Cell>
                </Row>
              ))}
            </Body>
          </>
        )}
      </Table>
      <Table hover bordered size="sm" select={select}>
        <thead className="table-light">
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Taxes</th>
            <th>Sale Price</th>
          </tr>
        </thead>
        <tbody>
          <tr
            onClick={() => navigate("/invoice-platform/products/edit-product")}
          >
            <td>Monthly subscription</td>
            <td>Subscription</td>
            <td>5%</td>
            <td>¢1000</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};

export default Items;
