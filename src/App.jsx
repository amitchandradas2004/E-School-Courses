import { Suspense } from "react";
import "./App.css";
import Banner from "./Components/Banner/Banner";
import Cards from "./Components/Cards/Cards";
import Courses from "./Components/Courses/Courses";
import Navbar from "./Components/Navbar/Navbar";
const fetchCourses = async () => {
  const res = await fetch("Courses.json");
  return res.json();
};

function App() {
  const coursesPromise = fetchCourses();
  return (
    <>
      <Navbar />
      <Banner />
      <Cards />
      <Suspense fallback={'data is loading'}>
        <Courses coursesPromise={coursesPromise}/>
      </Suspense>
    </>
  );
}

export default App;
