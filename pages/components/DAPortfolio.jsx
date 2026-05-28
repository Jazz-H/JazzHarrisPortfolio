import { BsGithub } from "react-icons/bs";
import { SiTableau } from "react-icons/si";

const DAPortfolio = () => {
  return (
 
      <div className="containerv2">

        
        <div className="floatcontainer">
          <div className="card">
            <div className="face face1 ">
              <div className="content  ">
                <img src="./assets/EDAProjectLogo.png" />
              </div>
            </div>
            <div className="face face2">
              <div className="content ">
                <p>
                  Exploratory Data Analysis With Python, Panda and other
                  libraries on Supermarket Sales Data
                </p>
                <p className="text-gray-500 p-10">
                  <small>Python Pandas Numpy Seaborn</small>
                </p>
                <button></button>
                <div className="justify-center ">
                  <div>
                    <a
                      className=" cursor-pointer "
                      href="https://github.com/Jazz-Harris/EDAWithSuperMarketData/blob/main/EDAWithSupermarketSales.ipynb"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <button
                        type="button"
                        className=" px-2  pb-2 pt-2.5 mr-2 hover:animate-pulse bg-cyan-400 float-left text-white font-medium text-xs leading-normal uppercase rounded shadow-md hover:bg-cyan-600 hover:shadow-lg focus:bg-cyan-600 focus:shadow-lg focus:outline-none focus:ring-0 transition duration-150 ease-in-out flex align-center"
                      >
                        <span className="w-3 mr-2 mt-1">
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
        <div className="floatcontainer">
          <div className="card">
            <div className="face face1 ">
              <div className="content  ">
                <img src="./assets/CreditCardDefaultsLogo.png" />
              </div>
            </div>
            <div className="face face2">
              <div className="content ">
                <p>Credit Card Defaults in the U.S - Power BI</p>
                <p className="text-gray-500 p-10">
                  <small>
                    Power BI - Data was prepared, cleaned, transformed and then
                    loaded into Power BI
                  </small>
                </p>
                <button></button>
                <div className="justify-center ">
                  <div>
                    <a
                      className=" cursor-pointer "
                      href="https://github.com/Jazz-Harris/CreditCardDefaults-Powerbi"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <button
                        type="button"
                        className=" px-2  pb-2 pt-2.5 mr-2 hover:animate-pulse bg-cyan-400 float-left text-white font-medium text-xs leading-normal uppercase rounded shadow-md hover:bg-cyan-600 hover:shadow-lg focus:bg-cyan-600 focus:shadow-lg focus:outline-none focus:ring-0 transition duration-150 ease-in-out flex align-center"
                      >
                        <span className="w-3 mr-2 mt-1">
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
     
        <div className="floatcontainer ">
          <div className="card">
            <div className="face face1 ">
              <div className="content  ">
                <img src="./assets/RTSMDLogo.png" />
              </div>
            </div>
            <div className="face face2">
              <div className="content ">
                <p>Real Time Stock Market Dashboard from a REST API - Power BI</p>
                <p className="text-gray-500 p-10">
                  <small>
                    Data was loaded using an API from:
                    https://site.financialmodelingprep.com
                  </small>
                </p>
                <button></button>
                <div className="justify-center ">
                  <div>
                    <a
                      className=" cursor-pointer "
                      href="https://github.com/Jazz-Harris/CreditCardDefaults-Powerbi"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <button
                        type="button"
                        className=" px-2  pb-2 pt-2.5 mr-2 hover:animate-pulse bg-cyan-400 float-left text-white font-medium text-xs leading-normal uppercase rounded shadow-md hover:bg-cyan-600 hover:shadow-lg focus:bg-cyan-600 focus:shadow-lg focus:outline-none focus:ring-0 transition duration-150 ease-in-out flex align-center"
                      >
                        <span className="w-3 mr-2 mt-1">
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
  
  );
};
export default DAPortfolio;
