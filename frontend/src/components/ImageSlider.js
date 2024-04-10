import React, { useEffect, useState } from 'react'
import '../s/ImageSlider.css'
const ImageSlider = () => {
    const [index,setIndex]=useState(0)
    const [images,setImages]=useState(['https://th.bing.com/th/id/OIP.7uBkSaimXdKvusc2281O4QHaFj?w=235&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
                                        'https://th.bing.com/th/id/OIP.-_1LA-86G8zEbH8skIM-cQHaJi?w=136&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
                                        'https://th.bing.com/th/id/OIP.oQAf7qv5MH61t6N2_uHm1QHaD4?w=279&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7'
                                        ])
    const [interval,setInterval]=useState(1200)
    const timechanger = () => {
        const intervalId = setTimeout(() => {
            console.log("interval id executed");
            setIndex(prevIndex => (prevIndex + 1) % images.length);
        }, interval);
         return () => clearTimeout(intervalId); // Clear the timeout when the component unmounts or when index changes
    };
    
    const arrowChanger=(padd)=>{
        if (index<images.length-1 && padd===1 ){
            setIndex(prev=>{return prev+padd})
        }else if(index>0 && padd===-1){
            setIndex(prev=>{return prev+padd})
        }
    }

    useEffect(()=>{
        console.log('hello')
        return timechanger()
    },[index])
    
    // useEffect(()=>{
    //         console.log("useeffect executed",index)
    //         const intervalId=setInterval(()=>{
    //             setIndex(()=>{
    //                 return (index+1)%images.length
    //             },interval)
    //         })
    //         return ()=>clearInterval(intervalId) 
    // },[index,interval])

    const radioChangeHandler=(e)=>{
        setIndex(parseInt(e.target.value))
    }
  return (<>
    <div className='imageslider-container'>
    <div className='imageslider'>
    
        {images.map((item,i)=>{return (<img 
        key={i}
        className={i===index?'slide active':'slide'}
        src={item} 
        alt={`Slide ${i+1}`}
        />)})}
    </div>
<div className='left-arrow' onClick={()=>{arrowChanger(-1)}}><span class="material-symbols-outlined " onClick={arrowChanger}>
arrow_back_ios
</span></div>
<div className='right-arrow' onClick={()=>{arrowChanger(1)}}><span class="material-symbols-outlined ">
arrow_forward_ios
</span>
</div>
    <div className='radiobuttoncontainer'>
            {images.map((item,i)=>{
                
                return <input className='imageradiobutton' key={i} type='radio' value={i} checked={index===i} onChange={radioChangeHandler}/>
            })}
    </div>
    </div>
    
  </>)
}

export default ImageSlider