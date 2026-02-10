import { SolutionsData } from "@/app/libs/static-content";
import React from "react";

const Solution = () => {
  return (
    <div className="w-auto mt-12 md:mt-16 lg:mt-20 flex flex-col items-center px-4 sm:px-6 lg:px-0">
      <h2 className="w-full max-w-full sm:max-w-[80%] lg:max-w-136 text-center text-4xl lg:text-[46px] leading-tight sm:leading-snug md:leading-normal lg:leading-14 font-medium">
        Solutions for businesses,
        <span className="text-[#4285F4]"> साना देखि ठूला सबैका लागि</span>
      </h2>

      <p className="text-xl lg:text-2xl w-full max-w-full sm:max-w-[80%] lg:w-153.75 mt-3 sm:mt-4 text-center font-medium px-2">
        No matter the size, Google Workspace ले तपाईंको business को सबै needs
        पूरा गर्छ
      </p>

      <div className="flex flex-col lg:flex-row gap-8 sm:gap-10 lg:gap-6 justify-between items-center mt-10 sm:mt-12 md:mt-14 lg:mt-16 w-full">
        <div className="max-w-full sm:max-w-[80%] md:max-w-92.5 w-full">
          <img
            src="/assets/solution-first.png"
            alt="solution-img"
            height={208}
            width={370}
            className="w-full h-auto"
          />
          <h3 className="text-xl sm:text-2xl leading-7 sm:leading-8 text-center mb-2 mt-4 sm:mt-6">
            For enterprise
          </h3>
          <p className="text-center text-sm sm:text-base lg:text-[18px] leading-6 sm:leading-7 px-4 sm:px-6 text-gray-500">
            Secure collaboration{" "}
            <span className="text-[#4285F4]"> tools for enterprise,</span> with
            premium AI and enterprise-grade security built in for all the ways
            work is changing.
          </p>
        </div>

        <div className="max-w-full sm:max-w-[80%] md:max-w-92.5 w-full">
          <img
            src="/assets/solution-secon.png"
            alt="solution-img"
            height={208}
            width={370}
            className="w-full h-auto"
          />
          <h3 className="text-xl sm:text-2xl leading-7 sm:leading-8 text-center mb-2 mt-4 sm:mt-6">
            For small business
          </h3>
          <p className="text-center text-sm sm:text-base lg:text-[18px] leading-6 sm:leading-7 px-4 sm:px-6 text-gray-500">
            Tools for <span className="text-[#4285F4]"> small businesses </span>{" "}
            that help teams and{" "}
            <span className="text-[#4285F4]">individuals</span> with everyday
            tasks like scheduling appointments and email marketing.
          </p>
        </div>

        <div className="max-w-full sm:max-w-[80%] md:max-w-92.5 w-full">
          <img
            src="/assets/solution-third.png"
            alt="solution-img"
            height={208}
            width={370}
            className="w-full h-auto"
          />
          <h3 className="text-xl sm:text-2xl leading-7 sm:leading-8 text-center mb-2 mt-4 sm:mt-6">
            For new business
          </h3>
          <p className="text-center text-sm sm:text-base lg:text-[18px] leading-6 sm:leading-7 px-4 sm:px-6 text-gray-500">
            Essentials tools for{" "}
            <span className="text-[#4285F4]">new businesses and startups </span>{" "}
            , including business email domains, online file sharing and storage,
            and more.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Solution;
