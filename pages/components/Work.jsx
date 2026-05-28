import DAPortfolio from "./DAPortfolio";
import SDPortfolio from "./SDPortfolio";
import FeaturedProjects from "./FeaturedProjects";
import Websites from "./Websites";

const Work = () => {
  return (
    <section
      id="Work"
      className="pt-16 sm:pt-20 pb-20 2xl:pb-20 dark:bg-gray-900"
    >
      <h1 className="text-center text-3xl sm:text-5xl md:text-6xl lg:text-7xl mb-8 sm:mb-10 px-4 font-semibold text-black dark:text-white">
        <bold>Work I've done</bold>
      </h1>

      <Websites />
      <SDPortfolio />
      <FeaturedProjects />
      <DAPortfolio />
    </section>
  );
};
export default Work;
