import React from "react";
import Links from "./Links";
let bio_tag
function About(props) {
  if(props.bio){
    return (
      <div id="about">
        <h2>About Me</h2>
        <p>{props.bio}</p>
        
        <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
        {/* add your <Links /> component here */}
        <Links github={props.links.github} linkedin={props.links.linkedin}></Links>
      </div>
    )
  }else{
    return (
      <div id="about">
        <h2>About Me</h2>
        <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
        {/* add your <Links /> component here */}
        <Links github={props.links.github} linkedin={props.links.linkedin}></Links>
      </div>
    )
  }
}

export default About;
