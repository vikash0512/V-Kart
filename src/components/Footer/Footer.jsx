import React from "react"
import "./style.css"
import { Col, Container, Row } from "react-bootstrap"

const Footer = () => {
  return (
    <footer>
        <Container>
          <Row className="footer-row">
            <Col md={3} sm={5} className='box'>
              <div className="logo">
                  <ion-icon name="bag"></ion-icon>
                  <h1>V-Kart</h1>
              </div>
              <p>Your one-stop online shop for stylish, high-quality clothing at affordable prices. Discover the latest trends in fashion, from casual wear to formal attire, with a wide selection for men, women, and kids. Enjoy seamless shopping, secure payment options, and fast delivery to keep you looking your best!"</p>
            </Col>
            <Col md={3} sm={5} className='box'>
              <h2>About Us</h2>
              <ul>
                <li>Careers</li>
                <li>Our Stores</li>
                <li>Our Cares</li>
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
              </ul>
            </Col>
            <Col md={3} sm={5} className='box'>
              <h2>Customer Care</h2>
              <ul>
                <li>Help Center </li>
                <li>How to Buy </li>
                <li>Track Your Order </li>
                <li>Corporate & Bulk Purchasing </li>
                <li>Returns & Refunds </li>
              </ul>
            </Col>
            <Col md={3} sm={5} className='box'>
              <h2>Contact Us</h2>
              <ul>
                <li>Vikash Kumar</li>
                <li>Jalandhar-Delhi, G.T. Road,
                    Phagwara, Punjab
                    (INDIA) -144411.</li>
                <li>Email:vikash.kumar@lpu.in</li>
                <li>Phone: +91 18245170000</li>
              </ul>
            </Col>
          </Row>
        </Container>
    </footer>
  )
}

export default Footer
