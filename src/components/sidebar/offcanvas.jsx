import { useState } from "react";
import { Offcanvas, Form } from "react-bootstrap";
import { AiOutlineSetting, AiOutlineDashboard } from "react-icons/ai";
import { BsCurrencyDollar } from "react-icons/bs";
import { Link } from "react-router-dom";
import componentArray from "./canvasbodies.jsx";

const titles = ["Profile", "Search", "Create New", "Notifications", "Settings"];

function OffCanvas({ handleClose, show, selected }) {
  return (
    <Offcanvas
      show={show}
      onHide={handleClose}
      scroll={true}
      backdrop={false}
      className="offcanvas pt-5 px-2"
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>{titles[selected]}</Offcanvas.Title>
      </Offcanvas.Header>
      {/* <Offcanvas.Body>
        <Form.Control
          type="text"
          placeholder="search"
          className="my-4 search-input"
        ></Form.Control>
        <Link to="settings\currencies" className="nav-items mx-2 ">
          <BsCurrencyDollar /> <p className="mx-2 text">Currency</p>
        </Link>
      </Offcanvas.Body> */}
      {componentArray[selected]}
    </Offcanvas>
  );
}

export default OffCanvas;
