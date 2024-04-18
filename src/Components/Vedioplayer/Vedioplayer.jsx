import React from 'react'
import './Vedioplayer.css'
import video from '../../assets/college-video-6XtGR-D3.mp4'
import { useRef } from 'react'


function Vedioplayer({ playState,setPlayState}) {
   const player =useRef(null);

    const closeplayer=(e)=>{
        if(e.target===player.current){
            setPlayState(false)
        }
    }

  return (
    <div className={`video-player ${playState?"":"hide"}`} ref={player} onClick={closeplayer}>
      <video src={video} autoPlay muted controls></video>
    </div>
  )
}

export default Vedioplayer
