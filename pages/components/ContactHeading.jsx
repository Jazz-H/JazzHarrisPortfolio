
import ContactForm from "./ContactForm";

const ContactHeading = () => {
  return (
    <section >
      <div class="flex min-w-screen items-center text-center pt-20 lg:pt-40 lg:pr-5  dark:bg-gray-900 ">
        <div  id = "Contact" class="mx-auto w-full max-w-max ">
          <h3 class="my-3 text-4xl sm:text-5xl md:text-5xl mb-8 xl:text-8xl xl:mb-4 font-semibold text-black dark:text-white">
            Wanna connect?
          </h3>
          <p class="text-md mt-2 md:text-2xl lg:px-5 text-gray-400 xl:text-2xl xl:mt-10 dark:text-gray-200">
            Email me at <span class="text-cyan-400">mharris42@elon.edu</span> or
            use the form below to send me a message.
          </p>
          <p class=" text-xs p-5 md:text-lg md:px-5 text-gray-400 xl:text-1xl dark:text-gray-200">
            I'm always lookng for new opportunities and the prospect to create
            something great!
          </p>
          
          <section class = " mx-12 pb-4 px-5 mb-20 3xl:p-10 text-sm shadow-md rounded-lg dark:shadow-grey lg:mt-10 lg:mx-20   lg:p-5 xl:mx-20  text-black dark:text-black dark:bg-white dark:shadow-white flex items-center justify-center">
   
          <ContactForm
     
          ></ContactForm>
     
      </section>
        </div>
      </div>
    
    </section>
  );
};
export default ContactHeading;
