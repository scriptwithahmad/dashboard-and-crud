import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class MultipleItems extends Component {


  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 2,
    };
    return (
      <div>
        <h2> Multiple items </h2>
        <Slider {...settings} className="new-card-main slide-on-hover-slider">
          <div className="box">
          <img src="https://edify.pk/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fconnecttoqadir%2Fimage%2Fupload%2Fv1687848978%2FedifyBlog%2Fw6rfdbyssuqjtuerh4pv.png&w=640&q=75"></img>
            <h3>hye</h3>
          </div>
          <div className="box">
          <img src="https://edify.pk/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fconnecttoqadir%2Fimage%2Fupload%2Fv1687848978%2FedifyBlog%2Fw6rfdbyssuqjtuerh4pv.png&w=640&q=75"></img>

          </div>
          <div className="box">
          <img src="https://edify.pk/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fconnecttoqadir%2Fimage%2Fupload%2Fv1687848978%2FedifyBlog%2Fw6rfdbyssuqjtuerh4pv.png&w=640&q=75"></img>
          </div>
          <div className="box">
          <img src="https://edify.pk/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fconnecttoqadir%2Fimage%2Fupload%2Fv1687848978%2FedifyBlog%2Fw6rfdbyssuqjtuerh4pv.png&w=640&q=75"></img>
          </div>
          <div className="box">
          <img src="https://edify.pk/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fconnecttoqadir%2Fimage%2Fupload%2Fv1687848978%2FedifyBlog%2Fw6rfdbyssuqjtuerh4pv.png&w=640&q=75"></img>
          </div>
        </Slider>
      </div>
    );
  }
}
