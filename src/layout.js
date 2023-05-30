import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Sidebar from "./components/sidebar";

const Layout = () => {
  return (
    <Container fluid>
      <Row>
        <Col md={2}>
          <Sidebar />
        </Col>
        <Col md={10}>
          <Outlet />
        </Col>
      </Row>
    </Container>
  );
};

export default Layout;
