import React from 'react'
import '../assets/CSS/videoslider.css'
const VideoSlider = () => {
  return (
    <div className='videocontainer'>
        <div className='videoitem'>
            <span className='image' >
                <img src='https://th.bing.com/th/id/OIP.xU9Y_WmLguhyvLB7-4GnHwHaE7?w=240&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' alt='thumbnail'/>

            </span>
            <div className='videocontent'>
            <div className='title'>
                Title
            </div>
            <div className='description'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                Suscipit minima, rem, quasi magni omnis tenetur, 
                optio vero ex quas nesciunt modi possimus assumenda officiis
                 unde odio voluptates similique id ad.
            </div>
            <div>
                quick links
            </div>
            </div>
        </div>
        <div className='videoitem'>
            <span className='image' >
                <img src='https://th.bing.com/th/id/OIP.xU9Y_WmLguhyvLB7-4GnHwHaE7?w=240&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' alt='thumbnail'/>

            </span>
            <div className='videocontent'>
            <div className='title'>
                Title
            </div>
            <div className='description'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                Suscipit minima, rem, quasi magni omnis tenetur, 
                optio vero ex quas nesciunt modi possimus assumenda officiis
                 unde odio voluptates similique id ad.
            </div>
            <div>
                quick links
            </div>
            </div>
        </div>
    </div>
  );
}

export default VideoSlider