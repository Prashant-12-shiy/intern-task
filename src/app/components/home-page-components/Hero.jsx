import React from 'react'
import Image from 'next/image'

const Hero = () => {
    return (
     <div className='w-auto flex flex-col items-center mt-8 md:mt-12 lg:mt-20'>
    <div className='w-full max-w-[90%] md:max-w-[80%] lg:max-w-250 flex flex-col items-center px-4 sm:px-6'>
        <div className='flex flex-col items-center w-full'>
            <h1 className='font-medium gradient-text text-3xl sm:text-4xl md:text-5xl pb-3 sm:pb-4 md:pb-5 text-center'>Google Workspace</h1>
            <Image 
                src={'/assets/google-apps.png'} 
                height={36} 
                width={246} 
                alt='google-apps'
                className='w-auto h-6 sm:h-8 md:h-9 lg:h-auto'
            />
        </div>

        <div className='mt-6 md:mt-8 w-full'>
            <p className='font-medium text-2xl sm:text-3xl md:text-4xl lg:text-[54px] leading-tight sm:leading-snug md:leading-normal lg:leading-16 text-center px-2'>
                <span className='text-[#4285F4]'>किन केही </span>Businesses efficiently <span className='text-[#4285F4]'>चल्छन्, र केही </span>daily operations मै struggle <span className='text-[#4285F4]'>गर्छन्?</span>
            </p>
            <p className='text-center text-base sm:text-lg md:text-xl lg:text-2xl leading-6 sm:leading-7 font-medium mt-4 sm:mt-5 px-2'>
                Reason luck,ads वा team size होइन. Reason हो right partner with right tools.
            </p>
        </div>

        <div className='w-auto my-6 sm:my-8 md:my-10'>
            <Image 
                src={'/assets/discounts.png'} 
                height={212} 
                width={295} 
                alt='discounts' 
                className='w-48 sm:w-64 md:w-80 lg:w-auto h-auto'
            />
        </div>

        <p className='w-full max-w-full sm:max-w-[90%] md:max-w-195.5 text-center text-base sm:text-lg md:text-xl lg:text-2xl leading-6 sm:leading-7 font-medium px-2'>
            Everything Your Business Needs to Work Smarter. A complete Google Workspace setup done right by Nest Nepal.
        </p>

        <div className='w-full flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 lg:gap-10 mt-6 sm:mt-8'>
            <button className='bg-[#F25277] text-white rounded-[56px] text-center items-center flex border w-full sm:w-auto lg:w-44.75 h-11 sm:h-11.5 justify-center text-sm sm:text-base px-6'>
                15 min  · Free Demo
            </button>
            <button className='border-black border rounded-[56px] text-center items-center flex gap-2 justify-center w-full sm:w-auto lg:w-44.75 h-11 sm:h-11.5 px-6'>
                <p className='text-sm sm:text-base'>Get a quotation</p> 
                <Image src={'/assets/right-top-arrow.png'} alt='arrow' width={14} height={14} className='w-3 h-3 sm:w-3.5 sm:h-3.5' />
            </button>
        </div>
    </div>
</div>
    )
}

export default Hero
