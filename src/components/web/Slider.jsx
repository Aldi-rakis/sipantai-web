import React, { useState, useEffect } from "react";
import { Carousel } from "react-bootstrap";
import Api from "../../api";

function Slider() {
    const [sliders, setSliders] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchDataSliders = async () => {
        try {
            const response = await Api.get('/api/web/sliders');
            setSliders(response.data.data);
            setIsLoading(false);
        } catch (error) {
            console.error(error);
            setError(error);
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchDataSliders();
    }, []);

    // Gambar default
    const defaultImage = (
        <div>
            <img src="/public/bandung2.jpg" alt="Default" style={{ width:'100%', height: "400px", objectFit: "cover", borderRadius: 25 }} />
            <div style={{
                position: 'absolute',
                top: '30%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                fontFamily: 'poppins',
                color: '#fff',
                padding: '1px 1px',
                textAlign: 'center',
            }}>
                <h1 style={{ fontSize: 30 }}>Tanya pesel</h1>
                <p className="">Layanan Wisata  1 Pintu Pesisir Selatan</p>
            </div>
        </div>
    );

    if (isLoading || error) {
        return defaultImage; // Tampilkan gambar default saat fetching atau gagal fetching
    }

    return (
        <div>
            <Carousel>
                {sliders.map((slider) => (
                    <Carousel.Item key={slider.id}>
                        <img className="d-block w-100" src={slider.image} style={{ height: "400px", objectFit: "cover", borderRadius: 25 }} alt="Slide" />
                    </Carousel.Item>
                ))}
            </Carousel>

            <div style={{
                position: 'absolute',
                top: '30%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                fontFamily: 'poppins',
                color: '#fff',
                padding: '1px 1px',
                textAlign: 'center',
            }}>
                <h1 style={{ fontSize: 30 }}>Tanya pesel</h1>
                <p style={{fontWeight: "bold"}} className="">Layanan Wisata  1 Pintu Pesisir Selatan</p>
            </div>
        </div>
    );
}

export default Slider;
