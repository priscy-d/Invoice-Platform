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
import OffCanvas from "./offcanvas.jsx";

function Sidebar() {
  const [show, setShow] = useState(false);
  const [selected, setSelected] = useState(0);

  const handleClose = () => setShow(false);
  const handleShow = (index) => {
    setSelected(index);
    setShow(true);
  };

  return (
    <div className="sidebar">
      <Row>
        <Col xs={2} className="mini-section pt-5 px-2">
          {/* <OverlayTrigger
            placement="left"
            overlay={<Tooltip id="button-tooltip-2">Search</Tooltip>}
          >
            <BiSearchAlt2 className="icon" />
          </OverlayTrigger> */}
          <Stack gap={4}>
            <BiUserCircle className="icon" onClick={() => handleShow(0)} />
            <BiSearchAlt2 className="icon" onClick={() => handleShow(1)} />
            <GrAddCircle className="icon" onClick={() => handleShow(2)} />
            <BiNotification className="icon" onClick={() => handleShow(3)} />
            <AiOutlineSetting className="icon" onClick={() => handleShow(4)} />
          </Stack>
          <OffCanvas
            show={show}
            handleClose={handleClose}
            selected={selected}
          />
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
      <Row>
        <Col xs={2}></Col>
        <Col>
          {" "}
          <Offcanvas className="sidebar" show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Offcanvas</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              Some text as placeholder. In real life you can have the elements
              you have ch osen. Like, text, images, lists, etc.
            </Offcanvas.Body>
          </Offcanvas>
        </Col>
      </Row>
    </div>
  );
}

export default Sidebar;
