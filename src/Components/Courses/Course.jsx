import React from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { GiTeacher } from "react-icons/gi";
import { toast, ToastContainer } from "react-toastify";
const Course = ({ course }) => {
  const handleCourse = () => {
    toast.success(`You're now enrolled in "${courseName}"`);
  };
  const {
    courseName,
    availableSeats,
    classStarts,
    buyNow,
    designation,
    price,
    instructor,
    duration,
    image,
  } = course;

  return (
    <div className="shadow-sm p-5 rounded-3xl space-y-3 transition hover:-translate-y-0.5">
      <img src={image} alt={courseName} className="rounded-3xl w-full h-60" />
      <h3 className="rubik text-2xl font-bold">{courseName}</h3>
      <h4 className="poppins font-medium">{designation}</h4>
      <h2 className="text-2xl font-bold">Price: ${price}</h2>
      <div>
        <button
          onClick={() => handleCourse()}
          className="btn bg-[#21B573] rounded-full text-white w-30"
        >
          {buyNow ? "Buy Course" : ""}
        </button>
        <ToastContainer></ToastContainer>
      </div>
      <div className="flex justify-between items-center font-semibold py-2 gap-2">
        <h3>Duration: {duration}</h3>
        <h3 className="flex items-center gap-1">
          <GiTeacher /> {instructor}
        </h3>
      </div>
      <div className="flex justify-between gap-5 items-center py-2">
        <h2 className="flex items-center gap-1 font-bold">
          <FaCalendarAlt />
          {classStarts}
        </h2>
        <h3 className="flex items-center gap-1 font-bold">
          <FaPeopleGroup />
          {availableSeats}
        </h3>
      </div>
    </div>
  );
};

export default Course;
