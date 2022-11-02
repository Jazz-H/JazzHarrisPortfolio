import { Link } from "react-scroll";
import { useState } from "react";
import React from "react";
import { useTransition, animated } from "react-spring";
import { Twirl as Hamburger } from "hamburger-react";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isOpen, setOpen] = useState(false);

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
      class="fixed top-0  z-50 w-full flex flex-wrap items-center justify-between flex-direction:column  sm:px-20 py-3 navbar-expand-lg bg-black dark:bg-slate-600 "
    >
      <div class="container2  mx-auto flex flex-wrap items-center justify-between">
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
          <div class="Hamburger">
            <Hamburger
              rounded
              direction="right"
              duration={0.4}
              easing="ease-in"
              color="#26C6DA"
              toggled={isOpen}
              toggle={setOpen}
              onToggle={(toggled) => {
                if (toggled) {
                  setShowMenu(!showMenu);
                } else {
                  setShowMenu(false);
                }
              }}
            ></Hamburger>
          </div>
        </div>
        {maskTransitions(
          (styles, item) => item && 
          <animated.div 
          style={styles}
          className="backdrop-blur-sm fixed top-20 left-0 w-full h-full z-50"
          ></animated.div>
        )}

        {menuTransitions(
          (styles, item) =>
            item && (
              <animated.div
                style={styles}
                className="fixed top-16 right-0 flex flex-col  text-lg p-10 w-screen duration-50 ease-in-out  text-1xl   z-50 bg-black dark:bg-slate-600  text-white drop-shadow-sm shadow-gray-50 rounded-r-sm "
              >
            
                 
              
                  <a
                    href="#Work"
                    class="mb-8 text-center text-white   hover:-translate-y-0.5 transform transistion hover:animate-pulse hover:bg-gray-100 hover:bg-transparent hover:text-cyan-400  dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:bg-transparent dark:border-gray-700   uppercase font-bold"
                  >
                    Work
                  </a>
                  <a
                    href="#about"
                    class="mb-8 text-center text-white hover:-translate-y-0.5 transform transistion hover:animate-pulse hover:bg-gray-100 hover:bg-transparent hover:text-cyan-400  dark:hover:text-white dark:text-gray-400  dark:hover:bg-gray-700 dark:hover:bg-transparent dark:border-gray-700    uppercase font-bold"
                  >
                    About
                  </a>
                  <a
                    href="#Contact"
                    class="mb-8 text-white text-center  hover:-translate-y-0.5 transform transistion hover:animate-pulse hover:bg-gray-100 hover:bg-transparent hover:text-cyan-400  dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:bg-transparent dark:border-gray-700   uppercase font-bold"
                  >
                    Contact
                  </a>
                  <a
                    class=" lg:text-white mx-auto bg-slate-600 hover:-translate-y-0.5 transform transistion hover:animate-pulse hover:bg-slate-500 dark:bg-gray-700  hover:text-cyan-400  p-2  dark:hover:text-white dark:text-gray-100 dark:hover:bg-gray-400 text-md font-bold uppercase  rounded shadow hover:shadow-md outline-none focus:outline-none  ease-linear transition-all duration-150"
                    href="http://localhost:3000/Jazz(Maura)HarrisResume-1.pdf"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Resume
                  </a>
                
            
              </animated.div>
            )
        )}
        <div
          class="lg:flex flex-grow items-center lg:bg-opacity-0 lg:shadow-none hidden "
          id="example-collapse-navbar"
        >
          <ul className="flex flex-col lg:flex-row list-none mr-auto"></ul>
          <ul className="flex flex-col lg:flex-row list-none lg:ml-auto items-center">
           
            <li className="inline-block relative">
              <a
                class="text-white hover:text-cyan-400 hover:-translate-y-0.5 transform transistion  px-3 py-4 lg:py-2 flex items-center text-md uppercase font-bold"
                href="#Work"
              >
                Work
              </a>
            </li>
            <li className="inline-block relative">
              <a
                class="text-white hover:text-cyan-400 hover:-translate-y-0.5 transform transistion  px-3 py-4 lg:py-2 flex items-center text-md uppercase font-bold"
                href="#about"
              >
                About
              </a>
            </li>
            <li className="inline-block relative">
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
