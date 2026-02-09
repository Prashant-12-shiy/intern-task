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
    <div className="w-full flex items-center flex-col mt-20">
      {/* trusted company section */}
      <div className="flex flex-col items-center">
        <p className="text-center text-2xl font-medium max-w-120 opacity-80 mb-6">
          Trusted by 1,000+ Nepali businesses on their growth journey.{" "}
          <span className="text-[#4285F4]">अब तपाईंको team तयार छ?</span>{" "}
        </p>

        <img src={"/assets/companies.png"} height={42} />
      </div>

      {/* pricing and features company section */}
      <div className="mt-26 w-auto ">
        <div className="max-w-190 flex flex-col items-center gap-4">
          <p className="text-5xl text-center leading-[108%] font-medium">
            के{" "}
            <span className="font-medium gradient-text text-5xl mb-5">
              Google Workspace
            </span>{" "}
            तपाईंको business growth{" "}
            <span className="text-[#4285F4]">को लागि</span> best fit{" "}
            <span className="text-[#4285F4]">हो</span> ?{" "}
          </p>

          <p className="text-2xl text-center max-w-160">
            Tailored Plans तपाईंको Online Presence को हरेक पहलुलाई Elevate र
            Empower गर्न।
          </p>

          <img src="/assets/google-apps2.png" height={24} width={198} />
        </div>

        <div className="flex justify-between items-start mt-16">
          <div className="flex flex-col items-center gap-5">
            <h3 className="text-3xl font-medium leading-9">Starter</h3>
            <div className="flex justify-center gap-4">
              <p className="text-[48px] leading-11 tracking-[-0.5px]">
                <span className="text-base">Rs.</span>499
              </p>

              <div className="relative inline-block">
                <p className="text-[36px] leading-11 tracking-[-0.5px] text-gray-400">
                  560
                </p>
                {/* Diagonal line from top-left to bottom-right */}
                <div className="absolute top-0 left-0 w-full h-full">
                  <div className="absolute top-0 left-0 w-[120%] h-0.5 bg-red-500 transform origin-top-left rotate-30"></div>
                </div>
              </div>
            </div>

            <div className="text-center *:text-gray-500">
            <p>per user / month,</p>
            <p>1 year commitment</p>
            </div>
            <button>
              <button className="bg-[#FDE5EB] rounded-2xl border h-11 w-44 flex justify-around items-center">
                <Image
                  src={"/assets/red-whatsapp.png"}
                  height={36}
                  width={36} 
                  alt="whatsapp"
                />
                <p className="text-red-800">Contact Sales</p>
              </button>
            </button>
          </div>

          <div className="h-full w-1">
            <div className="w-10 bg-gray-500 border-gray-400 h-full" />
          </div>

          <div className="flex flex-col ">
            <div>
              <p className="font-bold">Storage</p>

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

            <div className="mt-5">
              <p className="font-bold">Communicate</p>

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

          <div>
            <div>
              <p className="font-bold">Collaborate</p>

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

            <div className="mt-5">
              <p className="font-bold">Control</p>

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
  );
};

export default Pricing;
