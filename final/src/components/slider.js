import React from "react";
import './slider.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function Carusel(props) {
    return(
        <div >
        <Carousel dynamicHeight={true} >
            <div className="slide">
                <p className="legend">киги для вас</p>
                <img src="1.jpg" alt="киги для вас"/>
            </div>
            <div className="slide">
                <img src="2.jpg" alt="книги для души"/>
                <p className="legend">книги для души</p>
            </div>
            <div className="slide">
                <img src="3.jpg" alt="у нас большой выбор"/>
                <p className="legend">у нас большой выбор</p>
            </div>
        </Carousel>
        </div>
    )
}

export default Carusel;