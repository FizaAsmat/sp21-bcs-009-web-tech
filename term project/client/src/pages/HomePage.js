import React, {useEffect} from 'react';
import AOS from 'aos'; // Import AOS library
import 'aos/dist/aos.css'; // Import AOS styles
import Layout from '../components/Layout/Layout';
import {Link} from 'react-router-dom';
import Image1 from '../images/Image1.jpg';
import Image2 from '../images/Image2.jpg'
import Image3 from '../images/Image3.jpg'
import AbstractImage from '../images/abstract.jpeg';
import LandscapeImage from '../images/landscape.jpeg';
import PortraitImage from '../images/potrait.jpeg';
import ArtistImage from '../images/artist.jpeg';


const HomePage = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS on component mount
  }, []);
  return (
    <Layout>
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={Image1} className="d-block w-100" alt="..." />
            <div className="carousel-caption">
              <h5>Creating Dreams on Canvas</h5>
              <p>Step into the world of artistic creation as our talented painters breathe life into their masterpieces.</p>
              <p><Link to="/" className="btn btn-warning mt-3">Learn more</Link></p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={Image2} className="d-block w-100" alt="..." />
            <div className="carousel-caption">
              <h5>Art That Transforms</h5>
              <p>Elevate your living space with captivating artwork that adds depth and character to any room.</p>
              <p><Link to="/" className="btn btn-warning mt-3">Learn more</Link></p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={Image3} className="d-block w-100" alt="..." />
            <div className="carousel-caption">
              <h5>Nature's Masterpieces</h5>
              <p>Immerse yourself in nature's beauty through these stunning paintings that capture the essence.</p>
              <p><Link to="/" className="btn btn-warning mt-3">Learn more</Link></p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <section className="art section-padding" id="art">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-header text-center pb-5">
                <h2>Discover Art you Love from our gallery</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-12 col-lg-4" data-aos="fade-up-right">
              <div className="card text-center bg-white pb-2">
                <div className="card-body text-dark">
                  <div className="img-area mb-4">
                    <img src={AbstractImage} alt="" className="img-fluid" />
                  </div>
                  <h3 className="title">Abstract Art</h3>
                  <button className="btn bg-warning text-dark">Shop the Collection</button>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-12 col-lg-4" data-aos="fade-up">
              <div className="card text-center bg-white pb-2">
                <div className="card-body text-dark">
                  <div className="img-area mb-4">
                    <img src={LandscapeImage} alt="" className="img-fluid" />
                  </div>
                  <h3 className="title">Landscape</h3>
                  <p></p>
                  <button className="btn bg-warning text-dark">Shop the Collection</button>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-12 col-lg-4" data-aos="fade-up-left">
              <div className="card text-center bg-white pb-2">
                <div className="card-body text-dark">
                  <div className="img-area mb-4">
                    <img src={PortraitImage} alt="" className="img-fluid" />
                  </div>
                  <h3 className="title">Portraits</h3>
                  <p></p>
                  <button className="btn bg-warning text-dark">Shop the Collection</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="artist" className="artist section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-12 col-12" data-aos="fade-up">
              <div className="artist-img">
                <img src={ArtistImage}alt="" className="img-fluid" />
              </div>
            </div>
            <div className="col-lg-8 col-md-12 col-12 ps-lg-5 mt-md-5" data-aos="fade-left">
              <div className="artist-text">
                <h2>Elevate Your Art Career <br/>with Us</h2>
                <p>Join our platform to unlock a world of opportunities for your art. At <b>Artsy</b>, we empower artists 
                  to showcase and sell their work to a global audience. Whether you're a painter, sculptor, photographer,
                  or any other type of artist, our streamlined tools and dedicated support will help you reach art enthusiasts, 
                  collectors, and buyers. We believe in fair compensation and transparency, ensuring you receive the recognition and
                  rewards your talent deserves. Start your journey with us today, and let your art shine on a platform that truly 
                  values and promotes your creativity</p>
                  <Link to="/About" className="btn btn-warning">About Us</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <script>
        AOS.init();
      </script>
    </Layout>
  );
};

export default HomePage;