import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'

import image1 from '../../Images/crousal/image-6.jpg'
import image2 from '../../Images/crousal/10.jfif'
import image3 from '../../Images/crousal/image-5.jpg'
class CrousalBanner extends React.Component{

    render(){
        return( 
            <>
            <div className="crousal-banner-container">
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block img-fluid  w-100" src={image1} alt="First slide"/>
      <div class="carousel-caption d-none d-md-block">
    <h5>Our Mission</h5>
    <p>Help farmers</p>
  </div>
    </div>
    <div className="carousel-item">
    <img className="d-block img-fluid  w-100" src={image2} alt="First slide"/>
    </div>
    <div className="carousel-item">
    <img className="d-block img-fluid  w-100" src={image3} alt="First slide"/>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
            </div>
            </>
        );
    }
}
export default CrousalBanner;
