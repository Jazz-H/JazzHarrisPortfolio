export const CATEGORIES = [
  { id: "all", label: "All" },
  { id: "web", label: "Websites" },
  { id: "app", label: "Apps" },
  { id: "data", label: "Data" },
];

export const projects = [
  {
    id: "alamance",
    title: "Alamance Community Foundation",
    description:
      "Community foundation site built and maintained with the team.",
    category: "web",
    tech: ["Squarespace", "HTML", "CSS", "JavaScript"],
    image: "/assets/AlamanceCover.jpg",
    links: { live: "https://www.alamancecommunityfoundation.org" },
  },
  {
    id: "electric",
    title: "Electric Supplies Online",
    description: "E-commerce front for electrical supplies retailer.",
    category: "web",
    tech: ["Yahoo Manager", "HTML", "CSS", "JavaScript"],
    image: "/assets/ElectricCover.jpg",
    links: { live: "https://electricsuppliesonline.com/" },
  },
  {
    id: "fie",
    title: "FIE Study Abroad",
    description:
      "Student blog post documenting a study-abroad experience cut short by COVID-19.",
    category: "web",
    tech: ["WordPress", "HTML", "CSS", "JavaScript"],
    image: "/assets/FIECover.jpg",
    links: {
      live: "https://fiestudyabroad.wordpress.com/2020/04/13/jazz-wrapping-up-study-abroad-after-covid-19/",
    },
  },
  {
    id: "todo",
    title: "To-Do App with Quote API",
    description:
      "Task tracker with daily-quote integration. CRUD built on Firebase.",
    category: "app",
    tech: ["React", "Firebase", "Axios", "REST API"],
    image: "/assets/ToDoAppLogo.png",
    links: {
      github: "https://github.com/Jazz-Harris/To-DoApp",
      live: "https://to-do-app-nu-cyan.vercel.app/",
    },
  },
  {
    id: "weather",
    title: "Weather Application",
    description:
      "Search any city and get conditions via OpenWeather. Built in Next.js.",
    category: "app",
    tech: ["Next.js", "React", "Tailwind", "OpenWeather API"],
    image: "/assets/weatherappbg.png",
    links: {
      github: "https://github.com/Jazz-Harris/WeatherApp",
      live: "https://weather-app-sand-six-26.vercel.app/",
    },
  },
  {
    id: "chat",
    title: "Real-time Chat App",
    description:
      "Multi-user chat with auth and live message sync on Firebase v9.",
    category: "app",
    tech: ["React", "Firebase v9", "Tailwind"],
    image: "/assets/ChatAppLogo.png",
    links: {
      github: "https://github.com/Jazz-Harris/ChatApp",
      live: "https://chata-27aa7.web.app/",
    },
  },
  {
    id: "data-pro",
    title: "Data Professional Survey Dashboard",
    description:
      "Cleaned and transformed survey data and visualized it in Power BI.",
    category: "data",
    tech: ["Power BI", "Data cleaning"],
    image: "/assets/Dataprofessionallogo.png",
    links: {
      github: "https://github.com/Jazz-Harris/DataProfessionalSurveyPowerbi",
    },
  },
  {
    id: "kpi",
    title: "KPI Management Dashboard",
    description:
      "Interactive sales-and-profit dashboard published to Tableau Public.",
    category: "data",
    tech: ["Tableau"],
    image: "/assets/KPIDashboardLogo.png",
    links: {
      github: "https://github.com/Jazz-Harris/KPI-Dashboard-Management",
      live: "https://public.tableau.com/views/SalesandProfitManagementDashboard_16673599690350/Dashboard1?:language=en-US&:display_count=n&:origin=viz_share_link",
    },
  },
  {
    id: "webscrape",
    title: "Real Estate Web Scraper",
    description:
      "Pulls listing data with BeautifulSoup and exports to CSV.",
    category: "data",
    tech: ["Python", "BeautifulSoup"],
    image: "/assets/webscraplogo.png",
    links: {
      github: "https://github.com/Jazz-Harris/WebScrapingRealEstateData",
    },
  },
  {
    id: "eda",
    title: "Supermarket Sales EDA",
    description:
      "Exploratory data analysis on supermarket sales using Python.",
    category: "data",
    tech: ["Python", "Pandas", "NumPy", "Seaborn"],
    image: "/assets/EDAProjectLogo.png",
    links: {
      github:
        "https://github.com/Jazz-Harris/EDAWithSuperMarketData/blob/main/EDAWithSupermarketSales.ipynb",
    },
  },
  {
    id: "credit",
    title: "U.S. Credit Card Defaults",
    description:
      "Prepared, transformed, and modeled credit card default data in Power BI.",
    category: "data",
    tech: ["Power BI", "ETL"],
    image: "/assets/CreditCardDefaultsLogo.png",
    links: {
      github: "https://github.com/Jazz-Harris/CreditCardDefaults-Powerbi",
    },
  },
  {
    id: "stocks",
    title: "Real-time Stock Market Dashboard",
    description:
      "Live stock data pulled from Financial Modeling Prep API into Power BI.",
    category: "data",
    tech: ["Power BI", "REST API"],
    image: "/assets/RTSMDLogo.png",
    links: {},
  },
];
