import React, {useContext} from "react";
import {useParams} from "react-router-dom";
import {ShopContext} from "../../context/shop-context";
import {PRODUCTS} from "../../products";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./productDetails.css";
import stars from '../../assets/звезди.png'
import bttn from '../../assets/ориг.png'
import bttn2 from '../../assets/рік.png'
export const ProductDetails = () => {
    const {id} = useParams();
    const {addToCart, cartItems} = useContext(ShopContext);

    const cartItemCount = cartItems[id];

    const product = PRODUCTS.find((p) => p.id === Number(id));

    if (!product) {
        return <div>Product not found</div>;
    }

    const {productName, description, productImage, price, imageSlider} = product;

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
    };

    return (
        <div className="product-container">
            <div className="product-image-container">
                <div className="slider-container2">
                    <Slider {...settings}>
                        {imageSlider.map((image, i) => (
                            <div key={i} className="slider-image-container">
                                <div className={'slider-fit'}>
                                    <img src={image}
                                         alt={`Slider Image ${i + 1}`}
                                         key={i}
                                         className="product-image"/>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
            <div className="product-details-container">

                <div className="product-details">
                    <div>
                        <div className={"product-location"}>
                            <div>
                                <h1 className="product-name">{productName}</h1>
                            </div>
                            <div>
                                <p>
                                    <b>Ціна:</b> {price} грн
                                </p>
                            </div>
                            <div>
                                <button className="addToCartBttn2" onClick={() => addToCart(id)}>
                                    Купити {cartItemCount > 0 && <> ({cartItemCount})</>}
                                </button>
                            </div>
                        </div>


                    </div>
                    <div>


                        <div className={'gar-location'}>
                            <div>
                                <img src={stars}/>
                            </div>
                            <div><img src={bttn}/></div>
                            <div><img src={bttn2}/></div>
                        </div>

                    </div>
                    <div>
                        <p>
                            <b>Опис:</b>
                        </p>
                    </div>

                    <p className={'description-text'}>
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
};
