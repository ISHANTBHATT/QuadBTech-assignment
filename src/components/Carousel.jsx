import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Ticket from "./ticket";
import {data} from "./data"

const PrevArrow = ({ onClick }) => {
  return (
<button className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10 focus:outline-none inline-flex items-center px-4 py-4 border border-blue-500 bg-white text-blue-500 font-semibold hover:text-white hover:bg-blue-500 hover:border-blue-500 dark:bg-[#1e1f2b]" onClick={onClick}>
  <span className="absolute inset-y-0 left-0 flex items-center px-2.5">
    &lt;
  </span>
</button>
  );
};

const NextArrow = ({ onClick }) => {
  return (

    <button className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10 focus:outline-none inline-flex items-center px-4 py-4 border border-blue-500 bg-white text-blue-500 font-semibold hover:text-white hover:bg-blue-500 hover:border-blue-500 dark:bg-[#1e1f2b]" onClick={onClick}>
    <span className="absolute inset-y-0 left-0 flex items-center px-2.5">
      &gt;
    </span>
  </button>
  );
}

const CardCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ],
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />
  };



  return (
    <Slider {...settings} className=''>
          
            {data.map((item)=>(
                <Ticket id={item.id} title={item.title} img={item.img} date={item.date} location={item.location} button={item.button} />
            ))}
    </Slider>
  );
};

export default CardCarousel;

