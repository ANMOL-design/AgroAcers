import React from 'react'
import SellProduct from '../AgroShop/AgroShopSubComponents/ProductSubscribe';
import CrousalBanner from './Crousal';
import MyLocalWeather from './WeatherAPI/weather';

class Home extends React.Component{

    render(){
        return(
            <>
                <CrousalBanner />
                <h1>welcome to Home</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur praesentium odio laudantium, enim error veniam tempore hic fuga eligendi? Unde magnam ut culpa exercitationem illo beatae nulla repellat recusandae optio.</p>

                {/* weather API  */}
                <MyLocalWeather />

                {/* Subscribe  */}
                <SellProduct />
            </>
        );
    }
}
export default Home;