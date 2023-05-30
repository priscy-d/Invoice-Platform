import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row, Stack } from "react-bootstrap";
import { BiUserCircle, BiNotification, BiSearchAlt2 } from "react-icons/bi";
import { AiOutlineSetting, AiOutlineDashboard } from "react-icons/ai";
import { FaFileInvoice } from "react-icons/fa";
import { BsArchive } from "react-icons/bs";

function Sidebar() {
  return (
    <Container className="sidebar ">
      <Row>
        <Col xs={2} className="mini-section pt-5 px-2">
          <Stack gap={4}>
            <BiUserCircle className="icon" />
            <BiSearchAlt2 className="icon" />
            <BiNotification className="icon" />
            <AiOutlineSetting className="icon" />
          </Stack>
        </Col>
        <Col className="large-section pt-5 px-2">
          <Stack gap={3}>
            <h4>User</h4>
            <Link to="dashboard" className="nav-items  ">
              <AiOutlineDashboard /> <p className="mx-2">Dashboard</p>
            </Link>
            <Link to="invoices" className="nav-items   ">
              <FaFileInvoice /> <p className="mx-2">Invoice</p>
            </Link>
            <Link to="items" className="nav-items  ">
              <BsArchive /> <p className="mx-2">Items</p>
            </Link>
          </Stack>
        </Col>
      </Row>
    </Container>
  );
}

export default Sidebar;
