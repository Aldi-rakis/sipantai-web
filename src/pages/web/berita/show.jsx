//import hook react
import React, { useEffect, useState, useRef } from "react";

//import react router dom
import { Link, useParams } from "react-router-dom";

//import layout web
import LayoutWeb from "../../../layouts/Web";

//import BASE URL API
import Api from "../../../api";

//import imageGallery
import ImageGallery from "react-image-gallery";

//import imageGallery CSS
import "react-image-gallery/styles/css/image-gallery.css";

import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';



function BeritaShow() {
    //state place
    const [berita, setBerita] = useState({});
    const { id } = useParams();


    //function "fetchDataPlace"
    const fetchDataBerita = async () => {
        //fetching Rest API
        await Api.get(`/api/web/berita/${id}`).then((response) => {
            //set data to state "places"
            setBerita(response.data.data);
            console.log(response.data.data)

            //set title from state "category"
            document.title = `${response.data.data.title} - Website Wisata Berbasis GIS (Geographic Information System)`;
        });
    };

    //hook
    useEffect(() => {
        //call function "fetchDataBerita"
        fetchDataBerita();


    }, []);

    //=================================================================
    // react image gallery
    //=================================================================


    //=================================================================
    // mapbox
    //=================================================================


    //hook
    useEffect(() => {



    });

    return (
        <React.Fragment>
            <LayoutWeb>
                <div className="container mt-80 mb-75">
                    <div className="row">
                        <div className="col-md-12 mb-4">
                            <div className="card border-0 rounded shadow-sm">
                                <div className="card-body">
                                    <h4>{berita.title}</h4>

                                    <hr />
                                    <PhotoProvider>
                                        <PhotoView src={berita.image}>
                                            <img style={{width: "100%"}}
                                                src={berita.image}
                                                
                                            />
                                        </PhotoView>
                                    </PhotoProvider>
                                    <div
                                        dangerouslySetInnerHTML={{ __html: berita.description }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </LayoutWeb>
        </React.Fragment>
    );
}

export default BeritaShow;
