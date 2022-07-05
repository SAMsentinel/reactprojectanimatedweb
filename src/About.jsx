import React from "react";
import web from "../src/images/about-us.webp";
import Common from "./Common";

const About=()=> {
  return (
    <>
    <Common text = {" Welcome to about page "} heading={"Sigma"} subtxt={"We are the team of developer making Apps & Websites"} btntxt={"Contact now"} img={web} path={"/contact"}/>
    
    
    </>
  );
}

export default About;