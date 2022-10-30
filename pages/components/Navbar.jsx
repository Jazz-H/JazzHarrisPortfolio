import { Link } from "react-scroll";
import { useState } from "react";
import React from "react";
import { useTransition, animated } from "react-spring";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);


  const maskTransitions = useTransition(showMenu, {
    from: { position: "absoulte", opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  const menuTransitions = useTransition(showMenu, {
    from: { opacity: 0, transform: "translateX(50%)" },
    enter: { opacity: 1, transform: "translateX(0%)" },
    leave: { opacity: 0, transform: "translateX(50%)" },
  });


  
  return (
    <nav
      id="nav"
   
      class="fixed top-0  z-50 w-full flex flex-wrap items-center justify-between  sm:px-20 py-3 navbar-expand-lg bg-black dark:bg-slate-600 "
    >
      <div class="container  mx-auto flex flex-wrap items-center justify-between">
        <div class="w-full relative flex justify-between  lg:w-auto lg:static lg:block lg:justify-start ">
          <Link
            to="Home"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            class="text-sm font-bold leading-relaxed inline-block py-1 "
          >
            <img src="JHNavLogo.png" alt="logo" class=" w-10 h-10 mt-1" />
          </Link>

          <button
            class="cursor-pointer text-xl leading-none py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"
            onclick="toggleNavbar('example-collapse-navbar')"
          >
            <img
              src="https://img.icons8.com/cotton/64/000000/menu.png"
              class=" w-10 h-10 text-white"
              onClick={() => setShowMenu(!showMenu)}
            />
          </button>
       
        </div>
        {maskTransitions(
          (styles, item) =>
            item && (
              <animated.div
                style={styles}
                className=" backdrop-blur-sm fixed top-0 left-0 w-full h-screen z-50 "
                onClick={() => setShowMenu(false)}
              ></animated.div>
            )
        )}

        {menuTransitions(
          (styles, item) =>
            item && (
              <animated.div
                style={styles}
                className="fixed top-0 right-0 w-[200px]  duration-50 ease-in-out  text-1xl pt-10 h-screen z-50 bg-gray-700 dark:bg-gray-300 inline-block  pl-2 text-left gap-5 text-white shadow-md shadow-gray-50 rounded-r-sm "
              >
                <div>
                  <Link
                    to="Home"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                    class="text-sm font-bold leading-relaxed inline-block  "
                  >
                    <img
                      src="JHNavLogo.png"
                      alt="logo"
                      class=" mb-8 h-14  pl-2 "
                    />
                  </Link>

                  <a
                    href="#about"
                    class="  text-white px-2 p-2 hover:-translate-y-0.5 transform transistion hover:animate-pulse hover:bg-gray-100 hover:bg-transparent hover:text-cyan-400  dark:hover:text-white dark:text-gray-400  dark:hover:bg-gray-700 dark:hover:bg-transparent dark:border-gray-700 py-4 lg:py-2 flex items-center text-md uppercase font-bold"
                  >
                    About
                  </a>
                  <a
                    href="#Work"
                    class="text-white  px-2 p-2 hover:-translate-y-0.5 transform transistion hover:animate-pulse hover:bg-gray-100 hover:bg-transparent hover:text-cyan-400  dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:bg-transparent dark:border-gray-700  py-4 lg:py-2 flex items-center text-md uppercase font-bold"
                  >
                    Work
                  </a>
                  <a
                    href="#Contact"
                    class="text-white  hover:bg-gray-100 px-2 p-2 hover:-translate-y-0.5 transform transistion hover:animate-pulse hover:bg-transparent hover:text-cyan-400 mb-5 dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:bg-transparent dark:border-gray-700  py-4 lg:py-2 flex items-center text-md uppercase font-bold"
                  >
                    Contact
                  </a>
                  <a
                    class="lg:text-white bg-slate-600 hover:-translate-y-0.5 transform transistion hover:animate-pulse hover:bg-slate-500 dark:bg-gray-700  hover:text-cyan-400 px-4 p-2  dark:hover:text-white dark:text-gray-100 dark:hover:bg-gray-400 text-md font-bold uppercase  rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 mb-3 ease-linear transition-all duration-150"
                    href="http://localhost:3000/Jazz(Maura)HarrisResume-1.pdf"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Resume
                  </a>
                </div>
                <div className="icon-bar2 mt-4 z-55">
                  <a
                    className=" text-gray-700 rounded hover:-translate-y-0.5 transform transistion hover:animate-pulse hover:bg-gray-100 hover:bg-transparent hover:text-cyan-400 p-0 dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:bg-transparent dark:border-gray-700 "
                    href="https://github.com/Jazz-Harris"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiFillGithub />
                  </a>
                  <a
                    className=" text-gray-700 rounded hover:-translate-y-0.5 transform transistion hover:animate-pulse hover:bg-gray-100 hover:bg-transparent hover:text-cyan-400 p-0 dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:bg-transparent dark:border-gray-700 "
                    href="https://www.linkedin.com/in/maurajharris/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiFillLinkedin />
                  </a>
                </div>
              </animated.div>
            )
        )}
        <div
          class="lg:flex flex-grow items-center lg:bg-opacity-0 lg:shadow-none hidden "
          id="example-collapse-navbar"
        >
          <ul className="flex flex-col lg:flex-row list-none mr-auto"></ul>
          <ul  className="flex flex-col lg:flex-row list-none lg:ml-auto items-center">
            <li  className="inline-block relative">
              <a
               
                class="text-white hover:text-cyan-400 hover:-translate-y-0.5 transform transistion  px-3 py-4 lg:py-2 flex items-center text-md uppercase font-bold"
                href="#about"
                
               
              >
                About
              </a>
            </li>
            <li  className="inline-block relative">
              <a
               class="text-white hover:text-cyan-400 hover:-translate-y-0.5 transform transistion  px-3 py-4 lg:py-2 flex items-center text-md uppercase font-bold"
                href="#Work"
              >
                Work
              </a>
            </li>
            <li  className="inline-block relative">
              <a
                class="text-white hover:text-cyan-400 hover:-translate-y-0.5 transform transistion  px-3 py-4 lg:py-2 flex items-center text-md uppercase font-bold"
                href="#Contact"
              >
                Contact
              </a>
            </li>

            <li className="flex items-center">
              <a
                className="lg:text-white bg-slate-600 dark:bg-gray-700  hover:text-cyan-400 p-0 dark:hover:text-white dark:text-gray-200 dark:hover:bg-gray-400 text-md font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                href="http://localhost:3000/Jazz(Maura)HarrisResume-1.pdf"
                target="_blank"
                rel="noreferrer"
              >
                Resume
              </a>
            </li>
          </ul>
       
         
        </div>
      </div>
    </nav>
 );
};
export default Navbar;