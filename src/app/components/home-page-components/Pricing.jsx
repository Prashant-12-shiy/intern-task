import Image from "next/image";
import React from "react";
import FeatureGenerator from "./Feature-generator";
import {
  CollaboratefeaturesData,
  CommunicatefeaturesData,
  ControlfeaturesData,
  StoragefeaturesData,
} from "@/app/libs/static-content";

const Pricing = () => {
  return (
    <div className="w-full flex items-center flex-col mt-8 md:mt-20">
  {/* trusted company section */}
  <div className="flex flex-col items-center px-4 md:px-0">
    <p className="text-center text-lg md:text-2xl font-medium max-w-full md:max-w-130 opacity-80 mb-4 md:mb-6 px-2">
      Trusted by 1,000+ Nepali businesses on their growth journey.{" "}
      <span className="text-[#4285F4]">अब तपाईंको team तयार छ?</span>
    </p>

    <img 
      src={"/assets/companies.png"} 
      height={32} 
      className="w-auto h-8 md:h-10"
      alt="Trusted companies"
    />
  </div>

  {/* pricing and features company section */}
  <div className="mt-12 md:mt-26 w-full max-w-[1218px] px-4 md:px-8 lg:px-0 flex flex-col items-center">
    <div className="max-w-full md:max-w-200 flex flex-col items-center gap-3 md:gap-4">
      <p className="text-2xl md:text-4xl lg:text-5xl text-center leading-[108%] font-medium px-2">
        के{" "}
        <span className="font-medium gradient-text text-2xl md:text-4xl lg:text-5xl pb-2 md:pb-5">
          Google Workspace
        </span>{" "}
        तपाईंको business growth{" "}
        <span className="text-[#4285F4]">को लागि</span> best fit{" "}
        <span className="text-[#4285F4]">हो</span> ?
      </p>

      <p className="text-base md:text-xl lg:text-2xl text-center max-w-full md:max-w-160 px-2">
        Tailored Plans तपाईंको Online Presence को हरेक पहलुलाई Elevate र
        Empower गर्न।
      </p>

      <img 
        src="/assets/google-apps2.png" 
        className="h-5 w-auto md:h-6 lg:h-auto md:w-[198px]"
        alt="Google Apps"
      />
    </div>

    <div className="flex flex-col lg:flex-row w-full justify-between lg:justify-around items-center lg:items-start mt-16 md:mt-30 gap-10 lg:gap-6">
      {/* Starter Plan Card */}
      <div className="flex flex-col items-center gap-4 md:gap-5 w-full max-w-md lg:w-auto px-4">
        <h3 className="text-2xl md:text-3xl font-medium leading-9">Starter</h3>
        
        <div className="flex justify-center items-center gap-3 md:gap-4 mt-4 md:mt-10">
          <p className="text-[36px] md:text-[48px] leading-11 tracking-[-0.5px]">
            <span className="text-sm md:text-base">Rs.</span>499
          </p>

          <div className="relative inline-block">
            <p className="text-[24px] md:text-[36px] leading-11 tracking-[-0.5px] text-gray-400">
              560
            </p>
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="absolute top-0 left-0 w-[120%] h-0.5 bg-red-500 transform origin-top-left rotate-30"></div>
            </div>
          </div>
        </div>

        <div className="text-center *:text-gray-500 text-sm md:text-base">
          <p>per user / month,</p>
          <p>1 year commitment</p>
        </div>

        <button className="bg-[#FDE5EB] border-red-800 rounded-2xl border h-10 md:h-11 w-full max-w-xs md:w-48 flex gap-4 md:gap-6 items-center justify-center mt-2">
          <Image
            src={"/assets/red-whatsapp.png"}
            height={28}
            width={28}
            className="h-7 w-7 md:h-9 md:w-9"
            alt="whatsapp"
          />
          <p className="text-red-800 text-sm md:text-base">Contact Sales</p>
        </button>
      </div>

      {/* Vertical Divider - Hidden on mobile, shown on desktop */}
      <div className="hidden lg:block border opacity-50 bg-gray-500 border-gray-400 h-110 w-px mx-20" />
      
      {/* Mobile horizontal divider */}
      <div className="lg:hidden w-full max-w-md h-px bg-gray-300 opacity-50" />

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 md:gap-12 w-full max-w-4xl">
        {/* Storage Features */}
        <div className="flex flex-col">
          <div>
            <p className="font-bold text-lg md:text-xl mb-4">Storage</p>
            {StoragefeaturesData.map((feature, index) => (
              <FeatureGenerator
                key={index}
                icon={feature.icon}
                alt={feature.alt}
                boldText={feature.boldText}
                description={feature.description}
              />
            ))}
          </div>

          <div className="mt-6 md:mt-8">
            <p className="font-bold text-lg md:text-xl mb-4">Communicate</p>
            {CommunicatefeaturesData.map((feature, index) => (
              <FeatureGenerator
                key={index}
                icon={feature.icon}
                alt={feature.alt}
                boldText={feature.boldText}
                description={feature.description}
              />
            ))}
          </div>
        </div>

        {/* Collaborate & Control Features */}
        <div className="flex flex-col">
          <div>
            <p className="font-bold text-lg md:text-xl mb-4">Collaborate</p>
            {CollaboratefeaturesData.map((feature, index) => (
              <FeatureGenerator
                key={index}
                icon={feature.icon}
                alt={feature.alt}
                boldText={feature.boldText}
                description={feature.description}
              />
            ))}
          </div>

          <div className="mt-6 md:mt-8">
            <p className="font-bold text-lg md:text-xl mb-4">Control</p>
            {ControlfeaturesData.map((feature, index) => (
              <FeatureGenerator
                key={index}
                icon={feature.icon}
                alt={feature.alt}
                boldText={feature.boldText}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  );
};

export default Pricing;
