
import React from "react"

//minutes >= 30 ? minuteEmojiConverter(mins, 10, "🍱") : minuteEmojiConverter(mins, 5, "☕️")

const minuteEmojiConverter = (mins, divisor, icon) => {
  let minuteDisplay
  let displayedIcons = []
  let numberOfIcons = Math.ceil(mins/divisor)
  for (let i = 0; i <= numberOfIcons; i++) {
    displayedIcons.push(icon)
  }
  minuteDisplay = ((displayedIcons.join("")) + mins + "min read")
  console.log(minuteDisplay)
  return minuteDisplay
}


const Article = ({title, date="January 1, 1970", preview, minutes}) => {

  return (

    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      <small>* {minutes >= 30 ? minuteEmojiConverter(minutes, 10, "🍱") : minuteEmojiConverter(minutes, 5, "☕️")}</small>
      <p>{preview}</p>
    </article>
  )
}

export default Article