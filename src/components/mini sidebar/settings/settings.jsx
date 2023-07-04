import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Stack, Button, Offcanvas, Form } from "react-bootstrap";
import { AiOutlineSetting } from "react-icons/ai";
import { MdAttachEmail } from "react-icons/md";
import { BsCurrencyDollar } from "react-icons/bs";

function Sidebar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="sidebar">
      <Row>
        <Col className="large-section pt-5 px-2">
          <Offcanvas
            show={show}
            onHide={handleClose}
            scroll={true}
            backdrop={false}
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
              <Stack>
                <Link to="settings\currencies" className="nav-items mx-2 ">
                  <BsCurrencyDollar /> <p className="mx-2 text">Currency</p>
                </Link>
                <Link to="settings\currencies" className="nav-items mx-2 ">
                  <MdAttachEmail /> <p className="mx-2 text">Email Templates</p>
                </Link>
              </Stack>
            </Offcanvas.Body>
          </Offcanvas>
        </Col>
      </Row>
    </div>
  );
}

export default Sidebar;
