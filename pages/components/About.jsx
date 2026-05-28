const About = () => {
  return (
    <section id="about">
      <div className="pt-5 mb-20 md:mb-40 md:mt-20 w-full flex flex-col px-4 sm:px-6 md:px-10 lg:px-20 xl:px-40 2xl:px-60 ease-linear duration-200 dark:bg-gray-900">
        <div className="m-2 sm:m-6 md:m-10 p-4 sm:p-6 md:p-8 rounded-2xl shadow-lg dark:shadow-slate-700">
          <div className="flex flex-col md:flex-row md:items-start gap-6">
            <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-44 md:h-44 lg:w-56 lg:h-56 shrink-0 mx-auto md:mx-0 md:order-2">
              <img
                src="./assets/JHPhoto.png"
                alt="Jazz Harris portrait"
                className="w-full h-full object-cover shadow-2xl rounded-full"
              />
            </div>

            <div className="flex-1 md:order-1">
              <h3 className="text-2xl md:text-4xl lg:text-5xl uppercase mb-4 text-black dark:text-white text-center md:text-left">
                <bold>About Me</bold>
              </h3>

              <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-7 lg:leading-9 text-black dark:text-white">
                <span>
                  My passion for continuously learning and seeing new ideas come to life sparked my interest in coding. Since then, I've had the pleasure and privilege of working at a digital marketing agency in Ireland, several local businesses, and a multinational enterprise.
                </span>

                <span className="mt-2">
                  Currently, as a Business Relationship Analyst at Central Piedmont Community College, I act as a liaison between stakeholders, vendors, and technical teams, overseeing software and hardware acquisitions and implementations to ensure alignment with business needs and strategic goals.
                </span>

                <span className="mt-2">
                  I am passionate about leveraging my technical background and communication skills to drive impactful solutions. Let's connect!
                </span>
              </p>

              <div className="flex flex-col mt-6">
                <h1 className="text-sm sm:text-base md:text-xl lg:text-2xl font-semibold text-cyan-400 dark:text-cyan-400">
                  <bold>Recent technologies I've worked with</bold>
                </h1>
                <div className="mt-4 flex flex-wrap items-center gap-3 sm:gap-4 lg:gap-6">
                  <img
                    title="JavaScript"
                    alt="JavaScript"
                    className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12"
                    src="https://img.icons8.com/color/48/000000/javascript--v1.png"
                  />
                  <img
                    title="React"
                    alt="React"
                    className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12"
                    src="https://img.icons8.com/color/48/000000/react-native.png"
                  />
                  <img
                    title="Python"
                    alt="Python"
                    className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12"
                    src="https://img.icons8.com/color/48/000000/python--v1.png"
                  />
                  <img
                    title="SQL"
                    alt="SQL"
                    className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12"
                    src="https://img.icons8.com/color/48/000000/sql.png"
                  />
                  <img
                    title="REST API"
                    alt="REST API"
                    className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12"
                    src="https://img.icons8.com/color/48/000000/api-settings.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
