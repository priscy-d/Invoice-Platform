import React from "react";
import { Card, Col, Container, Row, Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <div className="text-center">
        <h1 className="heading mt-5 ">Page Not Found</h1>
        <img src="/undraw_page_not_found_re_e9o6.svg" />
      </div>
      <div className="text-center mt-4">
        <Button onClick={() => navigate("/auth/login")}>back to login</Button>
      </div>
    </Container>
  );
};

export default PageNotFound;
