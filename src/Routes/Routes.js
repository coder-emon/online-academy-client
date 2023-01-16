import { createBrowserRouter } from "react-router-dom";
import CourseCard from "../Components/CourseCard/CourseCard";
import Courses from "../Components/Courses/Courses";
import Home from "../Components/Home/Home";
import Main from "../Main/Main";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/courses",
        element: <Courses></Courses>,
      },
      {
        path: "/category:id",
        element: <Courses></Courses>,
      },
      {
        path: "/course:id",

        element: <CourseCard></CourseCard>,
      },
    ],
  },
]);
