// src/components/TestCategories.jsx
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const categories = [
  { id: 1, title: 'Numerical Reasoning', image: '/img.png' },
  { id: 2, title: 'Verbal Skills', image: '/verbal.jpg' },
  { id: 3, title: 'Mechanical Aptitude', image: '/mechanical.jpg' },
  { id: 4, title: 'Abstract Reasoning', image: '/abstract.jpg' },
  { id: 5, title: 'Deductive Reasoning', image: '/deductive.jpg' },
  { id: 6, title: 'Spatial Ability', image: '/spatial.jpg' },
  { id: 7, title: 'Clerical Ability', image: '/clerical.jpg' },
  { id: 8, title: 'Typing Skills', image: '/typing.jpg' },
  { id: 9, title: 'Cognitive Ability', image: '/cognitive.jpg' },
  { id: 10, title: 'Critical Thinking', image: '/critical.jpg' },
  { id: 11, title: 'Personality Test', image: '/personality.jpg' },
  { id: 12, title: 'Situational Judgement', image: '/situational.jpg' },
];

const TestCategories = () => {
  return (
    <Container className="py-5">
      <h2 className="text-center mb-4">Find the test prep materials suitable for your needs</h2>
      <Row xs={1} md={2} lg={4} className="g-4">
        {categories.map((category) => (
          <Col key={category.id}>
            <Card className="h-100">
              <Card.Img 
                variant="top" 
                src={`https://random-image-pepebigotes.vercel.app/api/random-image`}
                alt={category.title} 
              />
              <Card.Body>
                <Card.Title className="text-center">{category.title}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default TestCategories;