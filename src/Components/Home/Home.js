import React from "react";
import { useLoaderData } from "react-router-dom";
import CourseCard from "../CourseCard/CourseCard";
import Hero from "../Hero/Hero";
const Home = () => {
  const courses = useLoaderData();

  return (
    <div>
      <Hero></Hero>
    </div>
  );
};

export default Home;
