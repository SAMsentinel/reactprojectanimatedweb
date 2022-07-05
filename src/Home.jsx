import React from "react";
import web from "../src/images/undraw_maker_launch_re_rq81.svg"
import { NavLink } from "react-router-dom";
import Common from "./Common";

const Home=()=> {
  return (
    <>
    <Common text = {"Grow your buisness with"} heading={"Sigma"} subtxt={"We are the group of talented developer"} btntxt={"Get Started"} img={web} path={"/services"}/>
    
    </>
  );
}

export default Home;
