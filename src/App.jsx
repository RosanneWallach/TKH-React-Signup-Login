import React, { useState } from "react";
import { Row, Alert, Button, Col, Container, Form } from "react-bootstrap";
import "./App.css";

const users = [];

function Navbar() {
  return (
    <div className="navlinks">
      <a href="">Home</a>
      <a href="">About Me</a>
      <a href="">Contact</a>
    </div>
  );
}

function SideBar() {
  return (
    <div className="sidebar">
      <a href="">My Work</a>
      <a href="">Blog</a>
    </div>
  );
}



function Layout() {
  const [isShowLogin, setIsShowLogin] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [isLogged, setIsLogged] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name == "username") {
      setUsername(value);
    } else if (name == "password") {
      setPassword(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username == "userABC" && password == 'ABC') {
      setIsLogged(true)
    } else {
      setError(true);
    }

  };
  console.log(isShowLogin, isLogged)
  return (
    <div className="layout">
      {isLogged ? <Welcome name={username} /> : isShowLogin ? (
        <>
          <Container>
            <Row>
              <Col lg={8} className="m-auto">
                <h1 className="text-center">Login</h1>
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Username </Form.Label>
                    <Form.Control
                      type="text"
                      name="username"
                      value={username}
                      onChange={handleChange}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      name="password"
                      value={password}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Form>
              </Col>
            </Row>
          </Container>
  

        </>
      ) : (
        <>
          <Container>
            <Row>
              <Col lg={8} className="m-auto">
                <h1 className="text-center">Create an Account</h1>
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label>Username </Form.Label>
                    <Form.Control
                      type="text"
                      name="username"
                      value={username}
                      onChange={handleChange}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      name="password"
                      value={password}
                      onChange={handleChange}
                    />
                  </Form.Group>
                  <div className="mt-2">
                    <Button
                      variant="outline-primary"
                      onClick={() => {
                        setIsShowLogin(true);
                      }}
                    >
                      Submit
                    </Button>
                  </div>
                  {error && (
                    <Alert variant="warning">
                      Username or password is incorrect, please click "forgot username/password" to reset your credentials
                    </Alert>
                  )}
                </Form>
              </Col>
            </Row>
          </Container>
        </>
      )}
    </div>
  );
}

function App() {
  return (
    <div className="app">
      <div className="navbar-box">
        <Navbar />
      </div>
      <div className="main">
        <div>
          <SideBar />
        </div>
        <div>
          <Layout />
        </div>
      </div>
    </div>
  );
}
export default App;