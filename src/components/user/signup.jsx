import React from "react";
import { Card, Col, Container, Row, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
const Signup = () => {
  return (
    <Container>
      <Row>
        <Col md={8} className="mt-5 p-5">
          <h1 className="heading mt-5">
            Sign up to manage your invoices with ease
          </h1>
          <p className="mini-caption">
            Specially designed to help you keep record of your business finances
          </p>
        </Col>
        <Col md={4} className="mt-5 py-5">
          <Card className="in-card my-5">
            <Form className="m-5">
              <Form.Group className="mb-4">
                <Form.Label> Name</Form.Label>
                <Form.Control type="text" required placeholder="Enter name" />
              </Form.Group>
              <Form.Group className="mb-4" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" required placeholder="Enter email" />
              </Form.Group>
              <Form.Group className="mb-4" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" required />
              </Form.Group>
              <Form.Group className="mb-3" controlId="Password">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Confirm Password"
                  required
                />
              </Form.Group>
              <div className="d-grid gap-2">
                <Button variant="dark" type="submit">
                  Create account
                </Button>
              </div>
              <Row className="mt-2">
                <Link
                  xs="auto"
                  to="/auth/login"
                  className="text-dark"
                  style={{ textDecoration: "none", float: "right" }}>
                  Already have an account?
                </Link>{" "}
              </Row>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Signup;
