import DAPortfolio from "./DAPortfolio";
import { useState } from "react";
import SDPortfolio from "./SDPortfolio";
import FeaturedProjects from "./FeaturedProjects";

const Work = () => {


  return (
    <section id="Work" class=" pt-20  pb-40 2xl:pb-20 dark:bg-gray-900 ">
      <h1 className=" text-center text-5xl md:text-7xl   mb-2 font-semibold dark: text-black dark:text-white">
        <bold>Work I've done</bold>{" "}
      </h1>
      
   
      
      <section>
      < p className=" text-center text-2xl md:text-3xl m-5  mt-20 mr-5 font-semibold dark: text-black dark:text-white">
          <bold>Featured Projects</bold>{" "}
        </p>
        <FeaturedProjects />
        < p className=" text-center text-2xl md:text-3xl m-5  mt-20 mr-5 font-semibold dark: text-black dark:text-white">
          <bold>Other projects</bold>{" "}
        </p>
        <SDPortfolio></SDPortfolio>
        <DAPortfolio></DAPortfolio>
      </section>
    </section>
  );
};
export default Work;
