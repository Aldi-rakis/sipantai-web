import React from "react";
import LayoutWeb from "../../../layouts/Web";
import { Link } from "react-router-dom";
import Slider from '../../../components/web/Slider';

function Home() {


  const styles = {
    text: {
      borderRadius: 8,
      background: 'linear-gradient(0deg, #867AD2 0%, #494080 100%)',
      fontFamily: 'Inter, sans-serif',
      fontWeight: '200' ,// semi-bold
      padding: 10,
      textDecoration: 'none',// remove underline
      
    }
  };

  return (
    <React.Fragment>
      <LayoutWeb>
        <Slider />
        <div className="container  mb-75">
          <div className="row mt-3 text-center">
            <div className="col-md-12">
              <button className="btn btn-primary">Explore Now</button>
            </div>
          </div>
          <div className="row mt-minus-87">
            <div className="col-md-12">
              <div className="card border-0 rounded shadow-xl">
                <div className="card-body">
                  <h5>
                    <i className="fa fa-search"></i> FIND YOUR FAVORITE PLACE
                  </h5>
                  <p>Find your favorite place to vacation with your family!</p>
                  <hr />
                  <input type="text" className="form-control" placeholder="find your destination here..." />
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center mt-4 text-white mx-auto">
          <Link as={Link} to="/berita" style={{textDecoration: 'none'}} className=" mx-auto text-white px-0">   <h3 className="bg-dark mt-2  py-3" style={styles.text}> Kaba Nagari</h3></Link>
          
          <Link as={Link} to="/categories" style={{textDecoration: 'none'}} className=" mx-auto text-white px-0">   <h3 className="bg-dark mt-2  py-3" style={styles.text}>Halaman Utama</h3></Link>
          

            <Link as={Link} to="/pengaduan" style={{textDecoration: 'none'}} className=" mx-auto text-white px-0">   <h3 className="bg-dark mt-2  py-3" style={styles.text}>Pusat Pengaduan</h3></Link>
          
          </div>
        </div>
      </LayoutWeb>
    </React.Fragment>
  );
}

export default Home;
