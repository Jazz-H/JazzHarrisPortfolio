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
                My passion for learning and bringing ideas to life sparked my interest in coding. I’ve worked at a digital marketing agency in Ireland, several local businesses, and a multinational enterprise. As a Senior Software Analyst at Canidium, I developed, maintained, and upgraded code for various clients, ensuring high-quality solutions across platforms.
              Currently, as a Business Relationship Analyst at Central Piedmont Community College, I act as a liaison between stakeholders, vendors, and technical teams, overseeing software and hardware acquisitions to align with business needs and strategic goals.

Skills & Expertise:

    Software Engineering & Full-Stack Development: 3 years with Java, Python, JavaScript, C, C#, NodeJS, React, Angular, HTML, CSS

    Database & Data Processing: Proficient in SQL, Salesforce, SAP Agent Performance Management, Microsoft Azure

    SDLC & Methodologies: Agile, Scrum, TDD, Object-Oriented Design

    Tools & Collaboration: Git, GitHub, Visual Studio, JIRA, Slack, Microsoft Excel, InVision, Sketch, Adobe Suite, WordPress

Certifications:

    Microsoft 365 Certified: Fundamentals

    Business Relationship Management Professional (BRMP®)

    TestOut PC Pro

    ITIL® Foundation Certificate in IT Service Management

I’m passionate about using my technical expertise and communication skills to drive impactful solutions. Let’s connect!
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
