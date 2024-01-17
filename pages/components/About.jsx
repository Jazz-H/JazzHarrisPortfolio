const About = () => {
  return (
    <section id="about" >
      <div class="  md:mt-40 pt-5  mb-30 w-50 flex flex-col md:p-20 xl:px-60 ease-linear duration-200 dark:bg-gray-900 2xl:px-80  ">
        <div>
          <div className=" m-10 p-2 rounded-2xl  shadow-lg  dark:shadow-slate-700   ">
            <div>
              <div className="md:w-2/12 xs:w-4/12  float-right m-5 lg:p-5">
                <img
                  src="./assets/JHPhoto.png"
                  alt="..."
                  className=" shadow-2xl  rounded-full "
                />
              </div>
            </div>

            <div class="m-5">
              <h3 className=" pt-5  text-left md:text-left text-1xl md:text-4xl lg:text-5xl uppercase  mb-4 text-black dark:text-white">
                <bold>About Me</bold>
              </h3>

              <p className=" text-xs md:text-lg lg:text-2xl leading-8 lg:leading-10 text-black dark:text-white">
                <span>
                  My passion to continuously learn new things and watch them
                  come to life initiated my interest in coding. Since then I
                  have the pleasure and privilege of working at a digital
                  marketing agency in Ireland, a local business and a
                  multinational enterprise.
                </span>

                <span class="mt-2">
                  Currently, I develop, maintain and upgrade code for a diverse
                  array of clients using various languages, products and digital
                  experiences at Canidium as a Senior Software Analyst.
                </span>
              </p>

              <div className="flex flex-col mt-4">
                <h1 className=" text-xs md:text-2xl   font-semibold dark: text-cyan-400 dark:text-cyan-400">
                  <bold>Recent technologies I've worked with</bold>

                  <div
                    className=" mt-4 gap-2 sm:h-6 sm:w-10 xs:gap-5  xs:h-5 xs:w-5 xl:h-10 xl:10 xl:gap-8 xl:mt-6  "
                    style={{
                      display: "flex",
                      alignItems: "left",
                      justifyContent: "left",
                    }}
                  >
                    <img
                      title="JavaScript"
                      src="https://img.icons8.com/color/48/000000/javascript--v1.png"
                    />
                    <img
                      title="React"
                      src="https://img.icons8.com/color/48/000000/react-native.png"
                    />
                    <img
                      title="Python"
                      src="https://img.icons8.com/color/48/000000/python--v1.png"
                    />
                    <img
                      title="SQL"
                      src="https://img.icons8.com/color/48/000000/sql.png"
                    />
                    
                    <img
                      title="REST API"
                      img
                      src="https://img.icons8.com/color/48/000000/api-settings.png"
                    />
                  </div>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
