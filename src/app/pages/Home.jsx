import React from 'react'
import Header from '../components/Header'
import Hero from '../components/home-page-components/Hero'
import VideoDemo from '../components/home-page-components/Video-Demo'
import Pricing from '../components/home-page-components/Pricing'
import Workspace from '../components/home-page-components/Workspace'
import Solution from '../components/home-page-components/Solution'
import Brands from '../components/home-page-components/Brands'
import Faqs from '../components/home-page-components/Faqs'
import Contact from '../components/home-page-components/Contact'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div >
        <Header/>
        <main className='lg:mx-32 lg:mt-8 mx-5'>
        <Hero/>
        <VideoDemo/>
        <Pricing/>
        <Workspace/>
        <Solution/>
        <Brands/>
        <Faqs/>
        <Contact/>
        </main>
        <Footer/>
    </div>
  )
}

export default Home
