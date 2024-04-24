import React from 'react'
import DisplayText from '../Home/DisplayText'
import ImageSlider from '../ImageSlider'
import CoursesButton from '../Home/CoursesButton'
import Testimonials from '../Home/Testimonials'
import LanguageBlocks from '../Home/LanguageBlocks'

const Home = () => {
  return (
    <div>
        <DisplayText/>
        <ImageSlider/>
        <CoursesButton/>
        <LanguageBlocks/>
        <Testimonials/>
    </div>
  )
}

export default Home