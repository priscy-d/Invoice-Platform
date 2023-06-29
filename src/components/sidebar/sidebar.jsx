import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Stack, Button, Offcanvas, Form } from "react-bootstrap";
import { BiUserCircle, BiNotification, BiSearchAlt2 } from "react-icons/bi";
import { AiOutlineSetting, AiOutlineDashboard } from "react-icons/ai";
import { FaFileInvoice } from "react-icons/fa";
import {
  BsArchive,
  BsFillPersonPlusFill,
  BsCurrencyDollar,
} from "react-icons/bs";
import { GrAddCircle } from "react-icons/gr";
import { MdSubscriptions } from "react-icons/md";
import Image from "react-bootstrap/Image";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

function Sidebar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="sidebar">
      <Row>
        <Col xs={2} className="mini-section pt-5 px-2">
          <Stack gap={4}>
            <BiUserCircle className="icon" />
            <BiSearchAlt2 className="icon" />
            <GrAddCircle className="icon" />
            <BiNotification className="icon" />
            <AiOutlineSetting className="icon" onClick={handleShow} />
          </Stack>
          <Offcanvas
            show={show}
            onHide={handleClose}
            scroll={true}
            backdrop={false}
            className="offcanvas pt-5 px-2"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>
                <AiOutlineSetting /> Setting
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Form.Control
                type="text"
                placeholder="search"
                className="my-4 search-input"
              ></Form.Control>
              <Link to="settings\currencies" className="nav-items mx-2 ">
                <BsCurrencyDollar /> <p className="mx-2 text">Currency</p>
              </Link>
            </Offcanvas.Body>
          </Offcanvas>
        </Col>
        <Col className="large-section pt-5 px-2">
          <Stack gap={3}>
            <h3 className="companyName">Generis</h3>
            <h6>
              Hi, <b>User</b>
            </h6>
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
            <Link to="subscriptions" className="nav-items mx-2 ">
              <MdSubscriptions /> <p className="mx-2 text">Subscriptions</p>
            </Link>
          </Stack>
        </Col>
      </Row>
    </div>
  );
}

export default Sidebar;
