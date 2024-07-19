// Import hook from React
import React, { useEffect, useState } from "react";

// Import layout web
import LayoutWeb from "../../../layouts/Web";

// Import BASE URL API
import Api from "../../../api";

import { Link } from "react-router-dom";
// Import pagination component
import PaginationComponent from "../../../components/utilities/Pagination";



function Datapengaduan() {
    // Title page
    document.title = "Places - SIPANTAI";

    // State pengaduan
    const [pengaduandata, setPengaduans] = useState([]);

    // State currentPage
    const [currentPage, setCurrentPage] = useState(1);

    // State perPage
    const [perPage, setPerPage] = useState(0);

    // State total
    const [total, setTotal] = useState(0);

    // Function "datapengaduan"
    const fetchDataPengaduan = async (pageNumber) => {
        // Define variable "page"
        const page = pageNumber ? pageNumber : currentPage;

        // Fetching Rest API
        await Api.get(`/api/web/pengaduan?page=${page}`)
            .then((response) => {
                // Set data to state "places"
                setPengaduans(response.data.data.data);
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
        fetchDataPengaduan();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

   
    return (
        <React.Fragment>
            <LayoutWeb>


                <div className="container mt-80 mb-100">
                    <div className="row">
                        {pengaduandata.length > 0
                            ? pengaduandata.map((Pengaduan, index) => (
                                <div className="col-md-6 mb-3" key={index}>
                                    <Link to="#" className="text-decoration-none text-dark">
                                        <div className="card border-0 rounded shadow-sm " >
                                            <div className="row g-0">
                                                <div className="col-xl-4 col-md-4 col-4">
                                                    <img
                                                        src={Pengaduan.image}
                                                        className="img-fluid rounded-start"
                                                        alt="Pengaduan"
                                                        style={{ width: "100%", height: "200px", objectFit: "cover" }}
                                                    />
                                                </div>
                                                <div className="col-xl-8 col-md-8 col-8 shadow-lg rounded">
                                                    <div className="card-body">
                                                        <h5 className="card-title">{Pengaduan.title}</h5>
                                                        <hr />
                                                        <p className="card-" style={{
                                                            WebkitLineClamp: 2,
                                                            WebkitBoxOrient: 'vertical',
                                                            overflow: 'hidden',
                                                            display: '-webkit-box',


                                                        }}>
                                                            <i className="fa fa-map-marker"></i> {Pengaduan.content}
                                                        </p>
                                                     
                                                 <Link to={`/datapengaduan/detail/${Pengaduan.id}`} >
                                                        <button
                                                            style={{ float: "right" }}
                                                            className="btn btn-danger mb-1 btn-sm">Detail
                                                        </button> 
                                                        </Link>
                                                        
                                                        </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>

                                </div>
                            ))
                            : <div className="alert alert-danger border-0 rounded shadow-sm" role="alert">
                                <strong>Opps...!</strong> Data Belum Tersedia!.
                            </div>
                        }
                    </div>


                    <PaginationComponent
                        currentPage={currentPage}
                        perPage={perPage}
                        total={total}
                        onChange={(pageNumber) => fetchDataPengaduan(pageNumber)} // Pastikan memanggil fetchDataPengaduan
                        position="center"
                    />
                </div>





            </LayoutWeb>
        </React.Fragment>
    );
}

export default Datapengaduan;
