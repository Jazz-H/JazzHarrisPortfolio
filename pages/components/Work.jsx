
import DAPortfolio from "./DAPortfolio";
import { useState } from "react";
import SDPortfolio from "./SDPortfolio";

const Work = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <section  id="Work" class=" pt-20  pb-40 2xl:pb-20 dark:bg-gray-900 ">
      <h1
       
        className=" text-center sm:text-5xl md:text-7xl   mb-2 font-semibold dark: text-black dark:text-white"
      >
        <bold>Work I've done</bold> </h1>

      
        <p class="text- text-grey text-center md:text-2xl mb-2">
          <a
            href="https://github.com/Jazz-Harris?tab=repositories"
            target="_blank"
            rel="noreferrer"
            class="inline-flex items-center  lg:mb-6 lg:text-2xl pt-5 3xl:mb-10 3xl:text-2xl 3xl:mt-5 text-cyan-400  dark:text-cyan-400 hover:underline"
          >
            View on GitHub
            <svg
              class="ml-2 w-5 h-5"
              fill="lightgrey "
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path>
              <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path>
            </svg>
          </a>
        </p>

        <section>

   <DAPortfolio></DAPortfolio>
  <SDPortfolio></SDPortfolio>
</section>
</section>
  );
};
export default Work;
