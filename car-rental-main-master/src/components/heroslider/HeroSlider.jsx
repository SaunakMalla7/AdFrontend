import React from 'react';

import Slider from 'react-slick';
import { Container } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const HeroSlider = () => {
  const settings = {
    fade: true,
  };
  return (
    <Slider {...settings} className="hero__slider">
      <div className="slider__item slider__item-01 mt0">
        <Container>
          <div className="slider__content ">
            <h4 className="text-light mb-3">Get the best prices with us</h4>
            <h1 className="text-light mb-4">Rent a car with us today</h1>

            <Button className="navbar__buttons__logout">
              <Link to="/cars" className="text-white text-decoration-none">
                Rent Now
              </Link>
            </Button>
          </div>
        </Container>
      </div>
    </Slider>
  );
};

export default HeroSlider;
