import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import Slider from "react-slick";

const About = () => {
    const [param] = useSearchParams()
    const read = useSelector(a=>a.book.Arr.MovieList)
    const [arr,setArr] = useState([])
    const [about , setAbout] = useState('gffs')

useEffect(()=>{
    if(param.get('id')===null||param.get('id')===undefined) return
    
    else{
        const a = read.find(e=>e.id===Number(param.get('id')))
        setAbout(a.about)
        setArr(a.cast)
    }
//eslint-disable-next-line
},[])

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
        <section className="About mt-sm-3">
            <div className="container">
                <div className="row">
                    <div className="about-the-movie col-sm-12 col-lg-9 mt-sm-3">
                        <h2>About the Movie</h2>
                        <p className="mt-sm-3 font-md-5 font-lg-2">{about}</p>
                    </div>
                    <div className="col-sm-12 col-lg-9 mt-sm-3">                             
                        <h1>Cast</h1>
                        <Slider {...settings}>
                            {arr.map((e,i)=>(
                                <div key={i} className="p-sm-1">
                                  <img src={e.pic} alt="img" className="w-sm-100" style={{borderRadius:"50%"}}/>
                                  <p style={{textAlign:"center"}} className="mt-sm-1">{e.name}</p>
                                  <p style={{color:"gray",textAlign:"center"}}>{e.title}</p>
                                </div>
                            ))}

                        </Slider>
                    </div>
                
                </div>
                <h2 style={{borderTop:"1px solid lightgray"}} className="mt-sm-2 py-sm-2">Reviews</h2>
                <div className="row mt-sm-2 align-items-center col-lg-6 col-sm-12 justify-sm-between p-sm-3" style={{backgroundColor:"white",borderRadius:"5px"}}>
                      <div>
                        <h3>Watched? Add your rating & review</h3>
                        <p className="mt-sm-1" style={{color:"gray"}}>Your ratings matter</p>
                      </div>
                      <div className=" ms-sm-5 ms-md-0 ps-sm-5 ps-md-5 mt-sm-2 mt-md-0">
                        <button className="px-sm-2 py-sm-1" style={{borderRadius:"5px",border:"none",backgroundColor:"#F84464",color:"white"}}>Rate Now</button>
                      </div>
                </div>
            </div>
        </section>
    )
}

export default About