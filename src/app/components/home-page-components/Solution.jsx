import { SolutionsData } from "@/app/libs/static-content";
import React from "react";

const Solution = () => {
  return (
    <div className="w-auto mt-20 flex flex-col items-center">
      <h2 className="max-w-136 text-center text-[46px] leading-14 font-medium">
        Solutions for businesses,
        <span className="text-[#4285F4]"> साना देखि ठूला सबैका लागि</span>
      </h2>

      <p className="text-2xl w-153.75 mt-4 text-center font-medium">
        No matter the size, Google Workspace ले तपाईंको business को सबै needs
        पूरा गर्छ
      </p>

      <div className="flex gap-6 justify-between items-center mt-16">
        <div className="max-w-92.5">
            <img src="/assets/solution-first.png" alt="solution-img" height={208} width={370}/>
            <h3 className="text-2xl leading-8 text-center mb-2 mt-6">For enterprise</h3>
            <p className="text-center text-[18px] leading-7 px-6 text-gray-500">
             Secure collaboration <span className="text-[#4285F4]"> tools for enterprise,</span> with premium AI and enterprise-grade security built in for all the ways work is changing.
            </p>
          </div>

           <div className="max-w-92.5">
            <img src="/assets/solution-secon.png" alt="solution-img"  height={208} width={370} />
            <h3 className="text-2xl leading-8 text-center mb-2 mt-6">For small business</h3>
            <p className="text-center text-[18px] leading-7 px-6 text-gray-500">
            Tools for <span className="text-[#4285F4]"> small businesses </span> that help teams and <span className="text-[#4285F4]">individuals</span> with everyday tasks like scheduling appointments and email marketing.
            </p>
          </div>

           <div className="max-w-92.5">
            <img src="/assets/solution-third.png" alt="solution-img"  height={208} width={370}/>
            <h3 className="text-2xl leading-8 text-center mb-2 mt-6">For new business</h3>
            <p className="text-center text-[18px] leading-7 px-6 text-gray-500">
            Essentials tools for <span className="text-[#4285F4]">new businesses and startups </span> , including business email domains, online file sharing and storage, and more.
            </p>
          </div>
      </div>
    </div>
  );
};

export default Solution;
