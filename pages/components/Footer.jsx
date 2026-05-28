const Footer = () => {
  return (
    <footer className="bg-white py-4 px-4 sm:px-6 shadow-lg shadow-black flex flex-col gap-3 md:flex-row md:items-center md:justify-between rounded-md dark:bg-gray-800">
      <div className="text-xs sm:text-sm text-gray-500 text-center md:text-left dark:text-gray-400">
        All Rights Reserved.
      </div>

      <div className="text-xs sm:text-sm text-center md:text-right text-gray-500 dark:text-gray-400 space-y-1">
        <div>Designed and built by Jazz Harris.</div>
        <div>This website was created using NextJS, ReactJS, and Tailwind CSS.</div>
        <div>
          The site is hosted using Netlify and the code behind can be viewed on my
          <a
            href="https://github.com/Jazz-H/JazzHarrisPortfolio"
            target="_blank"
            rel="noreferrer"
            className="text-cyan-400 dark:text-cyan-40"
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
