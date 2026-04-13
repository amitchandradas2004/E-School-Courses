import React from "react";
import BannerImage from "../../assets/Frame(1).png";
const Banner = () => {
  return (
    <div className="pt-15 pb-8 bg-[#F0FFF0] min-h-[60vh]  px-2 md:px-0">
      <div className="flex flex-col md:flex-row justify-between items-center gap-5 container mx-auto">
        <div className="left w-full md:w-2/3 ">
          <p className="poppins text-[#FD511A] font-semibold">
            Are you ready to Learn?
          </p>
          <h3 className="poppins text-5xl font-bold py-3">
            Learn With fun on{" "}
            <span className="text-[#21B573]">any schedule</span>
          </h3>
          <p className="text-[#6C6B6B] rubik pb-3">
            Upgrade your future with expert-led e-learning designed for
            real-world success. Master in-demand skills anytime, anywhere with
            flexible and engaging courses tailored for you.
          </p>
          <button className="btn bg-[#21B573] rounded-full text-white w-30">
            Get Started
          </button>
        </div>
        <div className="right">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
