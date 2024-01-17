import DAPortfolio from "./DAPortfolio";
import { useState } from "react";
import SDPortfolio from "./SDPortfolio";
import FeaturedProjects from "./FeaturedProjects";
import Websites from"./Websites";

const Work = () => {


  return (
    <section id="Work" class=" pt-20  pb-40 2xl:pb-20 dark:bg-gray-900 ">
      <h1 className=" text-center text-5xl md:text-7xl   mb-2 font-semibold dark: text-black dark:text-white">
        <bold>Work I've done</bold>{" "}
      </h1>
      
   
      
      
      <Websites></Websites>
        <SDPortfolio></SDPortfolio>
        <FeaturedProjects />
        <DAPortfolio></DAPortfolio>
      </section>
    
  );
};
export default Work;
