import React from 'react';
import {Link } from 'react-router-dom';
import { AiFillHome } from "react-icons/ai";
import { FaEnvelope } from "react-icons/fa6";
import { FaPhoneAlt, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import { IoMdPrint } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";



const Footer = () => {
  return (
    <>
      <footer className="bg-dark text-white pt-5 pb-4">
        <div className="container text-center text-md-left">
          <div className="row text-center text-md-left">
            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto">
              <h5 className="text-uppercase mb-4 font-weight-bold text-warning"><span>Art</span>sy</h5>
              <p>Artsy is a digital platform dedicated to the buying and selling of art,
                 providing a unique and vibrant marketplace for artists, collectors, and art enthusiasts.</p>
            </div>
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
              <h5 className=" mb-4 font-weight-bold text-warning"> Paintings</h5>
              <p>
                <Link to="/" className="text-white" style={{ textDecoration: 'none' }}>Abstract Art</Link>
              </p>
              <p>
                <Link to="/" className="text-white" style={{ textDecoration: 'none' }}>Landscape Art</Link>
              </p>
              <p>
                <Link to="/" className="text-white" style={{ textDecoration: 'none' }}>Impressionism</Link>
              </p>
              <p>
                <Link to="/" className="text-white" style={{ textDecoration: 'none' }}>Texture Art</Link>
              </p>
            </div>
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
              <h5 className=" mb-4 font-weight-bold text-warning">Photographs</h5>
              <p>
                <Link to="/" className="text-white" style={{ textDecoration: 'none' }}>Aestrography</Link>
              </p>
              <p>
                <Link to="/"  className="text-white" style={{ textDecoration: 'none' }}>Nature</Link>
              </p>
              <p>
                <Link to="/"  className="text-white" style={{ textDecoration: 'none' }}>Architectural</Link>
              </p>
              <p>
                <Link to="/"  className="text-white" style={{ textDecoration: 'none' }}>Potraits</Link>
              </p>
            </div>
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
              <h5 className=" mb-4 font-weight-bold text-warning">Your Account</h5>
              <p>
                <Link to="/"  className="text-white" style={{ textDecoration: 'none' }}>Privacy Policy</Link>
              </p>
              <p>
                <Link to="/" className="text-white" style={{ textDecoration: 'none' }}>Shipping rate</Link>
              </p>
              <p>
                <Link to="/"  className="text-white" style={{ textDecoration: 'none' }}>Help</Link>
              </p>
            </div>
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
              <h5 className=" mb-4 font-weight-bold text-warning">Contact</h5>
              <p>
                <AiFillHome /> <i className=" text-white mr-3"></i >  New York, NY 2333, US
              </p>
              <p>
                <FaEnvelope /> <i className=" text-white mr-3"></i>Artsy@gmail.com
              </p>
              <p>
                <FaPhoneAlt /> <i className=" text-white mr-3"></i>+92 333768363
              </p>
              <p>
              <IoMdPrint />  <i className=" text-white mr-3"></i>+01 335 633 77
              </p>
            </div>
          </div>
          <hr className="mb-4" />
          <div className="row-align-items-center">
            <div className="col-md-7 col-lg-8">
            <h4 className='text-center'>
                All Right Reserved &copy; <span className='yellow-text'>Art</span>sy
             </h4>
            </div>
            <div className="col-md-5 col-lg-4">
              <div className="text-center text-md-right">
                <ul className="list-unstyled list-inline">
                  <li className="list-inline-item">
                    <Link to="/"  className="btn-floating btn-sm text-white" style={{ fontSize: '23px'}}>
                    <FaFacebook />
                    <i className="fa-brands fa-facebook"></i></Link>
                  </li>
                  <li className="list-inline-item">
                    <Link to="/"  className="btn-floating btn-sm text-white" style={{ fontSize: '23px'}}>
                    <FaTwitter />
                    <i className="fa-brands fa-twitter"></i></Link>
                  </li>
                  <li className="list-inline-item">
                    <Link to="/"  className="btn-floating btn-sm text-white" style={{ fontSize: '23px'}}>
                    <FaLinkedin />
                    <i className="fa-brands fa-linkedin"></i></Link>
                  </li>
                  <li className="list-inline-item">
                    <Link to="/"  className="btn-floating btn-sm text-white" style={{ fontSize: '23px'}}>
                    <AiFillInstagram />
                    <i className="fa-brands fa-instagram"></i></Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;