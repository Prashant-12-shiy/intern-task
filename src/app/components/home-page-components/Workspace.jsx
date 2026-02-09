import React from "react";

const Workspace = () => {
  return (
    <div className="w-auto flex items-center flex-col mt-20 ">
      <div className="max-w-299 flex items-center flex-col ">
        <h2 className="max-w-160 text-[46px] text-center tracking-[106%] font-medium">
          <span className="text-[#4285F4]">सबै </span>
          Tools
          <span className="text-[#4285F4]"> एउटै </span>
          Platform मा
        </h2>
        <p className="font-medium gradient-text text-5xl mb-5">
          Google Workspace
        </p>

        <div className="flex items-center justify-between gap-20 mt-10">
          <div>
            <p className="text-[28px] leading-8 text-center">
              Premium AI built-in
            </p>
            <p className="text-gray-500 text-center text-xl leading-7 mt-3">
              Do your best work faster with the Gemini app, NotebookLM, and
              Gemini in Gmail, Docs, Sheets, and more.
            </p>
          </div>

          <div>
            <p className="text-[28px] leading-8 text-center">
              Tools born in the Cloud
            </p>
            <p className="text-gray-500 text-center text-xl leading-7 mt-3">
              Collaborate in real time, from any device, across tools that are
              always up- to-date.
            </p>
          </div>

          <div>
            <p className="text-[28px] leading-8 text-center">
              Enterprise-grade security
            </p>
            <p className="text-gray-500 text-center text-xl leading-7 mt-3">
              Protect your emails, files, and meetings with AI-powered security
              and compliance controls.
            </p>
          </div>
        </div>

        <button className="border-black border rounded-[56px] my-10 text-center items-center flex gap-2 justify-center lg:w-44.75 lg:h-11.5">
          <p className="text-base"> Get a quotation </p>{" "}
          <img
            src={"/assets/right-top-arrow.png"}
            width={14}
            height={14}
          />{" "}
        </button>

        <h3 className="font-bold text-center text-2xl leading-7 mb-7">Google Workspace includes:</h3>
        <img src="/assets/google-workspace.png" alt="google-workspaces" height={70} />
      </div>
    </div>
  );
};

export default Workspace;
