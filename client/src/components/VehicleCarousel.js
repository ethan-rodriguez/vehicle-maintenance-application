import React from "react";
import Carousel from 'react-bootstrap/Carousel'


const VehicleCarousel = () => {

    return (
        <div className="carousel__div">
            <div style={{backgroundColor: 'black'}}> 
                <Carousel interval={null}>
                    <Carousel.Item >
                        <img
                        className="img-responsive center-block"
                        height={300}
                        width={400}
                        src="https://i.ytimg.com/vi/YynaJvyRyRU/maxresdefault.jpg"
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        <h5>First slide label</h5>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item >
                        <img
                        className="img-responsive center-block"
                        height={300}
                        width={400}
                        src="https://i.ytimg.com/vi/YynaJvyRyRU/maxresdefault.jpg"
                        alt="Second slide"
                        />
                        <Carousel.Caption>
                        <h5>Second slide label</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item >
                        <img
                        className="img-responsive center-block"
                        height={300}
                        width={400}
                        src="https://i.ytimg.com/vi/YynaJvyRyRU/maxresdefault.jpg"
                        alt="Third slide"
                        />
                        <Carousel.Caption>
                        <h5>Third slide label</h5>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    );
}

export default VehicleCarousel;