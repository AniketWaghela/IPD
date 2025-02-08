// src/components/Hero.jsx
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Hero = () => {
  return (
    <div className="hero-section py-5 bg-light">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <h1 className="display-4 mb-3">Test preparation that <br/><span className="text-success">makes a difference</span></h1>
            <p className="lead mb-4">Prepare with us – Pass your test – Get the job</p>
            <p className="mb-4">Try one of our <span className="text-warning">free</span> aptitude tests.</p>
            <Button variant="warning" size="lg">Start Free Test</Button>
          </Col>
          <Col md={6}>
            <img 
              src="/api/placeholder/600/400" 
              alt="Students preparing for test" 
              className="img-fluid"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hero;