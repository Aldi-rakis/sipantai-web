// Importing necessary modules and components
import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Api from "../../../api";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import LayoutWeb from "../../../layouts/Web";

// Component definition
function VariableWidth() {
  const settings = {
    className: "slider variable-width",
    dots: true,
    infinite: true,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true
  };

  return (
    <React.Fragment> 
    <LayoutWeb>

      <div className="mt-75 mb-75">
    <Container className="text-white mt-10">
  

      {/* buat yang kedua */}
      <Row style={{rowGap: '20px'}}>
        <Col sm={4}>  
        <Row>
            <Col xs={6}>
            
            <div style={{ height: '250px', }}>
                <img style={{ height: "100%", objectFit: "cover", width: "100%", borderRadius: '10px' }} src="../public/Bandung.jpg" alt="" />
              </div>
            
            </Col>

            <Col xs={6}>
            <div style={{ textAlign: 'start' }}>
                <h3>Pantai Carocok</h3>
                <Button variant="primary">Primary</Button>{' '}
              </div>
            </Col>
          </Row>
          </Col>

          <Col sm={4}>  
        <Row>
            <Col xs={6}>
            
            <div style={{ height: '250px', }}>
                <img style={{ height: "100%", objectFit: "cover", width: "100%", borderRadius: '10px' }} src="../public/Bandung.jpg" alt="" />
              </div>
            
            </Col>

            <Col xs={6}>
            <div style={{ textAlign: 'start' }}>
                <h3>Pantai Carocok</h3>
                <Button variant="primary">Primary</Button>{' '}
              </div>
            </Col>
          </Row>
          </Col>

          <Col sm={4}>  
        <Row>
            <Col xs={6}>
            
            <div style={{ height: '250px', }}>
                <img style={{ height: "100%", objectFit: "cover", width: "100%", borderRadius: '10px' }} src="../public/Bandung.jpg" alt="" />
              </div>
            
            </Col>

            <Col xs={6}>
            <div style={{ textAlign: 'start' }}>
                <h3>Pantai Carocok</h3>
                <Button variant="primary">Primary</Button>{' '}
              </div>
            </Col>
          </Row>
          </Col>


          <Col sm={4}>  
        <Row>
            <Col xs={6}>
            
            <div style={{ height: '250px', }}>
                <img style={{ height: "100%", objectFit: "cover", width: "100%", borderRadius: '10px' }} src="../public/Bandung.jpg" alt="" />
              </div>
            
            </Col>

            <Col xs={6}>
            <div style={{ textAlign: 'start' }}>
                <h3>Pantai Carocok</h3>
                <Button variant="primary">Primary</Button>{' '}
              </div>
            </Col>
          </Row>
          </Col>


          <Col sm={4}>  
        <Row>
            <Col xs={6}>
            
            <div style={{ height: '250px', }}>
                <img style={{ height: "100%", objectFit: "cover", width: "100%", borderRadius: '10px' }} src="../public/Bandung.jpg" alt="" />
              </div>
            
            </Col>

            <Col xs={6}>
            <div style={{ textAlign: 'start' }}>
                <h3>Pantai Carocok</h3>
                <Button variant="primary">Primary</Button>{' '}
              </div>
            </Col>
          </Row>
          </Col>

       
          <Col sm={4}>  
        <Row>
            <Col xs={6}>
            
            <div style={{ height: '250px', }}>
                <img style={{ height: "100%", objectFit: "cover", width: "100%", borderRadius: '10px' }} src="../public/Bandung.jpg" alt="" />
              </div>
            
            </Col>

            <Col xs={6}>
            <div style={{ textAlign: 'start' }}>
                <h3>Pantai Carocok</h3>
                <Button variant="primary">Primary</Button>{' '}
              </div>
            </Col>
          </Row>
          </Col>


      </Row>
    </Container> 

    </div>

    

   </LayoutWeb >

   </React.Fragment>
  );
}

export default VariableWidth;
