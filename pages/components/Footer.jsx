const Footer = () => {
  return (
    <footer class=" bg-white  px-4 max-w-full max-h-screen shadow-lg shadow-black flex items-center justify-between rounded-md dark:bg-gray-800 ">
      <div class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
        All Rights Reserved.
      </div>

      <div class="text-sm  text-right display:block  text-gray-500  dark:text-gray-400">
      <div>  Designed and built by Jazz Harris.</div> 
      <div>   This website was created using NextJS, React, JS, and Tailwind.   </div>
      <div> 
      The site is hosted using Netlify and the code behind can be viewed on my
        <a
          href="https://github.com/Jazz-Harris/JazzHarrisPortfolio"
          target="_blank"
          rel="noreferrer"
          className = " text-cyan-400  dark:text-cyan-40 "
        >
          {" "}
          Github{" "}
        </a>
       
      </div>
      </div>
    </footer>
  );
};
export default Footer;
