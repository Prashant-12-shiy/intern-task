"use client"
import Image from 'next/image';
import React, { useState, useEffect } from 'react';

const Header = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const currentYear = now.getFullYear();
      const valentineDate = new Date(currentYear, 1, 14); // February is month 1 (0-indexed)
      
      // If Valentine's Day has passed this year, target next year
      if (now > valentineDate) {
        valentineDate.setFullYear(currentYear + 1);
      }

      const difference = valentineDate.getTime() - now.getTime();
      
      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        return { days, hours, minutes, seconds };
      }
      
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    };

    // Set initial time
    setTimeLeft(calculateTimeLeft());

    // Update timer every second
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(timer);
  }, []);

  // Format numbers to always show 2 digits
  const formatTime = (time) => {
    return time < 10 ? `0${time}` : time.toString();
  };

  return (
    <div className='flex justify-between items-center px-6 bg-white'>
      <div className='google-image-container'>
        <Image 
          src={'/assets/google1.png'} 
          height={46} 
          width={255} 
          alt="Google Workspace" 
          priority
        />
      </div>

      <div className='text-center flex flex-col items-center'>
        <Image 
          src={'/assets/valentineOfferImage.png'} 
          height={39} 
          width={211} 
          alt="Valentine's Day Offer"
        />
        <div className='flex gap-3 justify-center -translate-y-5'>
          <div className='text-center min-w-[60px]'>
            <span className='text-3xl text-[#4285F4] font-bold'>{formatTime(timeLeft.days)}</span>
            <br />
            <span className='text-sm font-semibold'>Days</span>
          </div>
          <div className='text-center min-w-[60px]'>
            <span className='text-3xl font-bold text-[#4285F4]'>{formatTime(timeLeft.hours)}</span>
            <br />
            <span className='text-sm font-semibold'>Hrs</span>
          </div>
          <div className='text-center min-w-[60px]'>
            <span className='text-3xl font-bold text-[#4285F4]'>{formatTime(timeLeft.minutes)}</span>
            <br />
            <span className='text-sm font-semibold'>Min</span>
          </div>
          <div className='text-center min-w-[60px]'>
            <span className='text-3xl font-bold text-[#4285F4]'>{formatTime(timeLeft.seconds)}</span>
            <br />
            <span className='text-sm font-semibold'>Sec</span>
          </div>
        </div>
      </div>

      <div>
        <button className='bg-[#E1F5E5] rounded-2xl border h-11 w-44 flex justify-around items-center hover:bg-[#d0edd4] transition-colors'>
          <Image 
            src={'/assets/whatsappLogo.png'} 
            height={36} 
            width={36} 
            alt="WhatsApp"
          />
          <p className='text-green-800 font-medium'>Contact Sales</p>
        </button>
      </div>
    </div>
  );
};

export default Header;