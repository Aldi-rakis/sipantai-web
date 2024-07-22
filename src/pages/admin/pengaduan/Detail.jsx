import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Api from "../../../api";
import Cookies from "js-cookie";
import toast from "react-hot-toast";
import LayoutAdmin from "../../../layouts/Admin";
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const PengaduanDetailPage = () => {
    const { id } = useParams();
    const [pengaduan, setPengaduan] = useState(null);
    const [balasan, setBalasan] = useState("");
    const [image, setImage] = useState("");
    const token = Cookies.get("token");

    useEffect(() => {
        const fetchPengaduan = async () => {
            try {
                const response = await Api.get(`/api/admin/pengaduan/${id}`, {
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("content", balasan);
        // formData.append("image", image);
        formData.append("pengaduan_id", id);
        formData.append("image", image);

        try {
            await Api.post("/api/admin/pengaduandetail", formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "multipart/form-data",
                },
            });
            toast.success("Balasan berhasil dikirim!");
            setBalasan("");
            setImage(null);
              
            
        } catch (error) {
            toast.error("Gagal mengirim balasan.");
        }

          //redirect dashboard page
          navigate("/admin/sliders");
    };

    if (!pengaduan) {
        return <div>Loading...</div>;
    }

    return (
        <LayoutAdmin>
            <div className="container mt-1">
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


                <div className="mt-3">
    <h4 className="text-white">Balas Pengaduan</h4>
    <form onSubmit={handleSubmit}>
        <div className="mb-">
            <textarea
                id="balasan"
                className="form-control"
                value={balasan}
                onChange={(e) => setBalasan(e.target.value)}
                placeholder="Isi Balasan"
                required
            />
        </div>
        <div className="mb-3">
            <label htmlFor="image" className="form-label">Pilih Gambar (opsional)</label>
            <input
                id="image"
                type="file"
                
                className="form-control"
                onChange={(e) => setImage(e.target.files[0])}
                accept="image/*"
                required
                
                
            />
        </div>
        <button type="submit" className="btn btn-primary mt-3 mb-5">Kirim Balasan</button>
    </form>
</div>


            </div>
        </LayoutAdmin>
    );
};

export default PengaduanDetailPage;
