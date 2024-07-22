import React, { useState, useEffect } from "react";
import LayoutWeb from "../../../layouts/Web";
import Slider2 from '../../../components/web/Slider';
import Api from "../../../api";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardSlider from "../../../components/utilities/CardSlider";
import { Link } from "react-router-dom";

function Categories() {
  // const styles = {
  //   card: {
  //     width: "200px",
  //     height: "250px",
  //     textAlign: 'center',
  //   },
  //   img: {
  //     height: "100%", objectFit: "cover", width: "100%", borderRadius: '10px'
  //   }
  // };

  // const categoryDefault = [
  //   { name: 'Hotel ', images: ['/public/bandung2.jpg', '/public/bandung2.jpg', '/public/bandung2.jpg', '/public/bandung2.jpg', '/public/bandung2.jpg'] },
  //   { name: 'Wisata', images: ['/public/bandung2.jpg', '/public/bandung2.jpg', '/public/bandung2.jpg', '/public/bandung2.jpg', '/public/bandung2.jpg'] },
  //   { name: 'Rumah ', images: ['/public/bandung2.jpg', '/public/bandung2.jpg', '/public/bandung2.jpg', '/public/bandung2.jpg', '/public/bandung2.jpg'] }
  // ];

  document.title = "SIPANTAI - PUSAT LAYANAN SATU PINTU DAN INFORMASI” SEBAGAI INOVASI KREATIF PARIWISATA KABUPATEN PESISIR SELATAN";

  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchDataCategories();
  }, []);

  const fetchDataCategories = async () => {
    try {
      // const { data } = await Api.get(`/api/web/categories/`);
      const response = await fetch('https://backend-sipantai2.rakis.my.id/api/web/categories');
      const data = await response.json();

      console.log(data.data);

      if (!data) {
        console.log(await response.text());
        return;
      }
      setCategories(data.data.reverse());
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setError(error);
      setIsLoading(false);
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


 // Ketika OFfLINE
  const defaultImage = (
    <React.Fragment>
      <LayoutWeb>
      <div className="mt-75 mb-75">
      <h3 className="text-white">Loading data...</h3>
    </div>
      </LayoutWeb>
    </React.Fragment>
  );

  if (isLoading || error) {
    return defaultImage;
  }

  return (
    <React.Fragment>
      <LayoutWeb>
        <div className="mt-75 mb-75">
          {categories.map((category, index) => (
            <div className="mx-3 mt-3 slider-mobile" key={index}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }} className="text-white">
                <p className="text-white">KATEGORI: <strong className="text-uppercase text-white">{category.name}</strong></p>
                
                
                <Link style={{marginRight:"10px", textDecorationColor: "none", color: 'white'}} to={`/category/${category.name}`}><p  >Lainnya...</p></Link>
              </div>
              <div className="slider-container ">
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
          ))}
        </div>
      </LayoutWeb>
    </React.Fragment>
  );
}

export default Categories;
