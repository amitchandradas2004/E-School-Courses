import React, { use } from "react";
import Course from "./Course";
import CenterUnderline from "../CenterUnderline";

const Courses = ({ coursesPromise }) => {
  const courses = use(coursesPromise);
  
  // console.log(courses);
  return (
    <div className="container mx-auto py-10 px-2 md:px-0">
      <h3 className="flex justify-center rubik font-bold text-4xl text-center">
        <CenterUnderline text="Online Courses" />
      </h3>{" "}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-10">
        {courses.map((course) => (
          <Course 
          
          key={course.id} course={course}></Course>
        ))}
      </div>
    </div>
  );
};

export default Courses;
