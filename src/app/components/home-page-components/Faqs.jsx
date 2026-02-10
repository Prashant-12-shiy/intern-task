"use client";

import { useState } from "react";
import { faqsData } from "../../libs/static-content";
import { ChevronDown } from "lucide-react";

export default function Faqs() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
  <section className="max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16">
  {/* Title */}
  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-center mb-12 sm:mb-16 md:mb-20">
    Frequently Asked Questions{" "}
    <span className="text-blue-600">(FAQs)</span>
  </h2>

  {/* FAQ List */}
  <div className="space-y-4">
    {faqsData.map((faq, index) => (
      <div
        key={index}
        className="border-b border-gray-300 pb-4 cursor-pointer"
        onClick={() => toggleFAQ(index)}
      >
        {/* Question */}
        <div className="flex justify-between items-center my-6 sm:my-8 md:my-10">
          <h3 className="text-lg sm:text-xl md:text-[22px] lg:text-xl font-medium pr-4">
            {faq.question}
          </h3>

          <ChevronDown
            className={`transition-transform duration-300 ${
              openIndex === index ? "rotate-180" : ""
            } w-5 h-5 sm:w-6 sm:h-6`}
          />
        </div>

        {/* Answer */}
        <div
          className={`overflow-hidden transition-all duration-300 ${
            openIndex === index
              ? "max-h-96 sm:max-h-80 md:max-h-60 lg:max-h-40 mt-2 sm:mt-3"
              : "max-h-0"
          }`}
        >
          <p className="text-gray-600 text-sm sm:text-base">
            {faq.answer}
          </p>
        </div>
      </div>
    ))}
  </div>
</section>
  );
}
