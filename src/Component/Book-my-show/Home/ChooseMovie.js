import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";

const ChooseMovie = () => {

const read = useSelector(a=>a.book.Arr)
const nav = useNavigate()

const handle = (id) => {
    nav(`/Detail/?id=${id}`)
}


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
        <section className="choose">
            <div className="container">
              <h1 className="my-sm-1">Recommended Movies</h1>
                <Slider {...settings}>
                {read.MovieList.map((e,i)=>(
                    <div key={i} className="px-sm-1 rounded">
                        <img src={e.img} alt="img" onClick={()=>{handle(e.id)}} className="w-sm-100 pointer"/>
                        <div className="mt-sm-1 font-sm-1">
                          <h3>{e.title}</h3>
                          <p>{e.name}</p><br/>
                        </div>
                    </div>
                ))}
                </Slider>
            </div>
        </section>
    )
}
export default ChooseMovie