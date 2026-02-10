import Image from 'next/image'
import React from 'react'

const VideoDemo = () => {
    return (
        <div className='flex items-center justify-center flex-col'   style={{ marginTop: "5rem" }}>
            <Image src={'/assets/video-frame.png'} alt='video' height={624} width={1322} className='rounded-2xl' />
            <p className='text-xl font-medium tracking-7 text-center mt-5'>Get A Free 15 Min Demo  · See if it fits your business</p>
        </div>
    )
}

export default VideoDemo
