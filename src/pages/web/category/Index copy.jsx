import React, { useState, useEffect } from "react";
import LayoutWeb from "../../../layouts/Web";
import Slider2 from '../../../components/web/Slider';
import Api from "../../../api";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardSlider from "../../../components/utilities/CardSlider";

function Kategory() {
  const styles = {
    card: {
      width: "200px",
      height: "250px",
      textAlign: 'center',
    },
    img: {
      height: "100%", objectFit: "cover", width: "100%", borderRadius: '10px'
    }
  };

  // Set judul dokumen
  document.title = " SIPANTAI - Website Wisata Berbasis GIS (Geographic Information System)";

  // Variabel state
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Tambahkan state isLoading

  // Ambil data kategori dan tempat wisata
  useEffect(() => {
    fetchDataCategories();
  }, []);

  // Ambil data kategori
  const fetchDataCategories = async () => {
    try {
      const { data } = await Api.get(`/api/web/categories/`);
      // Reverse the order of categories
      setCategories(data.data.reverse());
      setIsLoading(false); // Set isLoading menjadi false setelah data ter-fetch
      
    } catch (error) {
      console.error(error);
      setIsLoading(false); // Set isLoading menjadi false jika terjadi error
    }
  };

  const settings = {
    className: "slider variable-width",
    infinite: true,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    arrows: false
  };

  return (
    <React.Fragment>
      <LayoutWeb>
        {/* Kategori dan Tempat Wisata */}
        <div className="mt-75 mb-75">
          {isLoading ? ( // Tampilkan pesan loading jika isLoading true
            <h1 className="text-white">Loading...</h1>
          ) : (
            categories.length === 0 ? ( // Tampilkan pesan "Data belum ada" jika categories kosong
              <h1 className="text-white">Data belum ada</h1>
            ) : (
              categories.map((category, index) => (
                <div className="mx-3 mt-3" key={index}>
                  <div style={{display: 'flex', justifyContent: 'space-between'}} className="text-white">
                    <h5 className="text-white">KATEGORI: <strong className="text-uppercase text-white">{category.name}</strong></h5>
                    <p>lihat selengkapnya</p>
                  </div>
                  <div className="slider-container">
                    <Slider {...settings}>
                      {category.places.map((place) => (
                        <CardSlider
                          key={place.id}
                          id={place.id}
                          title={place.title}
                          slug={place.slug}
                          images={place.images}
                        />
                      ))}
                    </Slider>
                  </div>
                </div>
              ))
            )
          )}
        </div>
      </LayoutWeb>
    </React.Fragment>
  );
}

export default Kategory;
