import React,{useState} from 'react'
import Blue from './images/blue.jpg';
import Img4 from './images/img4.jpg';
import Download from "./images/download.jpg"


function MouseHover() {

    const [initial,finalimage] =useState(Blue)
    

    const handleMouseEnter = e => {
        // e.target.style.background = "green"
        finalimage(Img4)
      }
      const handleMouseLeave = e => {
        finalimage(Blue)
      }
  return (
    <div  style={{height:"400px",width:"400px",backgroundColor:"grey"}}
    onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
         >
             <img src={initial} />
        MouseHover
    </div>
  )
}

export default MouseHover