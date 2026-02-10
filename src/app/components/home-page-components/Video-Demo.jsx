"use client"

import Image from 'next/image'
import React from 'react'
import { useState, useRef } from 'react'

const VideoDemo = () => {
    const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handleVideoClick = () => {
    if (!isPlaying) {
      setIsPlaying(true);
      if (videoRef.current) {
        videoRef.current.play();
      }
    }
  };

  return (
    <div 
      className='flex items-center justify-center flex-col' 
      style={{ marginTop: "5rem" }}
    >
      {/* Video Container with Click Handler */}
      <div 
        className='relative cursor-pointer rounded-2xl overflow-hidden'
        onClick={handleVideoClick}
      >
        {/* Video Player - Hidden until clicked */}
        {isPlaying ? (
          <video
            ref={videoRef}
            className='rounded-2xl w-full max-w-[1322px] h-auto'
            controls
            autoPlay
            playsInline
          >
            <source src="/assets/video.mp4" type="video/mp4" />
            <source src="/assets/your-video.webm" type="video/webm" />
            Your browser does not support the video tag.
          </video>
        ) : (
          // Thumbnail/Preview Image - Shows before click
          <div className='relative'>
            <Image 
              src={'/assets/video-frame.png'} 
              alt='video-thumbnail' 
              height={624} 
              width={1322} 
              className='rounded-2xl w-full max-w-[1322px] h-auto'
            />
            {/* Play Button Overlay */}
            <div className='absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-all'>
              <div className='w-20 h-20 md:w-24 md:h-24 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-all'>
                <div className='w-0 h-0 border-t-[12px] border-b-[12px] border-l-[20px] border-transparent border-l-black ml-2'></div>
              </div>
            </div>
          </div>
        )}
      </div>
      
      <p className='text-xl font-medium tracking-7 text-center mt-5'>
        Get A Free 15 Min Demo  · See if it fits your business
      </p>
    </div>
  );
}

export default VideoDemo
