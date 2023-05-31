import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Sidebar from "./components/sidebar";

const Layout = () => {
  return (
    <Container fluid>
      <Row>
        <Col md={2} className="position-fixed">
          <Sidebar />
        </Col>
        <Col md={10} className="main-page">
          <Outlet />
        </Col>
      </Row>
    </Container>
  );
};

export default Layout;
