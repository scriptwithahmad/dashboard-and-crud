import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";
import { autoplay, autoplaySpeed } from "react-slick";
import Star from "./Star";




function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none" }}
      onClick={onClick}
    />
  );
}



const index = ({ props }) => {
  // console.log(props.review[0].title)
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    focusOnSelect: true,
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 425,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SampleNextArrow />
      }
    }
  ]
  };
  return (
    <>
      <div className="col-carousel-flex">
        <Slider className="carousel-slider" {...settings}>
          {props?.review?.map((v) => {
            return (
              <div key={v._id}>
                {console.log(v.title)}
                <div className="carousel-border-card">
                  <div>
                    <h2 className="title">{v.title}</h2>
                  </div>
                  <div className="rating-stars">
                    <i class="fa-sharp fa-solid fa-star"></i>
                    <i class="fa-sharp fa-solid fa-star"></i>
                    <i class="fa-sharp fa-solid fa-star"></i>
                    <i class="fa-sharp fa-solid fa-star"></i>
                    <i class="fa-sharp fa-solid fa-star"></i>
                  </div>
                  <div>
                    <p className="desc">{v.desc}</p>
                  </div>
                  <div className="col-carousel-createdAt">
                    <p> {new Date(v.createdAt).toDateString()} </p>
                    <span>Sir Ali</span>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </>
  );
};

export default index;
