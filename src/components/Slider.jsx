import React from 'react';
import Slider from 'react-slick';
import './Slider.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import product1 from "../assets/slider/слайдер1.png";
import product2 from "../assets/slider/слайдер2.png";
import product3 from "../assets/slider/слайдер3.png";
import product4 from "../assets/slider/слайдер4.png";

const images = [
    product1, product2, product3, product4
];

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
}


const SliderComponent = () => {
    return (
        <div className={'slider-flex'}>
            <div className="slider-container">
                <Slider {...settings}>
                    {images.map((image, i) => (
                        <div key={i} className="slider-image-container">
                            <div className={'slider-fit'}><img className="slider-image" src={image}
                                                               alt={`Slide ${i + 1}`}/></div>
                        </div>
                    ))}
                </Slider>
                <img/>
            </div>
        </div>
    );
};

export default SliderComponent;