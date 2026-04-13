import React from "react";
import Image1 from "../../assets/image-1.png";
import Image2 from "../../assets/image-2.png";
import Image3 from "../../assets/image-3.png";
import Image4 from "../../assets/image-4.png";
const Cards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 container mx-auto px-3 md:px-0 py-10">
      <div className="card-1 poppins text-center space-y-2   shadow-sm rounded-2xl py-5 px-3 transition hover:-translate-y-0.5">
        <img src={Image1} className="w-12 mx-auto" />
        <h3 className="text-2xl font-semibold ">1500+ Topic</h3>
        <p>Learn Anythings</p>
      </div>
      <div className="card-2 poppins text-center space-y-2  shadow-lg rounded-2xl  py-5 px-3 transition hover:-translate-y-0.5">
        <img src={Image2} className="w-12 mx-auto" />
        <h3 className="text-2xl font-semibold ">1800+ Students</h3>
        <p>Learn Anythings</p>
      </div>
      <div className="card-1 poppins text-center space-y-2  shadow-sm rounded-2xl py-5 px-3 transition hover:-translate-y-0.5">
        <img src={Image3} className="w-12 mx-auto" />
        <h3 className="text-2xl font-semibold ">9K+ Test Token</h3>
        <p>Learn Anythings</p>
      </div>
      <div className="card-1 poppins text-center space-y-2  shadow-sm rounded-2xl py-5 px-3 transition hover:-translate-y-0.5">
        <img src={Image4} className="w-12 mx-auto" />
        <h3 className="text-2xl font-semibold ">2000+ Student</h3>
        <p>Learn Anythings</p>
      </div>
    </div>
  );
};

export default Cards;
