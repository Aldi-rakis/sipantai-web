//import hook from react
import React, { useState, useEffect } from "react";

//import layout
import LayoutAdmin from "../../../layouts/Admin";

//import BASE URL API
import Api from "../../../api";

//import hook navigate dari react router dom
import { useNavigate, useParams } from "react-router-dom";

//import js cookie
import Cookies from "js-cookie";

//import toats
import toast from "react-hot-toast";

//import react Quill
import ReactQuill from 'react-quill';

// quill CSS
import 'react-quill/dist/quill.snow.css';

//mapbox gl
import mapboxgl from 'mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

//mapbox gl geocoder
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import Berita from "../../web/berita/Index";



function BeritaxEdit() {

	//title page
    document.title = "Add New Place - Administrator SIPANTAI ";

    //state form
    const [title, setTitle] = useState("-");
  
    const [description, setDescription] = useState("-");
    

    //state image array / multiple
    const [image, setImage] = useState([]);


    //state validation
    const [validation, setValidation] = useState({});

    //token
    const token = Cookies.get("token");

    //navigate
    const navigate = useNavigate();

    //get ID from parameter URL
    const { id } = useParams();

    //function "getCategoryById"
    const getBeritabyId = async () => {

        //get data from server
        const response = await Api.get(`/api/admin/berita/${id}`, {

            //header
            headers: {
                //header Bearer + Token
                Authorization: `Bearer ${token}`,
            }
        });

        //get response data
        const data = await response.data.data

        //assign data to state "name"
        setTitle(data.title);
    };

    //hook useEffect
    useEffect(() => {

        //panggil function "getCategoryById"
        getBeritabyId();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
   
    //function "handleFileChange"
   
     const handleFileChange = (e) => {

        //define variable for get value image data
        const imageData = e.target.files[0]

        //check validation file
        if (!imageData.type.match('image.*')) {

            //set state "image" to null
            setImage('');

            //show toast
            toast.error("Format File not Supported!", {
                duration: 4000,
                position: "top-right",
                style: {
                    borderRadius: '10px',
                    background: '#333',
                    color: '#fff',
                },
            });

            return
        }

        //assign file to state "image"
        setImage(imageData);
    }

    //function "storePlace"
    const storeBerita = async (e) => {
        e.preventDefault();

        //define formData
        const formData = new FormData();

        //append data to "formData"
        formData.append('title', title);
        formData.append('image', image);
        formData.append('description', description);
     
        
        //send data to server
        await Api.post('/api/admin/berita', formData, {
            
            //header
            headers: {
                //header Bearer + Token
                'Authorization': `Bearer ${token}`,
                'content-type': 'multipart/form-data'
            }
            
        }).then(() => {

            //show toast
            toast.success("Data Saved Successfully!", {
                duration: 4000,
                position: "top-right",
                style: {
                    borderRadius: '10px',
                    background: '#333',
                    color: '#fff',
                },
            });

            //redirect dashboard page
            navigate("/admin/berita");

        })
        .catch((error) => {
            
            //set state "validation"
            setValidation(error.response.data);
        })

    }

    

        // eslint-disable-next-line react-hooks/exhaustive-deps
    

    return (
        <React.Fragment>
            <LayoutAdmin>
                <div className="row mt-4 mb-5">
                    <div className="col-12">
                        <div className="card border-0 rounded shadow-sm border-top-success">
                            <div className="card-header">
                                <span className="font-weight-bold"><i className="fa fa-map-marked-alt"></i> Tambahkan Berita </span>
                            </div>
                            <div className="card-body">
                                <form onSubmit={storeBerita}>
                                <div className="mb-3">
                                        <label className="form-label fw-bold">Title</label>
                                        <input type="text" className="form-control" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Enter Title Place"/>
                                    </div>
                                    {validation.title && (
                                        <div className="alert alert-danger">
                                            {validation.title[0]}
                                        </div>
                                    )}
                                    <div className="mb-3">
                                        <label className="form-label fw-bold">Image (<i>select many file</i>)</label>
                                        <input type="file" className="form-control" onChange={handleFileChange} multiple/>
                                    </div>
                                    
                                   
                                    <div className="mb-3">
                                        <label className="form-label fw-bold">Description</label>
                                        <ReactQuill theme="snow" rows="5" value={description} onChange={(content) => setDescription(content)}/>
                                    </div>
                                    {validation.description && (
                                        <div className="alert alert-danger">
                                            {validation.description[0]}
                                        </div>
                                    )}
                                    
                                   
                                    <div className="row">
                                        <div className="col-md-6">
                                       
                                        </div>
                                        <div className="col-md-6">
                                       
                                        </div>
                                      
                                    </div>
                                    <div>
                                        <button type="submit" className="btn btn-md btn-success me-2"><i className="fa fa-save"></i> SAVE</button>
                                        <button type="reset" className="btn btn-md btn-warning"><i className="fa fa-redo"></i> RESET</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </LayoutAdmin>
        </React.Fragment>
    );
}

export default BeritaxEdit;