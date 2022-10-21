import Image from "next/image";

import { FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";

export default function Card_temp_1({ toggle, settoggle }) {
  return (
    <div className="md:w-[60rem] md:h-[18rem] w-[20.5rem] h-[40rem] p-4 rounded-2xl bg-white dark:bg-slate-800 shadow-lg dark:shadow-slate-700 flex flex-col ease-linear duration-300 md:flex-row-reverse">
      <div className=" h-full w-full  shadow-md rounded-2xl basis-2/3 relative  bg-white">
        <div className="h-full w-full relative border-2 border-white rounded-2xl">
          <Image
            src="/web3.png"
            alt="thumbnail"
            layout="fill"
            objectFit="cover"
            className=" rounded-2xl"
          />
        </div>
      </div>

      <div className=" h-full w-full mr-2 rounded-2xl ">
        <h1 className="m-2 text-4xl font-bold dark:text-white">
          React Native with TypeScript tutorial.
        </h1>
        <p class="pl-2 pb-2 pt-4 dark:text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
        </p>

        <div
          className="flex flex-row dhover:animate-pulse mt-5 "
          style={{
            display: "flex",
            alignItems: "left",
            justifyContent: "left",
          }}
        >
          <button className="md:m-2 m-auto  bg-[#08e2ff] text-right shadow-md shadow-[#dbdbdb8a]  pt-2 pb-2 pl-6 pr-4 rounded-xl flex flex-row justify-center items-center hover:bg-[#1caac4] ease-linear duration-300">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {" "}
              <span class="text-white text-4xl   ">
                <AiFillGithub />
              </span>
              <h2 className="text-white text-lg font-semibold px-4">
                <bold> View Project</bold>
              </h2>
            </div>
          </button>
          <div className=" pt-5 pr-2 pl-2 flex flex-row justify-around flex-wrap">
          <div className="flex flex-row items-center m-2">
            <FaReact size={20} color="#61DBFB" />
            <h1 className="pl-1 dark:text-white">React Native</h1>
          </div>
          <div className="flex flex-row items-center m-2">
            <SiTypescript size={20} color="#007acc" />
            <h1 className="pl-1 dark:text-white">TypeScript</h1>
          </div>
        </div>
        </div>

        
        
      </div>

      
    </div>
  );
}
