import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#282531] text-white py-10">
      <div className="flex flex-col md:flex-row text-center md:text-start justify-between items-center container mx-auto rubik space-y-5">
        <div>
          <p>
            Millions of people of all <br /> ages and from around <br /> the
            world are improving <br /> their lives with us
          </p>
        </div>
        <div className="space-y-3">
          <h3 className="text-2xl font-bold">Course</h3>
          <div className="opacity-70">
            <a href="#">
              {" "}
              <p>Graphic Design</p>
            </a>
            <a href="#">
              {" "}
              <p>Web Design</p>
            </a>
            <a href="#">
              <p>Business</p>
            </a>
            <a href="#0">
              <p>Marketing</p>
            </a>
            <a href="#">
              <p>Engineering</p>
            </a>
          </div>
        </div>
        <div className="space-y-3">
          <h3 className="text-2xl font-bold">Terms</h3>
          <div className="opacity-70">
            <a href="#">
              {" "}
              <p>Graphic Design</p>
            </a>
            <a href="#">
              {" "}
              <p>Web Design</p>
            </a>
            <a href="#">
              <p>Business</p>
            </a>
            <a href="#0">
              <p>Marketing</p>
            </a>
            <a href="#">
              <p>Engineering</p>
            </a>
          </div>
        </div>
        <div className="space-y-3">
          <h3 className="text-2xl font-bold">Useful Link</h3>
          <div className="opacity-70">
            <a href="#">
              {" "}
              <p>Graphic Design</p>
            </a>
            <a href="#">
              {" "}
              <p>Web Design</p>
            </a>
            <a href="#">
              <p>Business</p>
            </a>
            <a href="#0">
              <p>Marketing</p>
            </a>
            <a href="#">
              <p>Engineering</p>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
