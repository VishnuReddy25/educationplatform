import React from 'react';
import VideoSlider from "../VideoSlider.js";
import Videoplayer from "../Videoplayer";
import '../../assets/CSS/Coursecontent.css';

const Coursecontent = () => {
  return (<div className='outerbodycoursecontent'>
    <div className='coursecontentheader'>
        Python Crash course (Basic)
    </div>
    <div className="coursecontent">
        <VideoSlider/>
        <Videoplayer/>
    </div>
    </div>)
}

export default Coursecontent