import React from "react";
import "./Footer.css";
import {ReactComponent as Logo } from "./assets/Logo.svg";
import CopyrightIcon from '@material-ui/icons/Copyright';

function Footer() {
    return (
        <div className="main-footer">
           <div className="container-1">
               <div className="row footer_motto">
                    <h2>Think of giving not as a duty, but as a privilege.</h2>
               </div>
               <div className=" footer_cc">
                   <CopyrightIcon />       
                   <span style={{paddingLeft: "15px"}}>E-Commerce, Inc. 2023</span> 
               </div>
               <div className="footer_logo">
                    <Logo />    
               </div>

           </div>
        </div>
    )
}

export default Footer;