import React from "react";
import { useSelector } from "react-redux";
import Slider from "react-slick";

const Events = () => {

    const read = useSelector(a=>a.book.Arr)

    var settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          }
        ]
      };
    

    return(
        <section className="Events">
            <div className="container">
              <img src="https://fedakila.github.io/Book-my-show-website/static/media/img.933926d9b58612f7ffa0.avif" alt="img" className="w-sm-100 mt-lg-5"/>  
                <h1 className="mt-sm-4">The Best of live Events</h1>
                
                <Slider {...settings}>
                    {read.Liveimg.map((e,i)=>(
                        <div key={i} className="p-sm-1">
                            <img src={e.img} alt="img" className="w-sm-100" style={{borderRadius:"10px"}}/>
                        </div>
                    ))}
                 </Slider>   
    
            </div>
        </section>
    )
}

export default Events