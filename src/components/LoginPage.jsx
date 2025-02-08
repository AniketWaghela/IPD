import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';

const LoginPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      console.log('Login attempted with:', formData);
      navigate('/');
    }, 1500);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Container fluid className="login-container d-flex align-items-center justify-content-center vh-100">
      <Row className="w-100 h-100 align-items-center">
        <Col xs={12} className="d-flex justify-content-center align-items-center">
          <Card className="login-card glass-effect shadow-lg border-0 p-5" style={{ width: '450px' }}>
            <Card.Body className="p-4">
              <div className="text-center mb-3">
                <h2 className="fw-bold text-primary">Welcome Back</h2>
                <p className="text-muted">Sign in to continue</p>
                <hr className="mb-4" style={{ borderTop: '2px solid #ccc' }} />
              </div>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label className="d-block text-start">Email address</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label className="d-block text-start">Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-4 d-flex justify-content-between align-items-center">
                  <Form.Check type="checkbox" label="Remember me" className="me-2" />
                  <a href="#" className="text-decoration-none text-primary">Forgot Password?</a>
                </Form.Group>
                <Button variant="primary" type="submit" className="w-100 btn-lg animated-button" disabled={isLoading}>
                  {isLoading ? <span className="spinner-border spinner-border-sm me-2" role="status"></span> : null}
                  {isLoading ? 'Signing in...' : 'Sign In'}
                </Button>
              </Form>
              <div className="text-center mt-4">
                <p className="mb-0">
                  Don't have an account? <a href="#" className="text-decoration-none text-primary">Sign up</a>
                </p>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
