import React, { Component, useRef, useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const News = () => {
    

  const settings = {
    loop: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    // speed: 1000,
    autoplaySpeed: 500,
    cssEase: "linear",
  };

  const handleModel = () => {
    const modelOpen = document.querySelector('.model')
    console.log(modelOpen)
    modelOpen.style.height = "300px"
    modelOpen.style.width = "400px"
  }

  return (
    <>
      <div className="new-card-main">
        <div className="news-card" onClick={handleModel}>
            <div className="model"></div>
          <Slider
            {...settings}
          >
            <div className="news-images">
              <img src="https://edify.pk/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fconnecttoqadir%2Fimage%2Fupload%2Fv1687848978%2FedifyBlog%2Fw6rfdbyssuqjtuerh4pv.png&w=640&q=75"></img>
            </div>
            <div className="news-images">
              <img src="https://edify.pk/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fconnecttoqadir%2Fimage%2Fupload%2Fv1687848978%2FedifyBlog%2Fw6rfdbyssuqjtuerh4pv.png&w=640&q=75"></img>
            </div>
            <div className="news-images">
              <img src="https://edify.pk/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fconnecttoqadir%2Fimage%2Fupload%2Fv1687848978%2FedifyBlog%2Fw6rfdbyssuqjtuerh4pv.png&w=640&q=75"></img>
            </div>
          </Slider>

          <div className="news-info">
            <h2>
              Mr. Asif Masood from Capilano University Canada Visted Edify Group
              Lahore Office
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Inventore, quas. Repudiandae, nulla illo excepturi autem inventore
              a ipsa aliquid numquam assumenda corrupti eveniet quod modi ea
              repellendus ratione magni, earum animi. Officia, nobis.
            </p>
          </div>
        </div>
        <div className="news-card">
          <Slider
            {...settings}
          >
            <div className="news-images">
              <img src="https://edify.pk/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fconnecttoqadir%2Fimage%2Fupload%2Fv1687848978%2FedifyBlog%2Fw6rfdbyssuqjtuerh4pv.png&w=640&q=75"></img>
            </div>
            <div className="news-images">
              <img src="https://edify.pk/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fconnecttoqadir%2Fimage%2Fupload%2Fv1687848978%2FedifyBlog%2Fw6rfdbyssuqjtuerh4pv.png&w=640&q=75"></img>
            </div>
            <div className="news-images">
              <img src="https://edify.pk/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fconnecttoqadir%2Fimage%2Fupload%2Fv1687848978%2FedifyBlog%2Fw6rfdbyssuqjtuerh4pv.png&w=640&q=75"></img>
            </div>
          </Slider>

          <div className="news-info">
            <h2>
              Mr. Asif Masood from Capilano University Canada Visted Edify Group
              Lahore Office
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Inventore, quas. Repudiandae, nulla illo excepturi autem inventore
              a ipsa aliquid numquam assumenda corrupti eveniet quod modi ea
              repellendus ratione magni, earum animi. Officia, nobis.
            </p>
          </div>
        </div>
        <div className="news-card">
          <Slider
            {...settings}
          >
            <div className="news-images">
              <img src="https://edify.pk/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fconnecttoqadir%2Fimage%2Fupload%2Fv1687848978%2FedifyBlog%2Fw6rfdbyssuqjtuerh4pv.png&w=640&q=75"></img>
            </div>
            <div className="news-images">
              <img src="https://edify.pk/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fconnecttoqadir%2Fimage%2Fupload%2Fv1687848978%2FedifyBlog%2Fw6rfdbyssuqjtuerh4pv.png&w=640&q=75"></img>
            </div>
            <div className="news-images">
              <img src="https://edify.pk/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fconnecttoqadir%2Fimage%2Fupload%2Fv1687848978%2FedifyBlog%2Fw6rfdbyssuqjtuerh4pv.png&w=640&q=75"></img>
            </div>
          </Slider>

          <div className="news-info">
            <h2>
              Mr. Asif Masood from Capilano University Canada Visted Edify Group
              Lahore Office
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Inventore, quas. Repudiandae, nulla illo excepturi autem inventore
              a ipsa aliquid numquam assumenda corrupti eveniet quod modi ea
              repellendus ratione magni, earum animi. Officia, nobis.
            </p>
          </div>
        </div>
        <div className="news-card">
          <Slider
            {...settings}
          >
            <div className="news-images">
              <img src="https://edify.pk/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fconnecttoqadir%2Fimage%2Fupload%2Fv1687848978%2FedifyBlog%2Fw6rfdbyssuqjtuerh4pv.png&w=640&q=75"></img>
            </div>
            <div className="news-images">
              <img src="https://edify.pk/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fconnecttoqadir%2Fimage%2Fupload%2Fv1687848978%2FedifyBlog%2Fw6rfdbyssuqjtuerh4pv.png&w=640&q=75"></img>
            </div>
            <div className="news-images">
              <img src="https://edify.pk/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fconnecttoqadir%2Fimage%2Fupload%2Fv1687848978%2FedifyBlog%2Fw6rfdbyssuqjtuerh4pv.png&w=640&q=75"></img>
            </div>
          </Slider>

          <div className="news-info">
            <h2>
              Mr. Asif Masood from Capilano University Canada Visted Edify Group
              Lahore Office
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Inventore, quas. Repudiandae, nulla illo excepturi autem inventore
              a ipsa aliquid numquam assumenda corrupti eveniet quod modi ea
              repellendus ratione magni, earum animi. Officia, nobis.
            </p>
          </div>
        </div>
        <div className="news-card">
          <Slider
            {...settings}
          >
            <div className="news-images">
              <img src="https://edify.pk/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fconnecttoqadir%2Fimage%2Fupload%2Fv1687848978%2FedifyBlog%2Fw6rfdbyssuqjtuerh4pv.png&w=640&q=75"></img>
            </div>
            <div className="news-images">
              <img src="https://edify.pk/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fconnecttoqadir%2Fimage%2Fupload%2Fv1687848978%2FedifyBlog%2Fw6rfdbyssuqjtuerh4pv.png&w=640&q=75"></img>
            </div>
            <div className="news-images">
              <img src="https://edify.pk/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fconnecttoqadir%2Fimage%2Fupload%2Fv1687848978%2FedifyBlog%2Fw6rfdbyssuqjtuerh4pv.png&w=640&q=75"></img>
            </div>
          </Slider>

          <div className="news-info">
            <h2>
              Mr. Asif Masood from Capilano University Canada Visted Edify Group
              Lahore Office
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Inventore, quas. Repudiandae, nulla illo excepturi autem inventore
              a ipsa aliquid numquam assumenda corrupti eveniet quod modi ea
              repellendus ratione magni, earum animi. Officia, nobis.
            </p>
          </div>
        </div>
        <div className="news-card">
          <Slider
            {...settings}
          >
            <div className="news-images">
              <img src="https://edify.pk/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fconnecttoqadir%2Fimage%2Fupload%2Fv1687848978%2FedifyBlog%2Fw6rfdbyssuqjtuerh4pv.png&w=640&q=75"></img>
            </div>
            <div className="news-images">
              <img src="https://edify.pk/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fconnecttoqadir%2Fimage%2Fupload%2Fv1687848978%2FedifyBlog%2Fw6rfdbyssuqjtuerh4pv.png&w=640&q=75"></img>
            </div>
            <div className="news-images">
              <img src="https://edify.pk/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fconnecttoqadir%2Fimage%2Fupload%2Fv1687848978%2FedifyBlog%2Fw6rfdbyssuqjtuerh4pv.png&w=640&q=75"></img>
            </div>
          </Slider>

          <div className="news-info">
            <h2>
              Mr. Asif Masood from Capilano University Canada Visted Edify Group
              Lahore Office
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Inventore, quas. Repudiandae, nulla illo excepturi autem inventore
              a ipsa aliquid numquam assumenda corrupti eveniet quod modi ea
              repellendus ratione magni, earum animi. Officia, nobis.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default News;
