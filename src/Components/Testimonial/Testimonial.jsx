import React from "react";
import CenterUnderline from "../CenterUnderline";
import Man from "../../assets/man.png";
const Testimonial = () => {
  return (
    <div className="container mx-auto px-2 md:px-0">
      <h3 className="flex justify-center rubik font-bold text-4xl text-center">
        <CenterUnderline text="Testimonial" />
      </h3>
      <div className="text-center flex flex-col md:flex-row items-center gap-5 py-5">
        <img src={Man} className="w-30" />
        <p className="poppins opacity-80 font-medium">
          “This platform transformed my learning experience with clear lessons,
          practical skills, simple explanations, and is highly recommended for
          anyone serious about improving their knowledge.”
        </p>
      </div>
    </div>
  );
};

export default Testimonial;
