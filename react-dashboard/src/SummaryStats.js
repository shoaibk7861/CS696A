import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';

const SummaryStats = () => {
  return (
    <Row className="mb-4">
      <Col md={3}>
        <Card className="text-center">
          <Card.Body>
            <Card.Title>Total Users</Card.Title>
            <Card.Text>1,245</Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col md={3}>
        <Card className="text-center">
          <Card.Body>
            <Card.Title>Revenue</Card.Title>
            <Card.Text>$32,540</Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col md={3}>
        <Card className="text-center">
          <Card.Body>
            <Card.Title>Orders</Card.Title>
            <Card.Text>432</Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col md={3}>
        <Card className="text-center">
          <Card.Body>
            <Card.Title>Conversion Rate</Card.Title>
            <Card.Text>3.2%</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default SummaryStats;
