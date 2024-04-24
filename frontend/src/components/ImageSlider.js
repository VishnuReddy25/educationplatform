import React, { useEffect, useState } from 'react';

const ImageSlider = () => {
  const [index, setIndex] = useState(0);
  const [images] = useState([
    'https://th.bing.com/th/id/OIP.7uBkSaimXdKvusc2281O4QHaFj?w=235&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    'https://th.bing.com/th/id/OIP.-_1LA-86G8zEbH8skIM-cQHaJi?w=136&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    'https://th.bing.com/th/id/OIP.oQAf7qv5MH61t6N2_uHm1QHaD4?w=279&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7'
  ]);
  const [interval] = useState(1200);

  const timechanger = () => {
    const intervalId = setTimeout(() => {
      console.log("interval id executed");
      setIndex(prevIndex => (prevIndex + 1) % images.length);
    }, interval);
    return () => clearTimeout(intervalId); // Clear the timeout when the component unmounts or when index changes
  };

  const arrowChanger = padd => {
    if (index < images.length - 1 && padd === 1) {
      setIndex(prev => prev + padd);
    } else if (index > 0 && padd === -1) {
      setIndex(prev => prev + padd);
    }
  };

  useEffect(() => {
    console.log('hello');
    return timechanger();
  }, [index]);

  const radioChangeHandler = e => {
    setIndex(parseInt(e.target.value));
  };

  return (
    <div className='imageslider-container relative h-auto w-screen flex justify-center'>
      <div className='imageslider h-[350px] w-[400px]'>

        {images.map((item, i) => (
          <img
            key={i}
            className={`absolute object-cover top-0 left-0 right-0  ${i === index ? 'opacity-1' : 'opacity-0'}`}
            src={item}
            alt={`Slide ${i + 1}`}
          />
        ))}

        <div className='radiobuttoncontainer '>
          {images.map((item, i) => (
            <input
              className='imageradiobutton'
              key={i}
              type='radio'
              value={i}
              checked={index === i}
              onChange={radioChangeHandler}
            />
          ))}
        </div>

      </div>
    </div>
  );
};

export default ImageSlider;
