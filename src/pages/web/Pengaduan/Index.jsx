import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LayoutWeb from "../../../layouts/Web";
import Form from 'react-bootstrap/Form';
import Api from "../../../api";
import Cookies from "js-cookie";
import toast from "react-hot-toast";

function Pengaduanweb() {
    document.title = "SIPANTAI - PUSAT LAYANAN SATU PINTU DAN INFORMASI” SEBAGAI INOVASI KREATIF PARIWISATA KABUPATEN PESISIR SELATAN";

    const [content, setContent] = useState("");
    const [title, setTitle] = useState("");
    const [image, setImage] = useState(null);
    const token = Cookies.get("token");
    const navigate = useNavigate(); // Initialize useNavigate

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("content", content);
        formData.append("title", title);
        if (image) {
            formData.append("image", image);
        }

        try {
            const response = await Api.post("/api/admin/pengaduan", formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "multipart/form-data",
                },
            });

            if (response.data.success) {
                toast.success("Pengaduan berhasil dikirim!");
                setContent("");
                setTitle("");
                setImage(null);
                navigate('/'); // Redirect to home page
            } else {
                toast.error("Gagal mengirim pengaduan.");
            }
        } catch (error) {
            toast.error("Isi semua data form saat mengirim pengaduan.");
        }
    };

    return (
        <React.Fragment>
            <LayoutWeb>
                <div className="container mt-75 text-white font-bold">
                    <h2 className="text-center mb-">Laporkan Pengaduan</h2>

                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="title">
                            <Form.Label>Judul</Form.Label>
                            <Form.Control 
                                size="sm" 
                                type="text" 
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                placeholder="Isi Judul Pengaduan"
                                required 
                                style={{ color: 'black', background: 'white', borderRadius: '3px' }}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="content">
                            <Form.Label>Deskripsi</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={5}
                                value={content}
                                onChange={(e) => setContent(e.target.value)}
                                placeholder="Isi Deskripsi Pengaduan"
                                required
                                style={{ color: 'black', background: 'white', borderRadius: '3px' }}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="image">
                            <Form.Label>Upload Gambar (opsional)</Form.Label>
                            <Form.Control
                                type="file"
                                className="form-control"
                                onChange={(e) => setImage(e.target.files[0])}
                                accept="image/*"
                            />
                        </Form.Group>

                        <div className="d-grid mx-auto mb-75">
                            <button className="btn btn-danger" type="submit">Submit</button>
                        </div>
                    </Form>
                </div>
            </LayoutWeb>
        </React.Fragment>
    );
}

export default Pengaduanweb;
