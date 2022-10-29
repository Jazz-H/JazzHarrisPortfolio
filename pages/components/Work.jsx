import { AiOutlineFolder } from "react-icons/ai";
import { IconContext } from "react-icons";
import Card_temp_1 from "./card";
import Card_temp_2 from "./card2";
import { SiXcode } from "react-icons/si";
import { SiCsharp} from "react-icons/si";
import { useState } from "react";

const Work = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <section  id="Work" class=" pt-40  2xl:pb-40 dark:bg-gray-900 ">
      <h1
       
        className=" text-center text-3xl lg:text-7xl    font-semibold dark: text-black dark:text-white"
      >
        <bold>Work I've done</bold>
      </h1>

      <div className=" 3xl:mt-20  flex justify-center ease-linear duration-300 items-left m-10 ">
        <Card_temp_2 toggle={toggle} settoggle={setToggle} />
      </div>
      <div className="flex justify-center ease-linear duration-300 items-center m-10 ">
        <Card_temp_1 toggle={toggle} settoggle={setToggle} />
      </div>
     

      <section>
        <h1
          className=" text-center  2xl:mt-20 text-3xl 3xl:mb-10 3xl:mt-20 lg:text-5xl mb-2 lg:mb-6 mt-40 3xl:text-6xl font-semibold dark: text-black dark:text-white"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <bold>Other Projects</bold>
        </h1>
        <p class="text- text-grey text-center mb-2">
          <a
            href="https://github.com/Jazz-Harris?tab=repositories"
            target="_blank"
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

        <section
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
           
          }}
        >
          <div class="flex flex-col lg:flex-row lg:px-20  ">
          <div class="float-child p-5 m-5  w-[20rem] h-[17.5rem]  sm:w-[26rem] sm:h-[16rem]  md:w-[30rem]  bg-white rounded-lg border border-gray-200 shadow-md dark:bg-slate-700 dark:hover:bg-gray-500 hover:bg-gray-100 dark:border-gray-700">
              <IconContext.Provider value={{ className: "top-react-icons" }}>
                <AiOutlineFolder />
              </IconContext.Provider>
              <a href="#">
                <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  Angry Birds
                </h5>
              </a>
              <p class="font-normal text-gray-500 dark:text-white">
                A remake of the popular game angry birds with the same game mechanics and display as the full game.
              </p>
              <div className="  pt-4 flex flex-row gap-3  ">
                <div className="flex flex-row ">
                  <SiXcode size={20} color="#61DBFB" />
                  <h1 className="pl-1  dark:text-white">Xcode</h1>
                </div>
                <div className="flex flex-row  ">
                  <SiCsharp size={20} color="#007acc" />
                  <h1 className="pl-1 dark:text-white">C#</h1>
                </div>
              </div>
              <a
                href="https://github.com/Jazz-Harris/AngryBirds"
                target="_blank"
                class="inline-flex items-center pt-2 text-cyan-400  dark:text-white hover:underline"
              >
                View on GitHub
                <svg
                  class="ml-2 w-5 h-5"
                  fill="lightgrey"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path>
                  <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path>
                </svg>
              </a>
            </div>




            <div class="float-child p-5  m-5  w-[20rem] h-[17.5rem]  sm:w-[26em] sm:h-[16rem] md:w-[30em]  bg-white rounded-lg border border-gray-200 shadow-md dark:bg-slate-700 dark:hover:bg-gray-500 hover:bg-gray-100 dark:border-gray-700">
              <IconContext.Provider value={{ className: "top-react-icons" }}>
                <AiOutlineFolder />
              </IconContext.Provider>
              <a href="#">
                <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  Roll A Ball
                </h5>
              </a>
              <p class="font-normal text-gray-500 dark:text-white">
                The goal is to roll your ball to the finish line before time runs out and avoid obstacles.
              </p>
              <div className="  pt-4 flex flex-row gap-2  ">
                <div className="flex flex-row ">
                  <SiXcode size={20} color="#61DBFB" />
                  <h1 className="pl-1  dark:text-white">Xcode</h1>
                </div>
                <div className="flex flex-row  ">
                  <SiCsharp size={20} color="#007acc" />
                  <h1 className="pl-1 dark:text-white">C#</h1>
                </div>
              </div>
              <a
                href="https://github.com/Jazz-Harris/Roll-A-Ball"
                target="_blank"
                class="inline-flex items-center pt-2 text-cyan-400  dark:text-white hover:underline"
              >
                View on GitHub
                <svg
                  class="ml-2 w-5 h-5"
                  fill="lightgrey"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path>
                  <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path>
                </svg>
              </a>
            </div>
          </div>
        </section>
      </section>
    </section>
  );
};
export default Work;
