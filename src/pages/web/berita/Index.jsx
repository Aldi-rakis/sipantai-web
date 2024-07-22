import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import LayoutWeb from "../../../layouts/Web";
import React from "react";




function Berita() {
  return (
    <React.Fragment>
      <LayoutWeb>

        <Row xs={1} md={2} className="g-4 mx-auto mt-65 mb-100 ">
          {Array.from({ length: 3 }).map((_, idx) => (
            <Col key={idx}>
              <Card>
                <div > <p
                style={{position: "absolute" ,backgroundColor: "white",padding:"5px",borderRadius: "5px", fontWeight: "Bold", bottom: "150px", right: "16px"}}>29 April 2021</p>
                  <Card.Img variant="bottom" src="/bandung2.jpg"
                    /> 
                </div>
                <Card.Body>
                  <Card.Title>Banyak Korban jiwa akibar risuh terjadi di kantol wali nagari painan</Card.Title>
                  <Card.Text style={{
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                    display: '-webkit-box',
                    maxWidth: '100%',
                    textAlign: 'justify'
                  }}>
                    This is a longer card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.longer card with supporting text below as a natural
                    lead-in to additional content. This content is a little bitlonger card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                  </Card.Text>

                 

                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </LayoutWeb>
    </React.Fragment>
  );
}

export default Berita;