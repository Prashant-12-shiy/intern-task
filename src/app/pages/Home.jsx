import React from 'react'
import Header from '../components/Header'
import Hero from '../components/home-page-components/Hero'
import VideoDemo from '../components/home-page-components/Video-Demo'
import Pricing from '../components/home-page-components/Pricing'
import Workspace from '../components/home-page-components/Workspace'
import Solution from '../components/home-page-components/Solution'

const Home = () => {
  return (
    <div className='lg:mx-32 lg:mt-8'>
        <Header/>
        <Hero/>
        <VideoDemo/>
        <Pricing/>
        <Workspace/>
        <Solution/>
    </div>
  )
}

export default Home
