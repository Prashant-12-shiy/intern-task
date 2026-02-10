import React from "react";

const Contact = () => {
  return (
   <div className="w-full bg-[#F2F2F28F] rounded-xl flex flex-col md:flex-row justify-between items-center my-12 sm:my-16 md:my-20 lg:my-26 overflow-hidden min-h-0 lg:h-123.75">
  <div className="pl-6 sm:pl-8 md:pl-10 lg:pl-12 pr-6 sm:pr-8 lg:pr-0 w-full max-w-full lg:max-w-[529px] ml-0 lg:ml-10 *:mb-4 sm:*:mb-5 lg:*:mb-6 pt-8 sm:pt-10 lg:pt-0">
    <img
      src="/assets/contact-google-apps.png"
      alt="google-apps"
      width={529}
      height={56}
      className="w-full max-w-full sm:max-w-[80%] md:max-w-[70%] lg:max-w-none h-auto"
    />
    <h3 className="mt-3 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
      Prefer to talk to sales directly?
    </h3>
    <p className="text-base sm:text-lg md:text-xl lg:text-xl mt-2 sm:mt-3">
      तपाईंको company को unique requirements अनुसार तयार गरिएको solution सँग
      efficiency र collaboration maximize गर्नुहोस्।
    </p>
    <div className="flex flex-col lg:flex-row gap-4 max-lg:items-start sm:gap-6 lg:gap-10 items-center justify-center mt-4 sm:mt-6">
      <button className="bg-[#FDE5EB] rounded-2xl border h-10 sm:h-11 max-md:w-[60%] lg:w-[600px] flex justify-center md:justify-center items-center gap-3 sm:gap-4 px-4 sm:px-0">
        <img
          src={"/assets/red-whatsapp.png"}
          height={36}
          width={36}
          alt="whatsapp"
          className="w-8 h-8 sm:w-9 sm:h-9"
        />
        <p className="text-red-800 text-sm sm:text-base">Message on WhatsApp</p>
      </button>

      <div className="flex items-center gap-4 sm:gap-6 w-full justify-center max-lg:justify-start">
        <hr className="bg-gray-500 border lg:rotate border h-6 text-gray-400 hidden lg:block" />
        <p className="font-medium text-sm sm:text-base">call: +977 9864333517</p>
      </div>
    </div>
  </div>

 <div className="relative w-full max-w-[928px] mt-10 lg:mt-0 ">

  {/* Background */}
  <img
    src="/assets/rainbow-bg.png"
    alt="background"
    className="w-full "
  />

  {/* Foreground image */}
  <img
    src="/assets/contact-img.png"
    alt="contact-img-girl"
    className="
      absolute
      bottom-0
      left-1/2
      -translate-x-1/2
      w-[70%]
      sm:w-[60%]
      lg:w-[576px]
      lg:left-0
      lg:translate-x-0
      z-20
    "
  />

</div>

</div>
  );
};

export default Contact;
