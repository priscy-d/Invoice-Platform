import React from "react";
import { Card, Col, Container, Row, Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { init } from "../../Keycloak";
const Signup = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Row>
        <Col md={8} className="mt-5 p-5">
          <h1 className="heading mt-5">Login to track your finances</h1>
          <p className="mini-caption">Keep track of your income with ease!</p>
        </Col>
        <Col md={4} className="mt-5 py-5">
          <Card className="in-card my-5">
            <Form
              className="m-5 "
              onSubmit={() => navigate("/invoice-platform/dashboard")}>
              <Form.Group className="mb-4" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="text" placeholder="Enter email" />
              </Form.Group>

              <Form.Group className="mb-4" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>

              <div className=" d-grid gap-2">
                <Button className="mt-3" variant="dark"  onClick={init}>
                  Login
                </Button>
                <Row>
                  <Col>
                    {" "}
                    <Link
                      style={{ textDecoration: "none" }}
                      className="text-dark">
                      Forgot Password?
                    </Link>
                  </Col>
                  <Col>
                    <Link
                      to="/auth/signup"
                      className="text-dark"
                      style={{ textDecoration: "none", float: "right" }}>
                      SignUp
                    </Link>
                  </Col>
                </Row>
              </div>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Signup;
