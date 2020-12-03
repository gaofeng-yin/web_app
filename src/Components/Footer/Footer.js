import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Footer.css';

function Footer(){

    let data = new Date();
    let year = data.getFullYear();

    return(
        <footer className="footer">
            <Container className="border-top justify-content-between" fluid={true}>
                  <Row>
                      <Col>
                   <span className="footer-span">Copyright &copy; 2020-{year} NS Production </span></Col>
                </Row>
            </Container>
        </footer>
    );

}

export default Footer;
