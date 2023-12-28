import React, {useEffect} from 'react';
import Layout from '../components/Layout/Layout';
import AOS from 'aos'; // Import AOS library
import 'aos/dist/aos.css'; // Import AOS styles
import ArtGalleryImage from '../images/artgallery.jpg';
import ArtExhibitionImage from '../images/Exhibition.jpg';
import VastPlatformImage from '../images/vast.jpg';

const About = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS on component mount
  }, []);
  return (
    <Layout>
      <section id="artist" className="artist section-padding" 
      style={{ backgroundColor: ' rgb(139, 123, 109)' }}>
        <div className="container">
          <div className="row">
            {/* Section 1: About Art Galleries */}
            <div className="col-lg-4 col-md-12 col-12 order-lg-1" data-aos="fade-up">
              <div className="artist-img">
                <img src={ArtGalleryImage} alt="" className="img-fluid" />
              </div>
            </div>
              <div className="col-lg-8 col-md-12 col-12 ps-lg-5 mt-md-5" data-aos="fade-left">
                <div className="artist-text">
                  <h2 className="yellow-text">Explore a World of Art Galleries on Artsy</h2>
                  <p style={{ color: 'white' }}>Embark on a journey through the vibrant tapestry of global artistry at Artsy. Our platform is a portal to a curated collection of masterpieces from renowned art galleries worldwide. Here, we bridge the gap between art enthusiasts and galleries, creating a boundless space for you to immerse yourself in diverse artistic expressions.</p>
                </div>
              </div>
            </div>
          </div>
          {/* Add spacing between sections */}
          <div className="spacer"></div>
          <div className="container">
            <div className="row">
                {/* Section 2: About Art Exhibitions */}
              <div className="col-lg-8 col-md-12 col-12 order-lg-2 ps-lg-5 mt-md-5"     data-aos="fade-left">
                <div className="artist-text">
                  <h2 className="yellow-text">Immerse in Art Exhibitions <br />with Us</h2>
                  <p style={{ color: 'white' }}>Embark on a transformative journey through the tangible and captivating world of physical art exhibitions with Artsy. Our commitment to artistic exploration extends beyond the digital realm, as we curate and present awe-inspiring exhibitions in renowned galleries and cultural spaces around the globe.</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 col-12 order-lg-1" data-aos="fade-up">
                <div className="artist-img">
                  <img src={ArtExhibitionImage} alt="" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
          {/* Add spacing between sections */}
          <div className="spacer"></div>
          <div className="container">
            <div className="row">
              {/* Section 3: About the Vast Platform */}
              <div className="col-lg-4 col-md-12 col-12 order-lg-3" data-aos="fade-up">
                <div className="artist-img">
                  <img src={VastPlatformImage} alt="" className="img-fluid" />
                </div>
              </div>
            <div className="col-lg-8 col-md-12 col-12 order-lg-2 ps-lg-5 mt-md-5" data-aos="fade-left">
              <div className="artist-text">
                <h2 className="yellow-text">Art Without Boundaries</h2>
                <p style={{ color: 'white' }}>Embark on a transformative journey through Artsy—a global artistic haven where diverse expressions converge. Explore curated art galleries from renowned institutions, immerse yourself in physical exhibitions that tell unique stories, and join a vast community of artists, collectors, and enthusiasts from around the world.</p>
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

export default About;