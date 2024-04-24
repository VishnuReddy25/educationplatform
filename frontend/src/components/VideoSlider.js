import { Close } from '@mui/icons-material'
import React, { useEffect, useState } from 'react'
// import '../assets/CSS/videoslider.css'
const VideoSlider = ({slider,setVideolink,setTitle,setDescription,slidermenu,setSliderMenu}) => {
    // const [slidermenu,setSliderMenu]=useState(true)
    const [sslider,setSslider]=useState({
        "unit1": {
          "title": "Unit 1 Title",
          "description": "Unit 1 Description",
          "thumbnail": "https://th.bing.com/th/id/OIP.ka2i2AMgVtT6ENl9UvOuYAHaEL?w=306&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
          "video_link": "unit1_video_link.mp4"
        },
        "unit2": {
          "title": "Unit 2 Title",
          "description": "Unit 2 Description",
          "thumbnail": "unit2_thumbnail.jpg",
          "video_link": "unit2_video_link.mp4"
        },
        "unit3": {
          "title": "Unit 3 Title",
          "description": "Unit 3 Description",
          "thumbnail": "unit3_thumbnail.jpg",
          "video_link": "unit3_video_link.mp4"
        },
        "unit4": {
          "title": "Unit 4 Title",
          "description": "Unit 4 Description",
          "thumbnail": "unit4_thumbnail.jpg",
          "video_link": "unit4_video_link.mp4"
        }})
        useEffect(()=>{
            console.log(Object.keys(slider).map((item)=>(slider[item])))
            console.log(slider)
        },[slider])

        const clickHandler=(link,title,description)=>{
            setVideolink(link)
            setTitle(title)
            setDescription(description)
            console.log(link)
            setSliderMenu(prev=>!prev)
        }
      const sliderClose=()=>{
        setSliderMenu(prev=>!prev)
      }
      useEffect(()=>{console.log("slidermenu",slidermenu)},[slidermenu])
  return (<div className={slidermenu ?('relative  bg-black/80 lg:bg-white lg:flex'):("hidden lg:flex")}>
     <div className='videocontainer absolute top-0  flex flex-col p-1 mr-5 lg:mr-0 w-screen lg:w-[40vw]  lg:relative lg:max-h-[80vh]  lg:overflow-auto '>
      <div className='absolute right-0 top-0  hover:bg-gray-300 z-[30] p-3 lg:hidden ' onClick={sliderClose}>
        <Close sx={{fontSize:30}}/>
      </div>
      <div className=''>
        {Object.keys(slider).map((item)=>(
            
            <div className='videoitem flex p-1 bg-white border-2 rounded border-gray-800 mb-1' onClick={()=>{clickHandler(slider[item].video_link,slider[item].title,slider[item].description)}}>
            <span className='image  ' >
                <img className="h-[125px] w-[250px] rounded-md" src={slider[item].thumbnail} alt='thumbnail'/>
            </span>
            <div className='videocontent flex flex-col z-[20]'>
            <div className='title text-center'>
                {slider[item].title}
            </div>
            <div style={{"textOverflow":"ellipsis"}} className='description text-clip max-h-20 max-w-64 overflow-hidden pl-1.5 '>
                {slider[item].description}
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, vero laudantium! Non cum reiciendis adipisci ex fugit quas laudantium nobis, quibusdam quo voluptatum? Nobis minima maiores nam soluta dolorem molestias iste voluptatem ullam, hic consequuntur qui ducimus inventore, dolor velit ea enim! Architecto aut numquam incidunt rem, laudantium magni doloribus.
            </div>
            <div className='h-5 pl-2'>
                quick links
            </div>
            </div>
        </div>)
        )}
        </div>
    </div> 
  </div>
  );
}

export default VideoSlider