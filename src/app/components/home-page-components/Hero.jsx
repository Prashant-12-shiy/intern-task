import React from 'react'
import Image from 'next/image'

const Hero = () => {
    return (
        <div className='w-auto flex flex-col items-center lg:mt-20'>
            <div className='max-w-250 flex flex-col items-center '>
                <div className='flex flex-col items-center'>
                    <h1 className='font-medium gradient-text text-5xl mb-5'>Google Workspace</h1>
                    <Image src={'/assets/google-apps.png'} height={36} width={246} alt='google-apps'/>
                </div>

                <div>
                    <p className='font-medium text-[54px] leading-16 text-center'><span className='text-[#4285F4]'>किन केही </span>Businesses efficiently <span className='text-[#4285F4]'>चल्छन्, र केही </span>daily operations मै struggle <span className='text-[#4285F4]'>गर्छन्?</span></p>
                    <p className='text-center text-2xl leading-7 font-medium mt-5'>Reason luck,ads वा team size होइन. Reason हो right partner with right tools.</p>
                </div>

                <div className='w-auto my-10'>
                    <Image src={'/assets/discounts.png'} height={212} width={295} alt='discounts' />
                </div>

                <p className='max-w-195.5 text-center text-2xl leading-7 font-medium'>Everything Your Business Needs to Work Smarter. A complete Google Workspace setup done right by Nest Nepal.</p>

                <div className='w-auto flex items-center justify-center gap-10 mt-8'>
                    <button className='bg-[#F25277] text-white rounded-[56px] text-center items-center flex border lg:w-44.75 lg:h-11.5 justify-center text-base'>15 min  · Free Demo</button>
                    <button className='border-black border rounded-[56px] text-center items-center flex gap-2 justify-center lg:w-44.75 lg:h-11.5'>
                        <p className='text-base'>  Get a quotation </p> <Image src={'/assets/right-top-arrow.png'} alt='arrow' width={14} height={14} /> </button>
                </div>
            </div>
        </div>
    )
}

export default Hero
