import React from "react";
import logo from '../../../customer.svg'
import logo1 from '../../../ticket.svg'
import logo2 from '../../../Mail.svg'
import logo3 from '../../../logo.svg'
import { FaFacebookF,FaTwitter,FaInstagram,FaYoutube,FaLinkedinIn } from "react-icons/fa";

const Footer = () =>{
    return(
        <footer className="footer">
            <div className="container">
                <div className="row footer-between justify-lg-between justify-sm-center">
                    <div className="row" style={{justifyContent:"center"}}>
                        <img src="https://in.bmscdn.com/webin/common/icons/hut.svg" alt="img"/>
                        <p className="my-sm-3 my-lg-0"><span>List your ShowGet</span> a show,event,activity or a great experience Patner with us & get listed on BookMyShow</p>
                    </div>
                    <button className="">Contact today!</button>
                </div>
            </div>
            <div className="svg">
                <div className="container">
                    <div className="row mt-lg-1 " style={{justifyContent:"space-around"}}>
                        <div className="col-sm-12 col-md-4">
                            <div className="svg-icons mt-sm-3 mt-lg-0 pointer">
                                <img src={logo} alt="img" style={{width:"18%"}}/>
                                <p className="font-sm-1">24/7,CUSTOMER CARE</p>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-4">
                            <div className="svg-icons mt-sm-3 mt-lg-0 pointer">
                                <img src={logo1} alt="img" style={{width:"18%"}}/>
                                <p className="font-sm-1">RESEND BOOKING CONFIRMATION</p>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-4">
                            <div className="svg-icons mt-sm-3 mt-lg-0 pointer">
                                <img src={logo2} alt="img" style={{width:"18%"}}/>
                                <p className="font-sm-1">SUBSCRIBE TO THE NEWSLETTER</p>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div className="mt-sm-1 container">
                <div className="book-relative">
                    <img src={logo3} alt="img"/>
                </div>
                <div className="mt-sm-2 copy-rights ">
                    <ul className="icons">
                        <li><FaFacebookF/></li>
                        <li><FaTwitter/></li>
                        <li><FaInstagram/></li>
                        <li><FaLinkedinIn/></li>
                        <li><FaYoutube/></li>
                    </ul>
                    <p>Copyright 2023 © Bigtree Entertainment Pvt. Ltd. All Rights Reserved.</p>
                    <p>The content and images used on this site are copyright protected and copyrights vests with the respective owners. The usage of the content and images on this website is intended to promote the works and no endorsement</p>
                    <p>of the artist shall be implied. Unauthorized use is prohibited and punishable by law.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer