import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Stack } from "react-bootstrap";
import { BiUserCircle, BiNotification } from "react-icons/bi";
import { AiOutlineSetting } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { IoMdAdd } from "react-icons/io";
import { MdSubscriptions, MdDashboard } from "react-icons/md";
import { FaFileInvoiceDollar, FaOpencart } from "react-icons/fa";

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

            <IoMdAdd className="icon" onClick={() => handleShow(1)} />
            <BiNotification className="icon" onClick={() => handleShow(2)} />
            <AiOutlineSetting className="icon" onClick={() => handleShow(3)} />
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
              <MdDashboard /> <p className="mx-2 text">Dashboard</p>
            </Link>
            <Link to="invoices" className="nav-items mx-2 ">
              <FaFileInvoiceDollar /> <p className="mx-2 text">Invoices</p>
            </Link>
            <Link to="products" className="nav-items mx-2 ">
              <FaOpencart /> <p className="mx-2 text">Products</p>
            </Link>
            <Link to="customers" className="nav-items mx-2 ">
              <BsFillPersonFill /> <p className="mx-2 text">Customers</p>
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
