import React from "react"

// {img="https://via.placeholder.com/215", about}
const About = (props) => {
  console.log(props.about)
  return (
    <aside>
      <img src={props.img} alt="blog logo"/>
      <p>{props.about}</p>
    </aside>
  )
}

export default About