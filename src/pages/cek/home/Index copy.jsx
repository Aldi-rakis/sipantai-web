//import hook react
import React, { useEffect, useState } from "react";

//import hook useParams react router dom
import { useParams } from "react-router-dom";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; 

//import BASE URL API
import Api from "../../../api";



function VariableWidth() {
  const settings = {
    className: "slider variable-width",
    dots: true,
    infinite: true,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true


    
  } ;

  return (
    
    <div className="slider-container">
      <Slider {...settings}>
        <div style={{}}>
          <div style={{ border: '25px solid black', width: 200, height: 250, borderRadius: '10px' }} className="bg-black m-2 text-white">
            <p>100</p>
          </div>
        </div>


        <div style={{}}>
          <div style={{ border: '25px solid black', width: 200, height: 250, borderRadius: '10px' }} className="bg-black m-2 text-white">
            <p>100</p>
          </div>
        </div>

         <div style={{}}>
          <div style={{ border: '25px solid black', width: 200, height: 250, borderRadius: '10px' }} className="bg-black m-2 text-white">
            <p>100</p>
          </div>
        </div>

        <div style={{}}>
          <div style={{ border: '25px solid black', width: 200, height: 250, borderRadius: '10px' }} className="bg-black m-2 text-white">
            <p>100</p>
          </div>
        </div>

        <div style={{}}>
          <div style={{  width: 200, height: 250,  }} className=" m-2 text-white">
            <img style={{ height: "100%", objectFit: "cover", width:"100%" , borderRadius: '10px' }} src="../public/Bandung.jpg" alt="" />
            <p style={{textAlign: 'center'}}>Jembatan Akar</p>
          </div>
        </div>

        <div style={{}}>
          <div style={{ border: '25px solid black', width: 200, height: 250, borderRadius: '10px' }} className="bg-black m-2 text-white">
            <p>100</p>
          </div>
        </div>

        <div style={{}}>
          <div style={{ border: '25px solid black', width: 200, height: 250, borderRadius: '10px' }} className="bg-black m-2 text-white">
            <p>100</p>
          </div>
        </div>

        <div style={{}}>
          <div style={{ border: '25px solid black', width: 200, height: 250, borderRadius: '10px' }} className="bg-black m-2 text-white">
            <p>100</p>
          </div>

        </div>
         <div style={{}}>
          <div style={{ border: '25px solid black', width: 200, height: 250, borderRadius: '10px' }} className="bg-black m-2 text-white">
            <p>100</p>
          </div>
        </div>

        <div style={{}}>
          <div style={{ border: '25px solid black', width: 200, height: 250, borderRadius: '10px' }} className="bg-black m-2 text-white">
            <p>100</p>
          </div>
        </div>


        <div style={{ width: 175 }}>
          <p>175</p>
        </div>
      </Slider>
    </div>
  );
}

export default VariableWidth;
