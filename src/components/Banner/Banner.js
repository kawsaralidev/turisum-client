import React from 'react';
import { Carousel } from 'react-bootstrap';
import Banners1 from "../../images/image/Banners1.jpg";
import Banners2 from "../../images/image/Banners2.jpg";
import Banners3 from "../../images/image/Banners3.jpg";

const Banner = () => {

    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Banners1}
                        alt="first slide"
                    />
                    <Carousel.Caption>
                        <h3 className="fs-1 f-bold">Welcome To Travel Turism Bangladesh</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block h-25 w-100"
                        src={Banners2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3 className="fs-1 f-bold">Historic LandMarks</h3>
                        <p>Its dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block h-25 w-100"
                        src={Banners3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3 className="fs-1 f-bold">Your Journey Beings</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
};
// https://i.ibb.co/wWS3dss/Banners1.jpg
export default Banner;