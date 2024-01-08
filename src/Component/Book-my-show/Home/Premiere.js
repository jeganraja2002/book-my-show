import React from "react";
import Slider from "react-slick";
import { useSelector } from "react-redux/es/hooks/useSelector";

const Premiere = () => {

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
    <section className="Premiere py-sm-3 mt-sm-4">
        <div className="container">  
            <img src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-banner-web-collection-202208191200.png" alt="img" className="w-sm-100"/>    
            <h2>Premiere</h2>
            <p>Brand new releases every Friday</p>
            <Slider {...settings}>
                {read.Premier.map((e,i)=>(
                    <div key={i} className="p-sm-1">
                        <img src={e.img} alt="img" className="w-sm-100 pointer" style={{borderRadius:"10px"}}/>
                        <div className="mt-lg-1">
                            <h4>{e.title}</h4>
                            <p>{e.name}</p>
                        </div>
                    </div>
                ))}
             </Slider>   

        </div>
    </section>
    )
}

export default Premiere