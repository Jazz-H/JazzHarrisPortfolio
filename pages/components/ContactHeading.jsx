import ContactForm from "./ContactForm";

const ContactHeading = () => {
  return (
    <section>
      <div id="Contact"></div>
      <div className="flex pt-16 pb-16 sm:pt-20 sm:pb-20 dark:bg-gray-900 px-4 sm:px-6">
        <div className="mx-auto w-full max-w-5xl">
          <section className="mx-2 sm:mx-6 lg:mx-20 mb-10 sm:mb-20 px-4 sm:px-6 py-6 sm:py-8 lg:p-10 shadow-md rounded-lg dark:shadow-grey text-black dark:text-black dark:bg-white dark:shadow-white flex flex-col items-center justify-center text-center">
            <h3 className="text-3xl sm:text-4xl md:text-5xl xl:text-7xl mb-6 font-semibold text-black dark:text-black">
              Wanna connect?
            </h3>
            <p className="text-base sm:text-lg md:text-2xl text-gray-400 dark:text-black">
              Email me at{" "}
              <span className="text-cyan-400 break-all">
                mauraharris948@gmail.com
              </span>{" "}
              or message me on Linkedin.
            </p>
            <p className="text-xs sm:text-base md:text-lg text-gray-400 dark:text-black pt-6">
              I'm always looking for new opportunities and the prospect to create something great!
            </p>
          </section>
        </div>
      </div>
    </section>
  );
};
export default ContactHeading;
