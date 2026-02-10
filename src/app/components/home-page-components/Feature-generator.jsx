import React from "react";

const FeatureGenerator = ({ icon, alt, boldText, description }) => {
  return (
      <div className="flex pt-2 pb-2 items-center gap-4">
        <img src={icon} alt={alt} height={25} width={25} />
        <p className="leading-5 text-sm">
          <span className="font-bold">{boldText}</span> {description}
        </p>
      </div>
  );
};

export default FeatureGenerator;
