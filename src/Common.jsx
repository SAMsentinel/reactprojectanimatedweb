import React from "react";
import web from "../src/images/undraw_maker_launch_re_rq81.svg"
import { NavLink } from "react-router-dom";

const Common=(props)=> {
  return (
    <>
    <section id="header" className="d-flex align-items-center ">

    <div className="container-fluid nav bg">
            <div className="row">
                <div className="col-10 mx-auto">
                  <div className="row">
                 
                  <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column ">

                    <h1> {props.text}<strong className="brand-name"> {props.heading} </strong></h1>

                    <h2 className="my-3">{props.subtxt}</h2>

                    <div className="my-3">
                      <NavLink to={props.path} className="btn-get-started">{props.btntxt}</NavLink>
                    </div>
                  
                  </div>




                      <div className="col-lg-6 order-1 order-lg-2 header-img">

                        <img src={props.img} className="img-fluid animated " alt="home image"/>

                      </div>

                   </div>



                </div>

            </div>
        </div>
    </section>
    
    </>
  );
}

export default Common;
