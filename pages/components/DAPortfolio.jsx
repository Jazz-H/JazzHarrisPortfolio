import { BsGithub } from "react-icons/bs";
import { SiTableau } from "react-icons/si";

const DAPortfolio = () => {
  return (
    <section class="bodyv2">
      <div class="containerv2">
        <div class="floatcontainer">
          <div class="card">
            <div class="face face1 ">
              <div class="content  ">
                <img src="./assets/EDAProjectLogo.png" />
              </div>
            </div>
            <div class="face face2">
              <div class="content ">
                <p>
                  Exploratory Data Analysis With Python, Panda and other
                  libraries on Supermarket Sales Data
                </p>
                <p class="text-gray-500 p-10">
                  <small>Python Pandas Numpy Seaborn</small>
                </p>
                <button></button>
                <div class="justify-center ">
                  <div>
                    <a
                      className=" cursor-pointer "
                      href="https://github.com/Jazz-Harris/EDAWithSuperMarketData/blob/main/EDAWithSupermarketSales.ipynb"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <button
                        type="button"
                        class=" px-2  pb-2 pt-2.5 mr-2 hover:animate-pulse bg-cyan-400 float-left text-white font-medium text-xs leading-normal uppercase rounded shadow-md hover:bg-cyan-600 hover:shadow-lg focus:bg-cyan-600 focus:shadow-lg focus:outline-none focus:ring-0 transition duration-150 ease-in-out flex align-center"
                      >
                        <span class="w-3 mr-2 mt-1">
                          <BsGithub />
                        </span>
                        Github
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
       

        <div class="floatcontainer">
          <div class="card">
            <div class="face face1 ">
              <div class="content  ">
                <img src="./assets/Covid19VisLogo.jpg" />
              </div>
            </div>
            <div class="face face2">
              <div class="content ">
                <p>COVID19 Data Visualization Using Python</p>
                <p class="text-gray-500">
                  <small>Python Pandas Numpy Plotly Matplotlib</small>
                </p>
                <button></button>
                <div class="justify-center ">
                  <div>
                    <a
                      className=" cursor-pointer "
                      href="https://github.com/Jazz-Harris/COVID19DataVIS/blob/main/COVID19DataVis.ipynb"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <button
                        type="button"
                        class=" px-2  pb-2 pt-2.5 mr-2 hover:animate-pulse bg-cyan-400 float-left text-white font-medium text-xs leading-normal uppercase rounded shadow-md hover:bg-cyan-600 hover:shadow-lg focus:bg-cyan-600 focus:shadow-lg focus:outline-none focus:ring-0 transition duration-150 ease-in-out flex align-center"
                      >
                        <span class="w-3 mr-2 mt-1">
                          <BsGithub />
                        </span>
                        Github
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
         </div>
        </div>
        <div class="floatcontainer">
          <div class="card">
            <div class="face face1 ">
              <div class="content  ">
                <img src="./assets/CreditCardDefaultsLogo.png" />
              </div>
            </div>
            <div class="face face2">
              <div class="content ">
                <p>Credit Card Defaults in the U.S - Power BI</p>
                <p class="text-gray-500 p-10">
                  <small>
                    Power BI - Data was prepared, cleaned, transformed and then
                    loaded into Power BI
                  </small>
                </p>
                <button></button>
                <div class="justify-center ">
                  <div>
                    <a
                      className=" cursor-pointer "
                      href="https://github.com/Jazz-Harris/CreditCardDefaults-Powerbi"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <button
                        type="button"
                        class=" px-2  pb-2 pt-2.5 mr-2 hover:animate-pulse bg-cyan-400 float-left text-white font-medium text-xs leading-normal uppercase rounded shadow-md hover:bg-cyan-600 hover:shadow-lg focus:bg-cyan-600 focus:shadow-lg focus:outline-none focus:ring-0 transition duration-150 ease-in-out flex align-center"
                      >
                        <span class="w-3 mr-2 mt-1">
                          <BsGithub />
                        </span>
                        Github
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
     
        <div class="floatcontainer ">
          <div class="card">
            <div class="face face1 ">
              <div class="content  ">
                <img src="./assets/RTSMDLogo.png" />
              </div>
            </div>
            <div class="face face2">
              <div class="content ">
                <p>Real Time Stock Market Dashboard from an API - Power BI</p>
                <p class="text-gray-500 p-10">
                  <small>
                    Data was loaded using an API from:
                    https://site.financialmodelingprep.com
                  </small>
                </p>
                <button></button>
                <div class="justify-center ">
                  <div>
                    <a
                      className=" cursor-pointer "
                      href="https://github.com/Jazz-Harris/CreditCardDefaults-Powerbi"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <button
                        type="button"
                        class=" px-2  pb-2 pt-2.5 mr-2 hover:animate-pulse bg-cyan-400 float-left text-white font-medium text-xs leading-normal uppercase rounded shadow-md hover:bg-cyan-600 hover:shadow-lg focus:bg-cyan-600 focus:shadow-lg focus:outline-none focus:ring-0 transition duration-150 ease-in-out flex align-center"
                      >
                        <span class="w-3 mr-2 mt-1">
                          <BsGithub />
                        </span>
                        Github
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};
export default DAPortfolio;
