import {Button, Col, Container, Form, Row} from "react-bootstrap";
import { useHistory } from "react-router-dom";

function SignUpForm(){

    const history = useHistory()

    function handleClick(){
        history.push("/")
    } 

    return(
        <Container>
      <h1 className=" text-info mt-5 p-3 text-center rounded"> Sign up</h1>
      <Row className="mt-5">
          <Col lg={5} md={6} sm={12} className="p-5 m-auto shadow-sm rounded-lg">
              <Form>
                  <Form.Group controlId="formBasicEmail">
                      <Form.Label>First Name</Form.Label>
                      <Form.Control type="email" placeholder="Enter first name" />
                  </Form.Group>
                  <Form.Group controlId="formBasicEmail">
                      <Form.Label>Last Name</Form.Label>
                      <Form.Control type="email" placeholder="Enter last name" />
                  </Form.Group>
                  <Form.Group controlId="formBasicEmail">
                      <Form.Label>Username</Form.Label>
                      <Form.Control type="email" placeholder="Enter username" />
                  </Form.Group>

                  <Form.Group controlId="formBasicPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" placeholder="Password" />
                  </Form.Group>
                  <Form.Group controlId="formBasicPassword">
                      <Form.Label>Confirm Password</Form.Label>
                      <Form.Control type="password" placeholder="confirm password" />
                  </Form.Group>
                  <Row className="mt-3">
                  <Button as={Col} className="mx-2" variant="info" type="submit">
                      Sign up
                  </Button>
                  <Button onClick={handleClick} as={Col} className="mx-2" variant="info" type="submit">
                      Back
                  </Button>
                  </Row>
              </Form>
          </Col>
      </Row>
  </Container>
    )
}

export default SignUpForm