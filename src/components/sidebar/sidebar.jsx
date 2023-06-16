import React from "react";
import { Link } from "react-router-dom";
import { Col, Row, Stack } from "react-bootstrap";
import { BiUserCircle, BiNotification, BiSearchAlt2 } from "react-icons/bi";
import { AiOutlineSetting, AiOutlineDashboard } from "react-icons/ai";
import { FaFileInvoice } from "react-icons/fa";
import { BsArchive, BsFillPersonPlusFill } from "react-icons/bs";

function Sidebar() {
  return (
    <div className="sidebar">
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
            <h5>
              Hi, <b>User</b>
            </h5>
            <Link to="dashboard" className="nav-items mx-2 ">
              <AiOutlineDashboard /> <p className="mx-2 text">Dashboard</p>
            </Link>
            <Link to="invoices" className="nav-items mx-2 ">
              <FaFileInvoice /> <p className="mx-2 text">Invoices</p>
            </Link>
            <Link to="products" className="nav-items mx-2 ">
              <BsArchive /> <p className="mx-2 text">Products</p>
            </Link>
            <Link to="customers" className="nav-items mx-2 ">
              <BsFillPersonPlusFill /> <p className="mx-2 text">Customers</p>
            </Link>
          </Stack>
        </Col>
      </Row>
    </div>
  );
}

export default Sidebar;