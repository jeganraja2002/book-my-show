import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import { IoIosArrowForward , IoIosArrowBack,IoIosSearch,IoMdInformationCircleOutline } from "react-icons/io";
import { MdKeyboardArrowDown } from "react-icons/md";
import { GoHeart } from "react-icons/go";
import { GiSmartphone } from "react-icons/gi";
import { IoFastFoodOutline } from "react-icons/io5";
import { update } from "../../../Slice";

const Timing = () => {
    const read = useSelector(a=>a.book.Arr.MovieList)
    const [param] = useSearchParams()
    const [name,setName] = useState('')
    const [title,setTitle] = useState('')
    const [certificate,setCertificate] = useState('')
    const [state,setState] = useState([])
    const [time,setTime] = useState([])


    const dispatch= useDispatch()
    const nav = useNavigate()

useEffect(()=>{
    if (param.get('id')===null||param.get('id')===undefined) return
    else{
        const a = read.find(e=>e.id===Number(param.get('id')))
        setName(a.title)
        setCertificate(a.certificate)
        setTitle(a.name)

        const today = new Date()
        let Y = today.getFullYear()
        let M = today.getMonth()
        let D = today.getDate()
        const monthArr=["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"]
        const dayArr = ["SUN","MON","TUE","WED","THUR","FRI",'SAT']    
        const empty =[]
        for (let i = 0; i < 3; i++) {
            const change = new Date(Y,M,D+i)
            const object = {id:i,day:dayArr[change.getDay()],date:change.getDate(),mon:monthArr[change.getMonth()],boolean:i===0?true:false}
            empty.push(object)
        }
        setTime(empty)

        let stop = setInterval(() => {
            let changeTime = new Date()
            const Min = changeTime.getMinutes()<10 ? "0"+changeTime.getMinutes() : changeTime.getMinutes()
            const hours = changeTime.getHours()<10 ? "0"+changeTime.getHours() : changeTime.getHours()
            const times = `${hours}.${Min}`
        
        const w = read.map((e)=>{
            return e.id===parseInt(param.get('id')) ?{...e,theaterList:e.theaterList.map((f)=>{
                return {...f,showTime:f.showTime.map((g)=>{
                    return times>=g.time?{...g,boolean:false}:{...g,boolean:true}
                })}
            })}:e
        })
        const search = w.find(e=>e.id===Number(param.get('id')))
        setState(search.theaterList)

        dispatch(update(w))
        },0);
        return ()=>{
            clearInterval(stop)
        }
    }

    //eslint-disable-next-line
},[])



const colorChange = (id) => {
    const a = time.map((e)=>(
        e.id===id?{...e,boolean:true}:{...e,boolean:false}
    ))  
    setTime(a)
}

const handle = (name,time,timeId) => {
    nav(`/Booking/?name=${name}&time=${time}&id=${param.get('id')}&timeid=${timeId}`)
}


    return(
        
        <>
            <div className="timing-bg p-sm-3">
                <h1>{name}</h1>
                <div className="row mt-sm-1">
                    <p>{certificate}</p>
                    <p className="ms-sm-3">{title}</p>
                </div>
            </div>
            <div className="row time">
                <div className="col-lg-3 col-sm-12 col-md-5">
                    <div className="row align-items-center">
                        <i className="font-sm-5"><IoIosArrowBack /></i>        
                        {time.map((e,i)=>(
                            <ul className={e.boolean?"color row d-d-m mx-sm-1":"row d-d-m mx-sm-1"} onClick={()=>colorChange(e.id)} key={i}>
                                <li className="day">{e.day}</li>
                                <li className="date">{e.date}</li>
                                <li className="month">{e.mon}</li>
                            </ul>
                        ))}
                        <i className="font-sm-5"><IoIosArrowForward /></i>
                    </div>
                </div>
                <div className="col-sm-5 col-md-7 col-lg-5 d-sm-none d-md-block d-lg-block">
                    <ul className="row tamil-2d">
                        <li>Tamil -2D</li>
                        <li>Filter Price Range</li>
                        <li>Filter Show Timing <MdKeyboardArrowDown /></li>
                        <li><IoIosSearch /></li>
                    </ul>
                </div>
            </div>

            <section className="m-sm-2 screen">
                    <div className="list px-md-2 px-sm-1">
                        <ul className="justify-md-end justify-sm-between font-sm-0 font-md-1 font-lg-0 mb-sm-1 pt-sm-1 pt-md-0 mb-md-0">
                            <li className="m-md-1 green"></li>
                            <li className="m-md-1">AVALABLE</li>
                            <li className="m-md-1 yellow"></li>
                            <li className="m-md-1">FAST FILLING</li>
                            <li className="m-md-1 lan">LAN</li>
                            <li className="m-md-1">SUBTITLES LANGUAGE</li>
                        </ul>
                    </div>
                    {state.map((e,i)=>(
                     <div className="row screens" key={i}  style={{borderTop:"1px solid gray"}}>
                        <div className="col-lg-4 col-sm-12">
                            <div className="row align-items-center">
                                <i className="col-sm-1 font-md-3 pointer font-lg-1"><GoHeart /></i>
                                <div className="col-sm-8">
                                    <h5 className="font-md-3 font-lg-1">{e.theatername}</h5>
                                    <div className="row mt-sm-1 font-lg-1 font-sm-1 font-md-2">
                                        <div style={{color:"green"}}><GiSmartphone/> M-Tickets</div>
                                        <div className=" ms-md-2" style={{color:"orange"}}><IoFastFoodOutline/> Food & Beverage</div>
                                    </div>
                                </div>
                                <div className="col-sm-3 font-sm-1 font-md-3 font-lg-1 row align-items-center justify-sm-end" style={{color:"gray"}}><i className="me-sm-1"><IoMdInformationCircleOutline/></i> info</div>
                            </div>
                        </div>
                        <div className="col-lg-8 col-lg-sm-12">
                            <div className="row">
                                {e.showTime.map((f,j)=>(
                                    <div key={j} className="mt-sm-2 my-lg-0">
                                        {f.boolean?<div className="mx-sm-1 ms-lg-0 show-time pointer"onClick={()=>handle(e.theatername,f.display,e.id)} >
                                                    <p style={{textAlign:"center",color:"limegreen"}} className="font-sm-1">{f.display}</p>
                                                    <p style={{textAlign:"center",color:"limegreen"}} className="font-sm-1">{f.screen}</p>
                                                    </div>
                                                    :<div className="mx-sm-1 ms-lg-0 show-time" style={{border:"1px solid lightgray"}}>
                                                    <p style={{textAlign:"center",color:"lightgray"}} className="font-sm-1">{f.display}</p>
                                                    <p style={{textAlign:"center",color:"lightgray"}} className="font-sm-1">{f.screen}</p>
                                                    </div>
                                                    }
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    ))}
            </section>
        </>
    )
}

export default Timing