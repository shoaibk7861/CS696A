import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import SummaryStats from './SummaryStats';
import ChartWidget from './ChartWidget';
import Footer from './Footer';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Container fluid>
        <Row>
          <Col md={3}>
            <Sidebar />
          </Col>
          <Col md={9}>
            <SummaryStats />
            <ChartWidget />
            {/* Add more components as needed */}
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default App;

