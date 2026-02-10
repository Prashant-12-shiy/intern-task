import React from "react";

const Brands = () => {
  return (
  <div className="w-auto flex flex-col items-center mt-12 md:mt-16 lg:mt-20 px-4 sm:px-6 lg:px-0">
  <h2 className="text-4xl lg:text-[46px] text-center w-full max-w-full sm:max-w-[80%] lg:max-w-193 leading-tight sm:leading-snug md:leading-normal lg:leading-[120%]">
    Brands using Google Workspace to succeed online,{" "}
    <span className="text-[#4285F4]"> कसरी?</span>
  </h2>
  <p className="text-xl lg:text-2xl w-full max-w-full sm:max-w-[80%] lg:max-w-139.5 text-center mt-3 sm:mt-4 lg:mt-5 font-medium">
    कसरी teams Google Workspace सँग productivity बढाउँछन् र समय बचत गर्छन्।
  </p>

  <div className="w-full flex flex-col lg:flex-row justify-center lg:justify-center gap-8 sm:gap-12 lg:gap-10 mt-10 sm:mt-14 lg:mt-20">
    <img 
      src="/assets/brands.png" 
      alt="brands" 
      height={500} 
      width={473}
      className="max-sm:max-w-[80%] mx-auto"
    />
    <div className="flex flex-col justify-center max-md:max-w-[80%] mx-auto">
      <p className="font-semibold text-xl sm:text-2xl leading-6 sm:leading-7">Your files, all in one place</p>
      <p className="text-base sm:text-lg md:text-xl lg:text-xl leading-6 sm:leading-7 w-full max-w-full lg:max-w-[469px] mt-2 sm:mt-3">
        Your files, all in one place{" "}
        <span className="highlight-text">Google Docs, Sheets, Slides</span>Microsoft Office files, and
        PDFs in real-time. Plus, access over 100 other file types!
      </p>

      <ul className="list-none gap-2 sm:gap-3 text-gray-500 text-base sm:text-lg md:text-xl lg:text-2xl leading-6 sm:leading-7 mt-3 sm:mt-4 lg:mt-5 *:pt-2 sm:*:pt-3 lg:*:pt-4">
        <li>Annotate PDFs</li>
        <li>AI-powered search</li>
        <li>Activity View</li>
      </ul>
    </div>
  </div>
</div>
  );
};

export default Brands;
