import React from "react";
import { BsGithub } from "react-icons/bs";

const FeaturedProjects = () => {
  return (
    <section class="bodyv2">
        
    <div class="containerv2">

    
 
      <div class="floatcontainer">
      

      <div class="floatcontainer">
        <div class="card">
          <div class="face face1 ">
            <div class="content  ">
            <img src="./assets/Dataprofessionallogo.png" />

            </div>
          </div>
          <div class="face face2">
            <div class="content ">
            <p>Data Professional Survey dashboard in Power BI</p>

              <p class="text-gray-500">
                <small>     Power BI - Data was prepared, cleaned, transformed and then
                    loaded into Power BI
</small>
              </p>  
              <button></button>
              <div class="justify-center ">
                <div>
                  <a
                    className=" cursor-pointer "
                    href="https://github.com/Jazz-Harris/DataProfessionalSurveyPowerbi"

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
              <img src="./assets/KPIDashboardLogo.png" />
            </div>
          </div>
          <div class="face face2">
            <div class="content ">
              <p>Interactive KPI Management Dashboard in Tableau</p>
              <p class="text-gray-500 p-10">
                <small>
                Tableau
                </small>
              </p>
              <button></button>
              <div class="justify-center ">
                <div>
                  <a
                    className=" cursor-pointer "
                    href="https://github.com/Jazz-Harris/KPI-Dashboard-Management"

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
                <div>
                    <a
                      className=" cursor-pointer "
                      href="https://public.tableau.com/views/SalesandProfitManagementDashboard_16673599690350/Dashboard1?:language=en-US&:display_count=n&:origin=viz_share_link"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <button
                        type="button"
                        class=" px-2  pb-2 pt-2.5 hover:animate-pulse bg-cyan-400 text-white font-medium text-xs leading-normal uppercase rounded shadow-md hover:bg-cyan-600 hover:shadow-lg focus:bg-cyan-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex align-center"
                      >
                        <span class="w-3 mr-2 mt-1">
                          <img src="https://img.icons8.com/ios-filled/50/000000/tableau-software.png" />
                        </span>
                        LIVE Version
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
            <img src="./assets/webscraplogo.png" />

            </div>
          </div>
          <div class="face face2">
            <div class="content ">
            <p>Webscraping RealEstate data with Python and BeautifulSoup</p>

              <p class="text-gray-500 p-10">
                <small>
                Utizling Python and BeautifulSoup I was able to extract listing data and export the data into a csv.
                </small>
              </p>
              <button></button>
              <div class="justify-center ">
                <div>
                  <a
                    className=" cursor-pointer "
                    href="https://github.com/Jazz-Harris/WebScrapingRealEstateData"

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

export default FeaturedProjects;
