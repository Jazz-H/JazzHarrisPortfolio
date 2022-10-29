import Head from "next/head";
import { useState } from "react";
import NavMenu from "./components/Navbar";
import About from "./components/About";
import Work from "./components/Work";
import ContactHeading from "./components/ContactHeading";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import {BsFillMoonStarsFill} from "react-icons/bs"
export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  <script src="../path/to/flowbite/dist/flowbite.js"></script>;

  return (
    <main className={darkMode ? "dark" : ""}>
      <Head>
        <meta name="description" content="Created by Jazz Harris" />
        
      </Head>

      <header
        id="Home"
        className=" bg-white  dark:bg-gray-900 "
      >
        <NavMenu></NavMenu>
        
        <div className="icon-bar z-55">
          <a
            className=" text-gray-700 rounded hover:bg-gray-100 hover:bg-transparent hover:text-cyan-400 p-0 dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:bg-transparent dark:border-gray-700 "
            href="https://github.com/Jazz-Harris"
            target="_blank"
          >
            <AiFillGithub />
          </a>
          <a
            className=" text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-cyan-400 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 "
            href="https://www.linkedin.com/in/maurajharris/"
            target="_blank"
          >
            <AiFillLinkedin />
          </a>
          <a
            onClick={() => setDarkMode(!darkMode)}
            className=" cursor-pointer text-3xl  text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-cyan-400 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 "
          >
            <BsFillMoonStarsFill />
          </a>
        </div>
 


        <div class="pb-60 p-10">
          <h3 className="text-1xl mt-20 pb-10 lowercase text-left sm:px-5 sm:pt-10 md:text-2xl lg:text-3xl 3xl:ml-20 3xl:text-5xl 3xl:mt-10 text-gray-800 font-medium dark:text-gray-300 2xl:mb-20">
            Hi, My name is
          </h3>
          <div className=" pt-5  md:mt-10 text-center md:text-center  md:pl-0 g:text-center">
            <h1 className="text-3xl   uppercase font-black mb-8 sm:text-5xl  md:text-8xl  xl:text-9xl text-cyan-400 2xl:mb-16  drop-shadow-xl shadow-black dark:drop-shadow-xl ">
              Jazz Harris
            </h1>

            <h3 className=" text-1xl md:m-10 uppercase sm:text-1xl md:text-3xl dark:text-white 2xl:text-4xl 2xl:mb-12">
              <bold>Software Developer and Philomath</bold>
            </h3>
            <p className="  text-xs text-gray-800 md:text-base dark:text-gray-200 2xl:text-2xl">
              I'm a software engineer with a passion for learning and solving
              problems
            </p>
          </div>
        </div>
      </header>

        <About></About>
        <Work></Work>
        <ContactHeading></ContactHeading>
      

      <footer class=" bg-white  p-2 shadow-lg shadow-black flex items-center justify-between md:p-2 dark:bg-gray-800 ">
        <div class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          All Rights Reserved.
        </div>
        <div class="text-sm  text-gray-500 sm:text-center dark:text-gray-400">
          Designed and built by Jazz Harris.
        </div>
      </footer>
    </main>
    
  );
}
