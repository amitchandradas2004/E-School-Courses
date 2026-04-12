import React from "react";
import NavImage from "../../assets/Frame.png";
import CenterUnderline from "../CenterUnderline";
const Navbar = () => {
  return (
    <nav className="shadow-sm fixed top-0 w-full">
      <div className="flex justify-between   items-center py-1 container mx-auto">
        <div className="flex items-center gap-2">
          <img src={NavImage} className="w-10" />
          <h3 className="rubik text-xl font-bold">E- School</h3>
        </div>
        <div className="flex justify-between items-center">
          <div className="poppins items-center font-medium justify-between flex hidden md:inline-flex  gap-5">
            <p className="flex justify-center">
              <CenterUnderline text="Books" />
            </p>{" "}
            <p className="flex justify-center">
              <CenterUnderline text="Courses" />
            </p>{" "}
            <p className="flex justify-center">
              <CenterUnderline text="Others" />
            </p>{" "}
            <p className="flex justify-center">
              <CenterUnderline text="Blog" />
            </p>{" "}
            <button className="btn btn-success w-25 rounded-full text-white border-none">
              Sign in
            </button>
          </div>
          {/* sidebar */}
          <div className=" md:hidden">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
              {/* Navbar */}
              <div>
                <div className="flex-none">
                  <label
                    htmlFor="my-drawer-2"
                    aria-label="open sidebar"
                    className="btn btn-square btn-ghost"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="inline-block h-6 w-6 stroke-current"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      ></path>
                    </svg>
                  </label>
                </div>
              </div>
            </div>
            <div className="drawer-side">
              <label
                htmlFor="my-drawer-2"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <ul className="menu bg-base-200 min-h-full w-50 p-4">
                {/* Sidebar content here */}
                <li className="space-y-2">
                  <a className="btn rounded-full">Books</a>
                  <a className="btn rounded-full">Courses</a>
                  <a className="btn rounded-full">Others</a>
                  <a className="btn rounded-full">Blog</a>
                  <a className="btn btn-success text-white rounded-full">
                    Sign in
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
