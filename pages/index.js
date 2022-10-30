import { useState } from "react";
import NavMenu from "./components/Navbar";
import About from "./components/About";
import Work from "./components/Work";
import ContactHeading from "./components/ContactHeading";
import { BsGithub } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <main className={darkMode ? "dark" : ""}>
     
      <section id="Home" className=" bg-white  dark:bg-gray-900 ">

      
      <NavMenu></NavMenu>
        <Header></Header>
        <About></About>
        <Work></Work>
        <ContactHeading></ContactHeading>
        <Footer></Footer>

      <div className="icon-bar ">
        <a
          className=" cursor-pointer text-3xl  md:p-0 md:dark:hover:text-white dark:text-gray-400  dark:border-gray-700 "
          href="https://github.com/Jazz-Harris"
          target="_blank"
          rel="noreferrer"
        >
          <BsGithub />
        </a>
        <a
          className=" cursor-pointer text-3xl  md:p-0 md:dark:hover:text-white dark:text-gray-400  dark:border-gray-700 "
          href="https://www.linkedin.com/in/maurajharris/"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillLinkedin />
        </a>
        <a
          onClick={() => setDarkMode(!darkMode)}
          className=" cursor-pointer text-3xl  md:p-0 md:dark:hover:text-white dark:text-gray-400   dark:border-gray-700 "
        >
          <BsFillMoonStarsFill />
        </a>
      </div>
     
      </section>
    </main>
    
  );
}
