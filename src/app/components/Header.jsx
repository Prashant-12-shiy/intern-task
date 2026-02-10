"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const Header = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
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
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60),
        );
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
    <div>
      <div className="flex justify-between items-center px-6 bg-white lg:mx-32 lg:mt-8 mb-20 max-md:hidden">
        <div className="google-image-container">
          <Image
            src={"/assets/google1.png"}
            height={46}
            width={255}
            alt="Google Workspace"
            priority
          />
        </div>

        <div className="text-center flex flex-col items-center max-md:translate-y-24">
          <Image
            src={"/assets/valentineOfferImage.png"}
            height={39}
            width={211}
            alt="Valentine's Day Offer"
            className="max-md:w-30"
          />
          <div className="flex gap-3 justify-center -translate-y-5">
            <div className="text-center min-w-[60px]">
              <span className="text-5xl text-[#4285F4] font-bold max-md:text-2xl">
                {formatTime(timeLeft.days)}:
              </span>
              <br />
              <span className="text-sm font-semibold">Days</span>
            </div>
            <div className="text-center min-w-[60px] m">
              <span className="text-5xl font-bold text-[#4285F4]  max-md:text-2xl">
                {formatTime(timeLeft.hours)}:
              </span>
              <br />
              <span className="text-sm font-semibold">Hrs</span>
            </div>
            <div className="text-center min-w-[60px] ">
              <span className="text-5xl font-bold text-[#4285F4]  max-md:text-2xl">
                {formatTime(timeLeft.minutes)}:
              </span>
              <br />
              <span className="text-sm font-semibold">Min</span>
            </div>
            <div className="text-center min-w-[60px] ">
              <span className="text-5xl font-bold text-[#4285F4] max-md:text-2xl">
                {formatTime(timeLeft.seconds)}
              </span>
              <br />
              <span className="text-sm font-semibold">Sec</span>
            </div>
          </div>
        </div>

        <div>
          <button className="bg-[#E1F5E5] rounded-2xl border h-11 w-44 flex justify-around items-center hover:bg-[#d0edd4] transition-colors">
            <Image
              src={"/assets/whatsappLogo.png"}
              height={36}
              width={36}
              alt="WhatsApp"
            />
            <p className="text-green-800 font-medium">Contact Sales</p>
          </button>
        </div>
      </div>

      <div className="md:hidden bg-white py-4 px-4 mb-12">
        {/* Top Row: Logo and WhatsApp Button */}
        <div className="flex justify-between items-center mb-4">
          <div className="google-image-container">
            <Image
              src={"/assets/google1.png"}
              height={32}
              width={180}
              alt="Google Workspace"
              priority
              className="h-8 w-auto"
            />
          </div>

          <button className="bg-[#E1F5E5] rounded-2xl border h-10 px-4 flex items-center gap-2 hover:bg-[#d0edd4] transition-colors">
            <Image
              src={"/assets/whatsappLogo.png"}
              height={28}
              width={28}
              alt="WhatsApp"
              className="h-7 w-7"
            />
            <p className="text-green-800 font-medium text-sm">Contact</p>
          </button>
        </div>

        {/* Bottom Row: Valentine Offer and Timer - Centered */}
        <div className="text-center w-full">
          <div className="mb-2">
            <Image
              src={"/assets/valentineOfferImage.png"}
              height={32}
              width={180}
              alt="Valentine's Day Offer"
              className="mx-auto h-8 w-auto"
            />
          </div>

          <div className="flex gap-2 justify-center">
            <div className="text-center min-w-[45px]">
              <span className="text-2xl text-[#4285F4] font-bold">
                {formatTime(timeLeft.days)}:
              </span>
              <br />
              <span className="text-xs font-semibold">Days</span>
            </div>
            <div className="text-center min-w-[45px]">
              <span className="text-2xl font-bold text-[#4285F4]">
                {formatTime(timeLeft.hours)}:
              </span>
              <br />
              <span className="text-xs font-semibold">Hrs</span>
            </div>
            <div className="text-center min-w-[45px]">
              <span className="text-2xl font-bold text-[#4285F4]">
                {formatTime(timeLeft.minutes)}:
              </span>
              <br />
              <span className="text-xs font-semibold">Min</span>
            </div>
            <div className="text-center min-w-[45px]">
              <span className="text-2xl font-bold text-[#4285F4]">
                {formatTime(timeLeft.seconds)}
              </span>
              <br />
              <span className="text-xs font-semibold">Sec</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
