import { Suspense } from "react";
import "./App.css";
import Banner from "./Components/Banner/Banner";
import Cards from "./Components/Cards/Cards";
import Courses from "./Components/Courses/Courses";
import Navbar from "./Components/Navbar/Navbar";
import Testimonial from "./Components/Testimonial/Testimonial";
import Footer from "./Components/Footer/Footer";
const fetchCourses = async () => {
  const res = await fetch("Courses.json");
  return res.json();
};
function Loader() {
  return (
    <div className="flex items-center justify-center  min-h-screen">
      <div>
        {" "}
        <span className="loading  loading-bars loading-xl"></span>
      </div>
    </div>
  );
}
function App() {
  const coursesPromise = fetchCourses();
  return (
    <>
      <Navbar />
      <Banner />
      <Cards />
      <Suspense fallback={<Loader></Loader>}>
        <Courses coursesPromise={coursesPromise} />
      </Suspense>
      <Testimonial></Testimonial>
      <Footer></Footer>
    </>
  );
}

export default App;
