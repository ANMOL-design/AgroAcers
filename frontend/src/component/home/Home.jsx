import React from 'react'
import CrousalBanner from './Crousal';
import MyLocalWeather from './WeatherAPI/weather';
import voucherbanner from "../../Images/crousal/voucherbanner.jpg"

class Home extends React.Component{

    render(){
        return(
            <>
                <CrousalBanner />
                <h1>welcome to Home</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur praesentium odio laudantium, enim error veniam tempore hic fuga eligendi? Unde magnam ut culpa exercitationem illo beatae nulla repellat recusandae optio.</p>
                <div className="elfsight-app-e5cc014c-36e2-4b98-888e-d02d7ca2f9f8"></div>
                <MyLocalWeather />
                <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={voucherbanner} className="d-block w-100 img-fluid" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
       <button className='btn btn-success' style={{width:"40%",position:"relative",float:"left"}}>Shop Now</button>
      </div>
    </div>
  </div>
</div>
            </>
        );
    }
}
export default Home;