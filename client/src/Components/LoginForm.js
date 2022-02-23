import React, {useState} from "react";
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import { Link } from "react-router-dom";

function LoginForm(){
    return(
      <Container>
      <h1 className=" text-info mt-5 p-3 text-center rounded"> Login</h1>
      <Row className="mt-5">
          <Col lg={5} md={6} sm={12} className="p-5 m-auto shadow-sm rounded-lg">
              <Form>
                  <Form.Group controlId="formBasicEmail">
                      <Form.Label>Username</Form.Label>
                      <Form.Control type="email" placeholder="Enter username" />
                  </Form.Group>

                  <Form.Group controlId="formBasicPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" placeholder="Password" />
                  </Form.Group>
                  <Row className="mt-3">
                  <Button as={Col} className="mx-2" variant="info" type="submit">
                      Login
                  </Button>
                  <p className="text-info mt-5 p-3 text-center rounded">If you dont have an account</p>
                  <Link to='/sign' className="btn btn-info">
                    Sign up
                   </Link>
                  </Row>
              </Form>
          </Col>
      </Row>
  </Container>
      )
    }

export default LoginForm

