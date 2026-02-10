import React from "react";

const Footer = () => {
  return (
    <div
  className="
    h-auto sm:h-[400px] lg:h-[512px]
    rounded-[12px]
    bg-[radial-gradient(circle,_#0234F8_0%,_#011F92_100%)]
    overflow-hidden
    px-6 sm:px-10 md:px-12 lg:px-16
    py-8 sm:py-10
    relative
    flex flex-col justify-between
    mx-4 sm:mx-6 lg:mx-8
    my-6 sm:my-8
  "
>
  <div className="w-full flex flex-col sm:flex-row justify-between items-start gap-6 sm:gap-0">
    <img
      src="/assets/nest-nepal.png"
      alt="nst-nepal"
      width={213}
      height={28}
      className="w-40 sm:w-48 lg:w-52 h-auto"
    />

    <div className="w-full sm:w-auto max-md:hidden">
      <ul className="list-none text-white text-sm sm:text-base lg:text-lg opacity-75 space-y-1 sm:space-y-2">
        <li>Nepal</li>
        <li>Call us: +977 986-160-1774</li>
        <li className="hidden sm:block">Kupondole, Lalitpur, Nepal</li>
        <li className="hidden sm:block">support@nestsms.com</li>
      </ul>
      <ul className="list-none text-white text-sm sm:text-base lg:text-lg opacity-75 space-y-1 sm:hidden mt-2">
        <li>Kupondole, Lalitpur, Nepal</li>
        <li>support@nestsms.com</li>
      </ul>
    </div>
  </div>

  <div className="flex items-center justify-center pointer-events-none h-[120px] max-md:hidden lg:h-[200px] my-4 sm:my-6 lg:my-0 overflow-hidden">
    <h1
      className="
      text-6xl sm:text-7xl md:text-8xl lg:text-[200px]
      font-bold
      tracking-wider sm:tracking-widest
      uppercase
      whitespace-nowrap
      select-none
      leading-tight sm:leading-5
      text-transparent
      bg-clip-text
      [-webkit-background-clip:text]
      bg-gradient-to-b
      from-[#0234F8_0%]
      to-[#24389000]
      [-webkit-text-stroke:0.5px_rgba(255,255,255,0.25)] sm:[-webkit-text-stroke:1px_rgba(255,255,255,0.25)]
      px-2
    "
    >
      NEST NEPAL
    </h1>
  </div>

  <div className="flex flex-col sm:flex-row items-center justify-between text-white gap-4 sm:gap-0 max-md:hidden">
    <p className="text-sm sm:text-base lg:text-lg">Google Workspace</p>
    <div className="w-full sm:w-auto">
      <ul className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 lg:gap-6 text-sm sm:text-base">
        <li>Why google workspace?</li>
        <li>Pricing</li>
        <li className="flex gap-1 sm:gap-2 items-center">
          Get A Quotation{" "}
          <img
            src="/assets/white-arrow.png"
            alt="arrow"
            height={8}
            width={8}
            className="w-3 h-3 sm:w-4 sm:h-4"
          />
        </li>
      </ul>
    </div>
  </div>

   <div className="flex flex-col items-start text-white gap-4 sm:gap-0 md:hidden mt-16">
    <p className="text-sm sm:text-base lg:text-lg">Google Workspace</p>
    <div className="w-full sm:w-auto">
      <ul className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4 lg:gap-6 text-sm sm:text-base">
        <li>Why google workspace?</li>
        <li>Pricing</li>
        <li className="flex gap-1 sm:gap-2 items-center">
          Get A Quotation{" "}
          <img
            src="/assets/white-arrow.png"
            alt="arrow"
            height={8}
            width={8}
            className="w-3 h-3 sm:w-4 sm:h-4"
          />
        </li>
      </ul>
    </div>
  </div>

     <div className="w-full sm:w-auto md:hidden mt-10 mb-3">
      <p className="text-xl font-medium text-white">Support</p>
      <ul className="list-none text-white text-sm sm:text-base lg:text-lg opacity-75 space-y-1 sm:space-y-2">
        {/* <li>Nepal</li> */}
        <li>Call us: +977 986-160-1774</li>
        <li className="hidden sm:block">Kupondole, Lalitpur, Nepal</li>
        <li className="hidden sm:block">support@nestsms.com</li>
      </ul>
      <ul className="list-none text-white text-sm sm:text-base lg:text-lg opacity-75 space-y-1 sm:hidden mt-2">
        <li>Kupondole, Lalitpur, Nepal</li>
        <li>support@nestsms.com</li>
      </ul>
    </div>
</div>
  );
};

export default Footer;
