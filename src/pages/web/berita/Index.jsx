import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import LayoutWeb from "../../../layouts/Web";

// Import hook from React
import React, { useEffect, useState } from "react";

// Import BASE URL API
import Api from "../../../api";

import { Link } from "react-router-dom";
// Import pagination component
import PaginationComponent from "../../../components/utilities/Pagination";


function Berita() {
  // State pengaduan
  const [beritaData, setBeritaData] = useState([]);

  // State currentPage
  const [currentPage, setCurrentPage] = useState(1);

  // State perPage
  const [perPage, setPerPage] = useState(0);

  // State total
  const [total, setTotal] = useState(0);

  // Function "dataBerita"
  const fetchDataBerita = async (pageNumber) => {
    // Define variable "page"
    const page = pageNumber ? pageNumber : currentPage;

    // Fetching Rest API
    await Api.get(`/api/web/berita?page=${page}`)
      .then((response) => {
        // Set data to state "places"
        setBeritaData(response.data.data.data);
        console.log(response.data.data.data);

        // Set currentPage
        setCurrentPage(response.data.data.current_page);

        // Set perPage
        setPerPage(response.data.data.per_page);

        // Total
        setTotal(response.data.data.total);
      });
  };

  // Hook
  useEffect(() => {
    // Call function "fetchDataPlaces"
    fetchDataBerita();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);




  return (
    <React.Fragment>
      <LayoutWeb>

        <Row xs={1} md={2} className="g-4 mx-auto mt-65 mb-100 ">
          {beritaData.map((berita, index) => (
            <Col key={index}>
              <Card>
                <div > <p
                  style={{ position: "absolute", backgroundColor: "white", padding: "5px", borderRadius: "5px", fontWeight: "Bold", bottom: "150px", right: "16px" }}>{berita.waktu_upload}</p>
                  <Card.Img variant="bottom" src={berita.image}
                  />
                </div>
                <Card.Body>
                  <Card.Title>{berita.title}</Card.Title>
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
          ))
          }
        </Row>
        <PaginationComponent
          currentPage={currentPage}
          perPage={perPage}
          total={total}
          onChange={(pageNumber) => fetchDataPengaduan(pageNumber)} // Pastikan memanggil fetchDataPengaduan
          position="center"
        />
      </LayoutWeb>

    </React.Fragment>
  );
}

export default Berita;