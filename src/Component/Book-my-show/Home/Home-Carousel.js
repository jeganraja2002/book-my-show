import React from "react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const HomeCarouel = () => {

    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        autoplay:true,
        centerPadding: "60px",
        slidesToShow: 1,
        speed: 500,
        slidesToScroll:1,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    };
      
      const arrImg=[
                {id:1,img:"https://assets-in.bmscdn.com/promotions/cms/creatives/1698931897748_mindfoolvirdasdesktop.jpg"},
                {id:2,img:"https://assets-in.bmscdn.com/promotions/cms/creatives/1700146033284_webpage.jpg"},
                {id:3,img:"https://fedakila.github.io/Book-my-show-website/static/media/caro3.5685a3b24bd65b8d9e69.avif"},
                {id:4,img:"https://assets-in.bmscdn.com/promotions/cms/creatives/1699967097827_bandland1240x300.jpg"},
                {id:5,img:"https://fedakila.github.io/Book-my-show-website/static/media/caro1.21b12a3cb8a9154b4fb7.avif"}
      ]

    return(
        <div className="carousel">
            <Slider {...settings}>
                {arrImg.map((e,i)=>(
                    <div key={i}>
                        <img src={e.img} alt="img" className="w-sm-100"/>
                    </div>
                ))}
            </Slider>
        </div>
    )
}
export default HomeCarouel