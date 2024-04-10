import React from 'react'
import '../assets/CSS/Videoplayer.css'
const Videoplayer = () => {
  return (
    <div className='videoplayercontainer'>
        <div className='videotitle'>
            Title
        </div>
        <div className='videoplayer'>
        <video controls width="600">
        <source src="/SampleVideo_1280x720_1mb.mp4" type="video/mp4" />
                Your browser does not support the video tag.
        </video>
        </div>
        <div className='videoplayerdescription'>
            <h1>Description</h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe enim blanditiis minus numquam quisquam incidunt possimus magni aliquid, dicta eveniet laborum exercitationem repellat facere aspernatur rerum alias provident cumque temporibus?
        </div>
    </div>
  )
}

export default Videoplayer