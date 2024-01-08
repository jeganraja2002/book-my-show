import React, { useState } from "react";
import logo from '../../../logo.svg'
import { IoIosSearch,IoMdArrowDropdown,IoMdMenu } from "react-icons/io";
import { IoIosNotificationsOutline , IoMdGift , IoMdClose} from "react-icons/io";
import { MdArrowForwardIos } from "react-icons/md";
import { AiOutlineShopping , AiOutlineComment , AiOutlineSetting } from "react-icons/ai"
import { TbCurrentLocation } from "react-icons/tb";
import { FaDisplay , FaRegCreditCard , FaApple } from "react-icons/fa6";
import { SiBookmyshow } from "react-icons/si";
import { BiMoviePlay } from "react-icons/bi";

import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';

import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import DialogContent from '@mui/material/DialogContent';


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const country = [
            {id:1,name:"Mumbai",img:"https://in.bmscdn.com/m6/images/common-modules/regions/mumbai.png"},
            {id:2,name:"Delhi-NCR",img:"https://in.bmscdn.com/m6/images/common-modules/regions/ncr.png"},
            {id:3,name:"Bengalure",img:"https://in.bmscdn.com/m6/images/common-modules/regions/bang.png"},
            {id:4,name:"Hyderabad",img:"https://in.bmscdn.com/m6/images/common-modules/regions/hyd.png"},
            {id:5,name:"Ahmedabad",img:"https://in.bmscdn.com/m6/images/common-modules/regions/ahd.png"},
            {id:6,name:"Chandigarh",img:"https://in.bmscdn.com/m6/images/common-modules/regions/chd.png"},
            {id:7,name:"Chennai",img:"https://in.bmscdn.com/m6/images/common-modules/regions/chen.png"},
            {id:8,name:"Pune",img:"https://in.bmscdn.com/m6/images/common-modules/regions/pune.png"},
            {id:9,name:"Kolatha",img:"https://in.bmscdn.com/m6/images/common-modules/regions/kolk.png"},
            {id:10,name:"Kochi",img:"https://in.bmscdn.com/m6/images/common-modules/regions/koch.png"}
            ]
const Navbar = () => {

    const [state, setState] = useState({right: false});
    const [open, setOpen] = React.useState(false);
    const [change,setChange] = useState("Chennai")
    const read = useSelector(a=>a.book.Arr.MovieList)
    const [search,setSearch] = useState("")
    const [arr,setArr] = useState([])
    const [boolean,setBoolean] = useState(false)
    const [opens, setOpens] = React.useState(false);
    
    const nav = useNavigate()

useEffect(()=>{

  if (search!=="") {
    const a = read.filter((e,i)=>{
      return e.title.toLowerCase().includes(search.toLowerCase())
    })
    setArr(a)
  }
  else setArr([])
  //eslint-disable-next-line
},[search])

  const home = () => {
    nav('/')
  }

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = (id) => {
      if(id>0){
        const a = country.find(e=>e.id===id)
        setChange(a.name)
        setOpen(false);
      }
      else{
        setOpen(false);
        setChange(id)
      }
    };

    const handleClickOpens = () => {
      setOpens(true);
    };
  
    const handleCloses = () => {
      setOpens(false);
    };

  
    const toggleDrawer = (anchor, open) => (event) => {
        if (
          event &&
          event.type === 'keydown' &&
          (event.key === 'Tab' || event.key === 'Shift')
        ) {
          return;
        }
    
        setState({ ...state, [anchor]: open });
    };
    
      const list = (anchor) => (
        <Box
          sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
          role="presentation"
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
        >
          <List>
            {[ "Hey!",'Notification', 'Your Orders', 'Stream Library', 'Play credit Card' , 'Help & Support', 'Account & Settings','Rewards', 'Book A Smile'].map((text, index) => (
              <div key={index}>
                  {text==="Hey!"?<h1 className="px-sm-1" style={{backgroundColor:"#2e3147",pointerEvents:"none", color:"white",width:"100%"}}>{text}</h1>:null}
              
              <ListItem key={text} disablePadding>
                <ListItemButton  sx={{marginTop:{xs:"2px",sm:"10px",md:"20px",lg:"10px"}}}>
                  <ListItemIcon>
    
                    {index  === 1 ? <i className="font-sm-5 font-md-6 font-lg-5"><IoIosNotificationsOutline/> </i>: null}
                    {index  === 2 ? <i className="font-sm-5 font-md-6 font-lg-5"><AiOutlineShopping /> </i>: null}
                    {index  === 3 ? <i className="font-sm-5 font-md-6 font-lg-5"><FaDisplay /> </i>: null}
                    {index  === 4 ? <i className="font-sm-5 font-md-6 font-lg-5"><FaRegCreditCard /> </i>: null}
                    {index  === 5 ? <i className="font-sm-5 font-md-6 font-lg-5"><AiOutlineComment /> </i>: null}
                    {index  === 6 ? <i className="font-sm-5 font-md-6 font-lg-5"><AiOutlineSetting /> </i>: null}
                    {index  === 7 ? <i className="font-sm-5 font-md-6 font-lg-5"><IoMdGift /> </i>: null}
                    {index  === 8 ? <i className="font-sm-5 font-md-6 font-lg-5"><SiBookmyshow /> </i>: null}
                
                  </ListItemIcon>
                  
                  {text==="Hey!"?null:<div className="font-lg-1 font-sm-1 font-md-3 font-lg-1">{text}
        
                    {index  === 2 ? <p className="font-lg-0 font-sm-0 font-md-1">View all your booking & Package </p>: null}
                    {index  === 3 ? <p className="font-lg-0 font-sm-0 font-md-1">Rentend & purchase movies</p>: null}
                    {index  === 4 ? <p className="font-lg-0 font-sm-0 font-md-1">view your play credit card details and offers</p>: null}
                    {index  === 5 ? <p className="font-lg-0 font-sm-0 font-md-1">view commonly asked queries & chats</p>: null}
                    {index  === 6 ? <p className="font-lg-0 font-sm-0 font-md-1">location , payment , permission & more</p>: null}
                    {index  === 7 ? <p className="font-lg-0 font-sm-0 font-md-1">view your reward and unblock new onees</p>: null}
    
                  </div>}
    
                </ListItemButton> 
                  {index === 0 ? null :<i className="font-sm-0 pe-sm-2"><MdArrowForwardIos /></i> }
              </ListItem>
              </div>
            ))}
            <div className="register">
            <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpens}>
        Login/Register
      </Button>
      <Dialog open={opens} onClose={handleCloses}>
        <div  style={{textAlign:"end"}} className="mt-sm-3 me-sm-3">
          <i onClick={handleCloses} className="pointer font-sm-5" style={{color:"gray"}}><IoMdClose/></i>
        </div>

        <h3 style={{textAlign:"center"}}>Get Started</h3>
        <DialogContent className="mx-sm-4">
            <>
              <div className="row pointer px-sm-3 py-sm-1 align-items-center" style={{border:"1px solid gray",borderRadius:"5px"}}>
                <div className="font-md-2 font-sm-1"><img src="https://in.bmscdn.com/webin/common/icons/googlelogo.svg" alt="img"/></div>
                <p className=" ms-sm-1 ms-md-5 font-md-2 font-sm-1">Continue With Google</p>
              </div>
              <div className="row pointer px-sm-3 py-sm-1 align-items-center mt-sm-2" style={{border:"1px solid gray",borderRadius:"5px"}}>
                <div className="font-md-2 font-sm-1"><img src="https://in.bmscdn.com/webin/common/icons/email.svg" alt="img"/></div>
                <p className="ms-sm-1 ms-md-5 font-md-2 font-sm-1">Continue With Email</p>
              </div>
              <div className="row pointer px-sm-3 py-sm-1 align-items-center mt-sm-2" style={{border:"1px solid gray",borderRadius:"5px"}}>
                <div className="font-md-2 font-sm-1"><FaApple/></div>
                <p className="ms-sm-1 ms-md-5 font-md-2 font-sm-1">Continue With Apple</p>
              </div>
              <p style={{textAlign:"center"}} className="mt-sm-3 mb-sm-1">OR</p>
          </>

          <div className="login d-sm-flex-only align-items-center">
              <img src="https://in.bmscdn.com/webin/common/icons/indianflag.svg" alt="img"/>
              <p className="me-sm-1">+91</p>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Continue with Mobile number"
              type="Number"
              fullWidth
              variant="standard"
            />
          </div>
        </DialogContent>
            <p style={{textAlign:"center",color:"gray"}} className="font-sm-1 mt-sm-5 py-sm-2">I agree to the <u>Terms & Conditions</u> and <u>Privacy Policy</u></p>
      </Dialog>
    </React.Fragment>

            </div>
          </List>
          <Divider />
        </Box>
      );

const searchNav = (id) => {
  setSearch('')
  nav(`/Detail/?id=${id}`)
}

const hi = () => {
  setTimeout(() => {
    setBoolean(false)
  }, 300);
}

    return(
      <>
        <header className="navbar">
            <div className="bg-1">    
                <div className="container">
                    <div className="row" style={{alignItems:"center",justifyContent:"space-between"}}>
                        <div className="col-lg-2 col-sm-3">
                            <img src={logo} alt="logo" className="pointer" onClick={home}/>
                        </div>
                        <div className="col-lg-5 col-sm-6 col-md-8 d-sm-none d-md-block d-lg-block">
                            <div className="search-bar">
                              <div className="search">
                                <i><IoIosSearch /></i>
                                <input type="search" value={search} onBlur={hi} onFocus={()=>setBoolean(true)} onChange={(e)=>setSearch(e.target.value)} placeholder="Search"/>                            
                              </div>
                                {arr.length? boolean? 
                                
                                <div className="search-show">
                                  {arr.map((e,i)=>{
                                    return <div key={i} className="p-sm-2" onClick={()=>searchNav(e.id)}>
                                        <i><BiMoviePlay /></i>
                                        <p className="mx-sm-3">{e.title}</p>
                                    </div>
                                  })}  
                                </div>:"":search.length>0 && boolean ?
                                 <div className="search-show row justify-sm-center py-sm-3 align-items-center" style={{color:"#F84464"}}>
                                    <i><IoIosSearch /></i>
                                    <p className="font-sm-2">No Movies Found</p>
                                  </div>:""}                            
                            </div>
                        </div>
                        <div className="col-lg-5 col-sm-3 col-md-1">
                            <ul className="menu-list row">
                                <li className="d-sm-none d-lg-block">    <React.Fragment>
                                                                                  <div onClick={handleClickOpen} className="pointer drop">{change}<IoMdArrowDropdown/></div>
                                                                                <Dialog
                                                                                  open={open}
                                                                                  TransitionComponent={Transition}
                                                                                  keepMounted
                                                                                  onClose={()=>handleClose(change)}
                                                                                  aria-describedby="alert-dialog-slide-description"
                                                                                >
                                                                                  <div className="select-country">
                                                                                    <i><IoIosSearch /></i>
                                                                                    <input type="search" placeholder="search for your city" className="w-sm-100"/>
                                                                                  </div>
                                                                                  <div className="row align-items-center m-sm-2" style={{color:"#DC3558"}}>
                                                                                    <i><TbCurrentLocation /></i>
                                                                                    <p className="ms-sm-2">Detect My Location</p>
                                                                                  </div>
                                                                                <div>
                                                                                  <p style={{textAlign:"center"}}>Popular Cities</p>
                                                                                  <div className="row">
                                                                                      {country.map((e,i)=>(
                                                                                        <div className="m-sm-1 pointer" key={i} style={{textAlign:"center"}} onClick={()=>handleClose(e.id)}>
                                                                                          <img src={e.img} alt="img"/>
                                                                                          <p>{e.name}</p>
                                                                                        </div>
                                                                                      ))}
                                                                                  </div>
                                                                                  <p style={{textAlign:"center",color:"#DC3558"}} className="py-sm-2">VIew all Cities</p>
                                                                                </div>
                                                                                </Dialog>
                                                                              </React.Fragment>
                                                                          </li>
                                <li className="sign d-sm-none d-lg-block pointer" onClick={handleClickOpens}>Sign</li>
                                <li className="menu">      {['right'].map((anchor) => (
                                                            <React.Fragment key={anchor}>
                                                            <div onClick={toggleDrawer(anchor, true)} className="pointer" style={{fontSize:"30px",color:"white"}}><IoMdMenu/></div>
                                                            <SwipeableDrawer
                                                                anchor={anchor}
                                                                open={state[anchor]}
                                                                onClose={toggleDrawer(anchor, false)}
                                                                onOpen={toggleDrawer(anchor, true)}
                                                            >
                                                                {list(anchor)}
                                                            </SwipeableDrawer>
                                                            </React.Fragment>
                                                        ))}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-2 d-sm-none d-lg-block">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <ul className="first-list">
                                <li>Movies</li>
                                <li>Stream</li>
                                <li>Events</li>
                                <li>Plays</li>
                                <li>Sports</li>
                                <li>Activities</li>
                            </ul>
                        </div>
                        <div className="col-lg-6">
                            <ul className="second-list">
                                <li>ListYourShow</li>
                                <li>Corporates</li>
                                <li>Offers</li>
                                <li>Gift Cards</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        
    </>
    )
}
export default Navbar