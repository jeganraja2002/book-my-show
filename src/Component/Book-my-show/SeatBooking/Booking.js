import React, { useEffect, useState } from "react";
import { update } from "../../../Slice";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { useNavigate, useSearchParams } from "react-router-dom";
import { MdArrowBackIosNew  , MdOutlineClose} from "react-icons/md";


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });


const list = [
        {id:1,img:"https://i.ibb.co/C0wGpPv/cycle.jpg"},
        {id:2,img:"https://i.ibb.co/Hg0Z5zv/scooter.jpg"},
        {id:3,img:"https://i.ibb.co/Lx7zTdZ/auto.jpg"},
        {id:4,img:"https://i.ibb.co/vdTNbrt/car.jpg"},
        {id:5,img:"https://i.ibb.co/WsZ36WZ/car2.jpg"},
        {id:6,img:"https://i.ibb.co/WsZ36WZ/car2.jpg"},
        {id:7,img:"https://i.ibb.co/WsZ36WZ/car2.jpg"},
        {id:8,img:"https://i.ibb.co/8myxNpV/van.jpg"},
        {id:9,img:"https://i.ibb.co/8myxNpV/van.jpg"},
        {id:10,img:"https://i.ibb.co/8myxNpV/van.jpg"}
]

const Booking = () => {

    const nav = useNavigate()
    const dispatch = useDispatch()
    const read = useSelector(a=>a.book.Arr.MovieList)
    const [arr,setArr] = useState([])
    const [change , setChange] = useState(1)
    const [open, setOpen] = React.useState(true);
    const [img,setImg] = useState([])
    const [original,setOriginal] = useState([])
    const [store,setStore] = useState([])
    const [param] = useSearchParams()
    
useEffect(()=>{
    const a = read.find(e=>e.id===Number(param.get('id')))
    const b = a.theaterList.find(e=>e.id===Number(param.get('timeid')))
    setArr(b.arr)
    //eslint-disable-next-line
},[])

useEffect(()=>{
    const a = list.filter(e=>e.id===Number(change))
    setImg(a)
    setOriginal(arr)
    //eslint-disable-next-line
},[arr])


const handleClickOpen = () => {
    setOpen(true);
    setStore(store.length=0)
    setStore([])
    const a = arr.map((e)=>{
        return {...e,next:e.next.map((f)=>{
            return {...f,boolean:false}
        })}
    })

    setArr(a)
};

const handleClose = (e) => {
    setChange(e.target.value);
};

const Seats = () => {
    setOpen(false) 
}

const changeimg = (v) => {
    const a = list.filter(e=>e.id===Number(v.target.value))
    setImg(a)
}


const handle = (letter,index,id) =>{

let boo = false

if (id>=13){
    
    const find = arr.find((e,i)=>e.letter===letter)

    const spread = [...find.next]
    const sep = spread.find(e=>e.id>=id&&e.booking===true)
    const sepBt = sep?spread.filter(e=>e.id<sep.id):false
    const sepBf = sep?spread.filter(e=>e.id>=sep.id):false
    

        const split = sep ? sepBt.splice(index,change-store.length):spread.splice(index,change-store.length)
        boo=split.length?false:true
        
        const m = split.map((e)=>{
            return {...e,boolean:true}
        })
        const push = []
        for (let i = 0; i < split.length; i++) {
            let c = true
            for (let j = 0; j < store.length; j++) {
                if(split[i].seat===store[j].seat) c = false  
            }
            if (c) push.push(split[i])
        }
        const you = [...store,push]
        setStore(you.flat())

        const q = sepBt.length ? sepBt.concat(m):[]
        const merge = q.length ? sepBf.concat(q):m
        const ar = sep ? merge : spread.concat(m)
        
        const sort = ar.sort((a,b)=>a.id-b.id)
    
        const a = arr.map((e,i)=>{
            return e.letter===letter?{...e,next:sort}:e
        })

        // dispatch(update(a))
        setArr(a)

         if(boo||store.length===change) {
            boo=false
            setStore(store.length=0)

            const l = a.map((e)=>{
                return {...e,next:e.next.map((f)=>{
                    return {...f,boolean:false}
                })}
            })

            const find1 = l.find(e=>e.letter===letter)
            const spreads = [...find1.next] 
            const sep1 = spreads.find(e=>e.id>=id&&e.booking===true)
            const sepBt1 = sep1?spreads.filter(e=>e.id<sep1.id):false
            const sepBf1 = sep1?spreads.filter(e=>e.id>=sep1.id):false

            const splits = sep1 ? sepBt1.splice(index,change-store.length) : spreads.splice(index,change-store.length)

            const ms = splits.map((e)=>{
                return {...e,boolean:true}
            })
            const push =[]
            for (let i = 0; i < splits.length; i++) {
                let c = true
                for (let j = 0; j < store.length; j++) {
                    if(splits[i].seat===store[j].seat) c = false 
                }
                if (c) push.push(splits[i])
            }
            const me = [...store,push]
            setStore(me.flat())


            const q1 = sepBt1.length ? sepBt1.concat(ms):[]
            const merge1 = q1.length ? sepBf1.concat(q1):ms
            const ars = sep1 ? merge1 : spreads.concat(ms)
            
            const sorts = ars.sort((a,b)=>a.id-b.id)
        
            const as = arr.map((e,i)=>{
                return e.letter===letter?{...e,next:sorts}:{...e,next:e.next.map((f)=>{
                    return {...f,boolean:false}
                })}
            })

            // dispatch(update(as))
            setArr(as)
        }
    }
    else{
        const find = arr.find((e,i)=>e.letter===letter)

        const spread = [...find.next] 
        const fil = spread.filter(e=>e.id<=12)
        const fil1 = spread.filter(e=>e.id>12)
        
        const sep = fil.find(e=>e.id>=id&&e.booking===true)
        const sepBt = sep?fil.filter(e=>e.id<sep.id):false
        const sepBf = sep?fil.filter(e=>e.id>=sep.id):false
        
            const split = sep ? sepBt.splice(index,change-store.length) : fil.splice(index,change-store.length)
            boo=split.length?false:true

            const m = split.map((e)=>{
                return {...e,boolean:true}
            })
    
            const push = []
            for (let i = 0; i < split.length; i++) {
                let c = true
                for (let j = 0; j < store.length; j++) {
                    if(split[i].seat===store[j].seat) c = false  
                }
                if (c) push.push(split[i])
            }
            const you = [...store,push]
            setStore(you.flat())
    
            const q = sepBt.length ? sepBt.concat(m):[]
            const merge = q.length ? sepBt.concat(m) : m
            const ar =sep ?  sepBf.concat(merge) : fil.concat(m)

            const con =  ar.concat(fil1)
            const sort = con.sort((a,b)=>a.id-b.id)
            
            const a = arr.map((e,i)=>{
                return e.letter===letter?{...e,next:sort}:e
            })
    
            // dispatch(update(a))
        setArr(a)
        
            if(boo||store.length===change) {
                boo=false
                setStore(store.length=0)
                const l = a.map((e)=>{
                    return {...e,next:e.next.map((f)=>{
                        return {...f,boolean:false}
                    })}
                })
    
                const find1 = l.find(e=>e.letter===letter)
                const spreads = [...find1.next] 
                const fil1 = spreads.filter(e=>e.id<=12)
                const fil11 = spreads.filter(e=>e.id>12)
        
                const sep1 = fil1.find(e=>e.id>=id&&e.booking===true)
                const sepBt1 = sep1?fil1.filter(e=>e.id<sep1.id):false
                const sepBf1 = sep1?fil1.filter(e=>e.id>=sep1.id):false
                

                const splits = sep1 ? sepBt1.splice(index,change-store.length) : fil1.splice(index,change-store.length)
    
                const ms = splits.map((e)=>{
                    return {...e,boolean:true}
                })
            
                const push =[]
                for (let i = 0; i < splits.length; i++) {
                    let c = true
                    for (let j = 0; j < store.length; j++) {
                        if(splits[i].seat===store[j].seat) c = false
                    }
                    if (c) push.push(splits[i])
                }
                const me = [...store,push]
                setStore(me.flat())
                
                const q1 = sepBt1.length ? sepBt1.concat(ms):[]
                const merge1 = q1.length ? sepBt1.concat(ms) : ms
                const ars =sep1 ?  sepBf1.concat(merge1) : fil1.concat(ms)

                const cons = ars.concat(fil11)
                const sorts = cons.sort((a,b)=>a.id-b.id)
            
                const as = arr.map((e,i)=>{
                    return e.letter===letter?{...e,next:sorts}:{...e,next:e.next.map((f)=>{
                        return {...f,boolean:false}
                    })}
                })
    
                // dispatch(update(as))
                setArr(as)
            }
    }

}


const payment = () => {

    const a =read.map((e)=>{
        return e.id===Number(param.get('id')) ? {...e,theaterList:e.theaterList.map((f)=>{
            return f.id===Number(param.get('timeid')) ? {...f,arr:original.map((g)=>{
                return {...g,next:g.next.map((h)=>{
                    return h.boolean === true ? {...h,booking:true} : h
                })}
            })}:f
        })}: e
    })

    dispatch(update(a))
    nav(`/payment/?price=${change*120}`) 
}

    return(
        <>
        <header className="navbar-booking p-sm-2 ">
            <h3 className="text-sm-center d-md-none mb-sm-2">{param.get('name')}</h3>
            <div className="row justify-sm-between align-items-center">
                <div className=" d-sm-none d-md-block">
                    <div className="row align-items-center">
                        <i className="font-sm-4 pointer" ><MdArrowBackIosNew /></i>
                        <div>
                            <h5 className="ms-sm-2 font-sm-2 d-sm-none d-md-block">{param.get('name')}</h5>
                            <h5 className="ms-sm-2 font-sm-2">{param.get('time')}</h5>
                        </div>
                    </div>
                </div>
                <div className="d-md-none">
                    <Button variant="outlined" sx={{border:"1px solid white",color:"white",":hover":{border:"1px solid white"}}} >{param.get('time')}</Button>
                </div>
                <div className="row align-items-center">
                    <React.Fragment>
                    <Button variant="outlined" sx={{border:"1px solid white",color:"white",":hover":{border:"1px solid white"}}} onClick={handleClickOpen}>
                        {change} Tickets
                    </Button>
                    <Dialog
                        open={open}
                        TransitionComponent={Transition}
                        keepMounted
                        aria-describedby="alert-dialog-slide-description"
                    >
                        <DialogTitle style={{textAlign:"center"}}>{"How Many Seats ?"}</DialogTitle>
                        {/* <DialogContent> */}
                        <DialogContentText id="alert-dialog-slide-description"style={{textAlign:"center"}}>

                            {img.map((e,i)=>(
                                <img src={e.img}  alt="img" key={i}/>
                            ))}

                        </DialogContentText>
                        {/* </DialogContent> */}
                        {/* <DialogActions> */}
                        <div className="row align-items-center justify-lg-center" style={{width:"100%"}}>
                            <button value="1" className ={Number(change)===1?"number2-lg number2-sm number2-md":"number-lg number-sm number-md"} onClick={handleClose} onMouseOver={changeimg}>1</button>
                            <button value="2" className ={Number(change)===2?"number2-lg number2-sm number2-md":"number-lg number-sm number-md"} onClick={handleClose} onMouseOver={changeimg}>2</button>
                            <button value="3" className ={Number(change)===3?"number2-lg number2-sm number2-md":"number-lg number-sm number-md"} onClick={handleClose} onMouseOver={changeimg}>3</button>
                            <button value="4" className ={Number(change)===4?"number2-lg number2-sm number2-md":"number-lg number-sm number-md"} onClick={handleClose} onMouseOver={changeimg}>4</button>
                            <button value="5" className ={Number(change)===5?"number2-lg number2-sm number2-md":"number-lg number-sm number-md"} onClick={handleClose} onMouseOver={changeimg}>5</button>
                            <button value="6" className ={Number(change)===6?"number2-lg number2-sm number2-md":"number-lg number-sm number-md"} onClick={handleClose} onMouseOver={changeimg}>6</button>
                            <button value="7" className ={Number(change)===7?"number2-lg number2-sm number2-md":"number-lg number-sm number-md"} onClick={handleClose} onMouseOver={changeimg}>7</button>
                            <button value="8" className ={Number(change)===8?"number2-lg number2-sm number2-md":"number-lg number-sm number-md"} onClick={handleClose} onMouseOver={changeimg}>8</button>
                            <button value="9" className ={Number(change)===9?"number2-lg number2-sm number2-md":"number-lg number-sm number-md"} onClick={handleClose} onMouseOver={changeimg}>9</button>
                            <button value="10"className ={Number(change)===10?"number2-lg number2-sm number2-md":"number-lg number-sm number-md"}  onClick={handleClose} onMouseOver={changeimg}>10</button>
                        </div>
                        {/* </DialogActions> */}
                        <div className="row mt-sm-2 mt-lg-3" style={{justifyContent:"center"}}>
                                <div className="me-sm-2 font-lg-1" style={{textAlign:"center"}}>
                                    <p style={{color:"gray"}}>DIAMOND</p>
                                    <h4>RS. 120.00</h4>
                                    <p style={{color:"green"}}>Avialable</p>
                                </div>
                                <div className="ms-sm-2 font-lg-1" style={{textAlign:"center"}}>
                                    <p style={{color:"gray"}}>PERAL</p>
                                    <h4>RS. 60.00</h4>
                                    <p style={{color:"gray"}}>Sould Out</p>
                                </div>
                        </div>
                            <Button className="mx-sm-5 my-sm-2 py-sm-1 select-seats" sx={{backgroundColor:"#F84464",color:"white",":hover":{backgroundColor:"#F84464"}}} onClick={Seats} >Select Seats</Button>
                    </Dialog>
                    </React.Fragment>            
                    <i className="ms-sm-2 font-sm-4 pointer d-sm-none d-md-block" ><MdOutlineClose/></i>
                </div>
            </div>
        </header>
        <div className="container-lg container-sm mt-sm-2" style={{overflowY:"scroll"}}>
            <p style={{borderBottom:"1px solid lightgray"}} className="py-sm-1 mb-sm-1 d-sm-none d-lg-block">Diamond : 120.00</p>
            {arr.map((e,i)=>(
                <div key={i} className={e.letter==="H"?"d-sm-flex-only section-relative col-sm-own col-lg-12 mt-lg-5 mt-sm-5":" col-sm-own col-lg-12 d-sm-flex-only section-relative mt-lg-1"}>
                    <p className="col-lg-1 left-sm col-sm-1"style={{userSelect:"none",color:"#8080806e"}}>{e.letter}</p>
                        <div className="col-lg-11 me-sm-3 me-md-5 me-lg-0 col-sm-11 d-sm-flex-only d-lg-flex" style={{justifyContent:"space-between"}}>
                            {e.next.map((g,k)=>(
                                <div key={k} style={{userSelect:"none"}} className="m-sm-3px m-lg-0">
                                    {g.booking?<div className={g.id===12?"me-lg-5 me-sm-5 w-sm-h w-md-h w-lg-h seat-color seat-gray":"seat-color w-sm-h w-md-h w-lg-h seat-gray"}>{g.id}</div>
                                    :g.boolean?<div className={g.id===12?"me-lg-5 me-sm-5 w-sm-h w-md-h w-lg-h seat-color seat-green":" w-sm-h w-md-h w-lg-h seat-color seat-green"} onClick={()=>handle(e.letter,k,g.id)}>{g.id}</div>:<div className={g.id===12?"me-lg-5 me-sm-5 w-sm-h w-md-h w-lg-h seat-color":"w-sm-h w-md-h w-lg-h seat-color"} onClick={()=>handle(e.letter,k,g.id)}>{g.id}</div>}
                                </div>
                            ))}
                        </div>
                </div>
            ))}
            <div className="screen-audience screen-sm screen-lg screen-md"style={{pointerEvents:"none"}}>
                <div className="screen-sm-audience screen-md-audience screen-lg-audience">
                   <img src="https://i.ibb.co/RbBnf5C/screen-icon-8dd7f126-removebg-preview.png" alt="img" />
                    {/* <span>SCREEN</span> */}
                    {/* <p className="me-sm-3 pe-md-5 pe-lg-0">All eyes this way please!</p> */}
                </div>
            </div>
        </div>
        <>
                {store.length===Number(change)?
                <div className="payment">
                    <div>
                        <Button onClick={payment} sx={{backgroundColor:"#F84464",color:"white",padding:"10px 100px",":hover":{backgroundColor:"#F84464"}}}>Pay For {change*120}</Button>
                    </div>            
                </div>:""}
                <div className="a-s-s">
                    <ul>
                        <li><span className="avialable"></span>Avialable</li>
                        <li><span className="selected"></span>Selected</li>
                        <li><span className="sold"></span>Sold</li>
                    </ul>
                </div>
            </>
        </>
    )
}

export default Booking