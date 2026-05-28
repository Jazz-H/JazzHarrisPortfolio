const Header = () => {
  return (
    <div className="px-4 sm:px-8 md:px-10 pt-24 sm:pt-32 md:pt-36 pb-10 sm:pb-16 dark:bg-gray-900">
      <h3 className="text-base sm:text-lg md:text-2xl lg:text-3xl 3xl:text-5xl 3xl:ml-20 text-left text-gray-800 font-medium dark:text-gray-300 mb-6 sm:mb-10">
        Hi, my name is
      </h3>
      <div className="text-center">
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl uppercase font-black mb-6 sm:mb-10 text-cyan-400 drop-shadow-xl shadow-black dark:drop-shadow-xl break-words">
          Jazz Harris
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl 2xl:text-2xl text-gray-800 dark:text-gray-200 max-w-2xl mx-auto px-2">
          Software Engineer, Business Analyst, and Project Management Enthusiast, Passionate About Lifelong Learning.
        </p>
      </div>
    </div>
  );
};
export default Header;
