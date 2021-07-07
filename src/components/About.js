import React from "react"

// {img="https://via.placeholder.com/215"}
const About = (props) => {

  return (
    <aside>
      <img src={props.img} alt="blog Logo"/>
      <p>{props.about}</p>
    </aside>
  )
}

export default About