import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Api from "../../../api";
import Cookies from "js-cookie";
import toast from "react-hot-toast";
import LayoutAdmin from "../../../layouts/Admin";
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
// Import layout web
import LayoutWeb from "../../../layouts/Web";

const Detaildatapengaduan = () => {
    const { id } = useParams();
    const [pengaduan, setPengaduan] = useState(null);
    const [balasan, setBalasan] = useState("");
    const [image, setImage] = useState(null);
    const token = Cookies.get("token");

    useEffect(() => {
        const fetchPengaduan = async () => {
            try {
                const response = await Api.get(`/api/web/pengaduan/${id}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setPengaduan(response.data.data);
               
            } catch (error) {
                toast.error("Gagal memuat detail pengaduan.");
            }
        };

        fetchPengaduan();
    }, [id, token]);

  
    if (!pengaduan) {
        return <h1>Loading...</h1>;
    }

    return (
        <LayoutWeb>
        <div> 

        <div className="container mt-80">
            <h2 className="text-white">Detail Pengaduan</h2>
            <div className="card">
                <div className="card-body">

                    <p className="card-text">{pengaduan.content}</p>
                    <PhotoProvider>
                        <PhotoView src={pengaduan.image}>
                            <img
                                src={pengaduan.image}
                                width={300}
                            />
                        </PhotoView>
                    </PhotoProvider>
                </div>
            </div>
        </div>


        <div style={{width: "90%", float: "right"}} className="container mt-1">
            <h2 className="text-white">Balasan</h2>
            {pengaduan.pengaduan_detail.map((detail, index) => (
            <div className="card" key={index}>
                <div className="card-body">

                            <p>{detail.content}</p>
                    
                   <div > 
                    <PhotoProvider>
                        <PhotoView src={detail.image}>
                            <img style={{width: "100px", height: "100px"}}
                                src={detail.image}
                                width={200}
                                
                            />
                        </PhotoView>
                    </PhotoProvider>
                    </div>
                </div>
            </div>
             ))}
        </div>

        

        </div>
        </LayoutWeb>

    );
};

export default Detaildatapengaduan;
