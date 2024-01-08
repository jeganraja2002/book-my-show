import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa6";
import { MdKeyboardArrowRight } from "react-icons/md";
import { CiShare2 } from "react-icons/ci";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { IoIosPlay } from "react-icons/io";
import Button from '@mui/material/Button';
import { BsDot } from "react-icons/bs";
import './style.css'

const Movie = () => {
    const [param] = useSearchParams()
    const read = useSelector(a=>a.book.Arr.MovieList)
    const [arr,setArr] = useState([])
    const nav = useNavigate()

useEffect(()=>{
    if(param.get('id')===null||param.get('id')===undefined) return
    
    else{
        const a = read.filter(e=>e.id===Number(param.get('id')))
        if(a) setArr(a)
    }
//eslint-disable-next-line
},[param])    
    
const handle = (id) => {
    nav(`/Timing/?id=${id}`)
}


    
    return(
        <>    
        {arr.map((e,i)=>(
            <section style={{background:` linear-gradient(90deg, rgb(26, 26, 26) 24.97%, rgb(26, 26, 26) 38.3%, rgba(26, 26, 26, 0.04) 97.47%, rgb(26, 26, 26) 100%),url(${e.imgBg})`,backgroundRepeat:"no-repeat",backgroundSize:"cover"}} className="detail detail-sm detail-md" key={i}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-sm-12">
                            <div className="trailer">
                                <img src={e.img} alt="img" className="w-sm-100 round"/>
                                <div className="watch font-md-6 font-lg-2"><IoIosPlay /> Trailer</div>
                            </div>
                                <div className="d-lg-none none">
                                    <div className="book-tickets">
                                        <Button  sx={{fontSize:{sm:"30px"},backgroundColor: "#F84464",color:"white",padding:"12px 50px",marginTop:"15px",":hover":{backgroundColor:"#f72249"}}} onClick={()=>handle(e.id)}>Book Tickets</Button>
                                    </div>
                                    <div>
                                        <div className="row mt-sm-2">
                                            <i className="font-md-6"><FaStar /></i>
                                            <h1 className="px-sm-2 font-md-6">{e.rating} / 10</h1>
                                            <span className="font-sm-3 font-md-4">{e.vote} Votes <MdKeyboardArrowRight /></span>
                                        </div>
                                    </div>
                                </div>
                        </div>
                        <div className="col-lg-6 d-sm-none d-lg-block">
                            <div className="p-sm-2">
                                <h1 style={{fontSize:"30px"}}>{e.title}</h1>
                                <div className="rating">
                                    <i className="star"><FaStar /></i>
                                    <h1>{e.rating} / 10</h1>
                                    <div>{e.vote} Votes<i className="votes"><MdKeyboardArrowRight /></i></div>
                                </div>
                                <div className="rate-now">
                                    <div>
                                        <h1>Add your rating & review</h1>
                                        <p>Your ratings matter</p>
                                    </div>
                                    <button>Rate Now</button>
                                </div>
                                <div className="language">
                                    <button>2D</button>
                                    <button>Tamil,English</button>
                                </div>
                                <div className="duration">{e.duration}<BsDot />{e.name}<BsDot />{e.certificate}<BsDot />7 Sep,2023</div>
                                <Button sx={{backgroundColor: "#F84464",color:"white",padding:"12px 50px",marginTop:"15px",":hover":{backgroundColor:"#f72249"}}} onClick={()=>{handle(e.id)}}>Book tickets</Button>
                            </div>
                        </div>
                        <div className="col-lg-3 d-sm-none d-lg-block">
                            <div className="share">
                                <div>
                                    <i><CiShare2 /></i>
                                    <span>Share</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        ))}
    </>
    )
}

export default Movie