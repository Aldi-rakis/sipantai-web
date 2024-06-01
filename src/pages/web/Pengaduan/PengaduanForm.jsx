import React, { useState } from "react";
import Api from "../../../api";
import Cookies from "js-cookie";
import toast from "react-hot-toast";

const PengaduanForm = () => {
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("content", content);
    formData.append("image", image);

    try {
      const token = Cookies.get("token");
      await Api.post("/api/admin/pengaduan", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });
      toast.success("Pengaduan berhasil dikirim!");
      setContent("");
      setImage(null);
    } catch (error) {
      toast.error("Gagal mengirim pengaduan.");
    }
  };

  return (
    <div>
      <h2>Buat Pengaduan</h2>
      
      <form onSubmit={handleSubmit}>
      <textarea
          value={title}
          onChange={(e) => setContent(e.target.value)}
          placeholder="masukan judul"
          required
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Isi Pengaduan"
          required
        />
        <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
          accept="image/*"
          required
        />
        <button type="submit">Kirim Pengaduan</button>
      </form>
    </div>
  );
};

export default PengaduanForm;
