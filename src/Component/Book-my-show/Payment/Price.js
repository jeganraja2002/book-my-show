import React, { useEffect, useState } from "react";
import { IoIosArrowDropdown,} from "react-icons/io";
import { useNavigate, useSearchParams } from "react-router-dom";


const Price = () => {
    const [total,setTotal] = useState()
    const [param] = useSearchParams()
    const [boolean,setBoolean] = useState(true)    
    const nav = useNavigate()

useEffect(()=>{
    setTotal(Number(param.get('price')))
    //eslint-disable-next-line
},[])


const change = () => {
    setBoolean(false)
}


const Home = () => {
  nav('/')
}


    return(
        <>
       {boolean? <section className="booking-summary">
            <div className="container container-sm">
                <div className="row" style={{justifyContent:"center"}}>
                    <div className="col-lg-5 col-sm-12 col-md-11 mt-sm-1">
                        <div className="">
                            <div style={{backgroundColor:"white",borderRadius:"5px"}} className="pt-sm-2 round">
                            <p className="px-sm-2" style={{color:"#F84464"}}>BOOKING SUMMARY</p>
                                <div className="row mt-sm-1 px-sm-2" style={{justifyContent:"space-between"}}>
                                    <p>DIAMOND - ( Tickets )</p>
                                    <p>Rs. {total}.00</p>
                                </div>
                                <div className="px-sm-2" style={{borderBottom:"1px dotted"}}>
                                    <details className="py-sm-2" style={{cursor:"pointer"}}>
                                        <summary className="row" style={{justifyContent:"space-between"}}>
                                            <p style={{display:"flex",alignItems:"center"}}><IoIosArrowDropdown />Convenience fees</p>
                                            <p>140.00</p>
                                        </summary>
                                        <div className="row mt-sm-1" style={{justifyContent:"space-between"}}>
                                            <div>
                                                <p>Base Amount</p>
                                                <p>Integrated GST (IGST), @ 16.5%</p>
                                            </div>
                                            <div>
                                                <p>Rs. 120.00</p>
                                                <p>Rs. 20.00</p>
                                            </div>
                                        </div>
                                    </details>
                                </div>
                                <div className="px-sm-2">
                                    <div className="row my-sm-1" style={{justifyContent:"space-between"}}>
                                        <p>Sub Total</p>
                                        <p>Rs. {total+140}</p>
                                    </div>
                                    <div className="row p-sm-2" style={{justifyContent:"space-between",backgroundColor:"#F5F5F5"}}>
                                        <div>
                                            <p>Contribution to BookASmile</p>
                                            <p className="font-sm-1">(₹1 per ticket has been added)</p>
                                            <p className="font-sm-1">View T&C</p>
                                        </div>
                                        <div>
                                            <p>Rs. {total/120}.00</p>
                                            <p style={{color:"#F84464"}}>Remove</p>
                                        </div>
                                    </div>
                                    <p className="mt-sm-1">Your Current State <span>Tamil Nadu</span></p>
                                </div>
                                <div  className="row mt-sm-5 py-sm-2 px-sm-2" style={{justifyContent:"space-between",backgroundColor:"#FFFCDC"}}>
                                    <p>Amount</p>
                                    <p>Rs. {total+140}</p>
                                </div>
                            </div>
                            <div className="mt-sm-3">
                                <p style={{textAlign:"center"}}>SELECT TICKET TYPE</p>
                                <div className="row mt-sm-2 justify-sm-between">
                                    <div className="row py-sm-1 col-md-5 col-sm-12 justify-sm-center" style={{backgroundColor:"white",border:"1px solid lightgray" ,borderRadius:"5px"}}>
                                        <input type="radio" name="jegan" defaultChecked={true}></input>
                                        <p className="mx-sm-1">M-Ticket</p>
                                    </div>
                                    <div className="row py-sm-1 col-md-5 mt-sm-1 mt-md-0 col-sm-12 justify-sm-center" style={{backgroundColor:"white",border:"1px solid lightgray",borderRadius:"5px"}}>
                                        <input type="radio" name="jegan"/>
                                        <p className="mx-sm-1">Box Office Pickup</p>
                                    </div>
                                </div>
                                <p className="font-sm-1 my-sm-2" style={{textAlign:"center"}}>Show the m-tcket QR Code on your mobile to enter the cinema,</p>
                            </div>
                            <p className="font-sm-1" style={{textAlign:"center"}}>By proceeding, I express my consent to complete this transaction.</p>
                            <div onClick={change} className=" mt-sm-1 row justify-sm-between px-sm-2 pointer py-sm-1" style={{textAlign:"center",backgroundColor:"#F84464",borderRadius:"3px",color:"white",boxShadow:"5px 5px 10px #808080db"}}>
                                <p>TOTAL : Rs. {total}.00</p>
                                <p>Proceed</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        :<div className="success-animation">
          <div>
            <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"><circle className="checkmark__circle " cx="26" cy="26" r="25" fill="none" /><path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" /></svg>
            <div style={{textAlign:"center",color:"#4BB71B"}} className="mt-sm-2 font-sm-5 success">Success</div>
            <div className="go-home"><button onClick={Home}>Go - Home </button></div>
          </div>
        </div>}
    
    </>
    )
}

export default Price