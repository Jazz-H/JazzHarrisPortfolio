import Image from "next/image";
import { FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";

export default function Card_temp2() {
  return (
    <div className="3xl:w-[60rem] md:w-[50rem] md:h-[23rem] sm:h-[22rem] w-[20em] h-[15.5rem]  p-4 rounded-2xl md:m-5 bg-white dark:bg-slate-800 shadow-lg dark:shadow-slate-700 flex flex-col ease-linear duration-300 md:flex-row-reverse">
      <div className=" opacity-0 md:opacity-100 sm:h-full sm:w-full  sm:shadow-md sm:rounded-2xl sm:basis-2/3 sm:relative ">
        <div className="sm:h-full sm:w-full sm:relative border-2 sm:border-white md:border-white sm:rounded-2xl  md:bg-white ">
          <Image
             src="/comingsoon.jpg"
            alt="thumbnail"
            layout="fill"
            objectFit="cover"
            className=" rounded-2xl"
          />
        </div>
      </div>

      <div className=" h-full w-full rounded-2xl md:pr-5 md:mt-10 lg:pr-20 ">
        <h1 className=" text-1xl sm:text-2xl font-bold dark:text-white">
          Check back later!
        </h1>
        <p class=" pt-2 text-sm sm:text-lg md:pt-4 dark:text-white">
        I'm currently in the process of revamping my github and featured projects to best accurately display my skills.
        </p>
        <div className=" pt-2 flex flex-row justify-left flex-wrap md:pt-4 lg:pr-20">
          <div className="flex flex-row items-center m-2 ">
            <FaReact size={20} color="#61DBFB" />
            <h1 className="pl-1  dark:text-white">React Native</h1>
          </div>
          <div className="flex flex-row items-center mr-10">
            <SiTypescript size={20} color="#007acc" />
            <h1 className="pl-1 dark:text-white">TypeScript</h1>
          </div>
          <div
            className="flex flex-row  md:mr-20"
            style={{
              display: "flex",
              alignItems: "right",
              justifyContent: "right",
            }}
          >
            <button className="md:pr-2 hover:-translate-y-0.5 transform transistion hover:animate-pulse m-auto mt-4 bg-[#08e2ff] text-right shadow-md shadow-[#dbdbdb8a]  p-2 rounded-xl flex flex-row justify-center items-center hover:bg-[#1caac4] ease-linear duration-300">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {" "}
                <span class="text-white text-xl   ">
                  <AiFillGithub />
                </span>
                <h2 className="text-white text-1xl font-semibold px-1 ">
                  <bold> View Soon!</bold>
                </h2>
              </div>
            </button>
          </div>
        </div>
        
        </div>
      </div>
  
  );
}
