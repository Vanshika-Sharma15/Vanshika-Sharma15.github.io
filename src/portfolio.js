/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, 
};

//SEO Related settings
const seo = {
  title: "Vanshika's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Vanshika Sharma Portfolio",
    type: "website",
    url: "http://VanshikaSharma.com/",
  },
};

//Home Page
const greeting = {
  title: "Vanshika Sharma",
  logo_name: "VanshikaSharma",
  nickname: "software_developer",
  subTitle:"Full Stack Developer skilled in building scalable MERN stack applications with expertise in RESTful APIs, database design, and MVC architecture. Focused on developing secure, high-performance web applications using modern development practices, authentication/authorization, and efficient client–server systems.",
  resumeLink:"https://drive.google.com/file/d/1SlnE7OTaze6JAUU9QWXlF1rkmxOF29iX/view?usp=sharing" ,
  portfolio_repository: "https://github.com/Vanshika-Sharma15/Vanshika-Sharma15.github.io",
  githubProfile: "https://github.com/Vanshika-Sharma15",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com"


  {
    name: "Github",
    link: "https://github.com/Vanshika-Sharma15",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/vanshika-sharma-369050309/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },

  {
    name: "Gmail",
    link: "mailto:vanshikasharma.tech@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Twitter",
    link: "",
    fontAwesomeIcon: "fab fa-twitter", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=github
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React-Redux",
        "⚡ Developing mobile applications using Flutter, React Native and solo android apps using Kotlin",
        "⚡ Creating application backend in Node, Express & Flask",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Express.js",
          fontAwesomeClassname: "skill-icons:expressjs-dark",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "Mongo DB",
          fontAwesomeClassname: "skill-icons:mongodb",
          style: {
            color: "#663399",
          },
        },{
          skillName: "SQL",
          fontAwesomeClassname: "skill-icons:mysql-light",
          style: {
            color: "#663399",
          },
        },
        {
          skillName: "Bootstrap",
          fontAwesomeClassname: "skill-icons:bootstrap",
          style: {
            color: "#663399",
          },
        },
        {
          skillName: "Tailwind",
          fontAwesomeClassname: "skill-icons:tailwindcss-light",
          style: {
            color: "#663399",
          },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "skill-icons:java-light",
          style: {
            color: "#663399",
          },
        },


        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
      ],
    },
    {
      title: "Image-Processing",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
        "⚡ Experience of working with Computer Vision and NLP projects",
        "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Deeplearning",
          imageSrc: "deeplearning_ai_logo.png",
        },
      ],
    },
    
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Deploying deep learning models on cloud to use on mobile devices",
        "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
      ],
      softwareSkills: [
  
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Redux",
          fontAwesomeClassname: "simple-icons:redux",
          style: {
            color: "#764ABC",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
        "⚡ Customizing logo designs and building logos from scratch",
        "⚡ Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/u/Vanshika_Sharma15/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/",
    },
   
    
  ],
};

const degrees = {
  degrees: [
    {
      title: "Shobhit University Gangoh",
      subtitle: "B.Tech. in Computer Engineering",
      logo_path: "sug_img.png",
      alt_name: "Shobhit_University",
      duration: "2022-2026",
      descriptions: [
"⚡ Currently pursuing a B.Tech in Computer Science and Engineering (8th Semester) with a CGPA of 8.7, developing strong theoretical foundations in Data Structures, Algorithms, Database Management Systems, Operating Systems, Computer Architecture, and Artificial Intelligence.",
"⚡ Awarded the Merit-cum-Means Scholarship for academic excellence, recognizing consistent high academic performance among the top-performing students in the program.",
"⚡ Built practical software engineering expertise through a Full Stack Web Development program, designing and implementing scalable web applications using modern frontend and backend technologies.",
"⚡ Developed programming proficiency in Java and Python along with hands-on experience in image processing and computer vision techniques for solving real-world visibility and enhancement problems.",
"⚡ Secured 3rd place in a Hackathon by developing an innovative technical solution, demonstrating strong analytical thinking, rapid prototyping, and collaborative problem-solving skills.",
"⚡ Selected for a Summer Internship at IRDE, DRDO (Ministry of Defence) during the 6th semester, contributing to research-oriented projects and gaining exposure to real-world defense technology systems.",
"⚡ Further selected under the PM Internship Scheme for a paid internship at DRDO during the 7th semester, working on advanced technical implementations and strengthening system-level engineering and problem-solving capabilities."
],
      website_link: "https://sug.ac.in/",
    },
    {
      title: "Senior Secondary Education",
      subtitle: "Radiant Public School",
      logo_path: "rps_img.png",
      alt_name: "Radiant Public School",
      duration: "2021",
      descriptions: 
       ["⚡ Completed Matriculation (CBSE) from Radiant Public School, Nanauta, Saharanpur with 94%, demonstrating strong academic dedication and excellence.",
                  "🌟 Completed Senior Secondary Education with 92.4%, reflecting consistent academic performance and a solid foundation for higher studies.",
                  "🏅 Actively participated in extracurricular activities and won the cluster-level Kho Kho tournament, developing teamwork, leadership, and discipline."
        ],
      website_link: "https://www.rpsnanauta.com/",
    },
  ],
};

const certifications = {
  certifications: [
        {
      title: "Paid Internship",
      subtitle: "DRDO , MINISTERY OF DEFENCE , GOVT. OF INDIA",
      logo_path: "drdo_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1XpOwvTkB2C-my1jgEweYnlF__xa9gUen/view?usp=sharing",
      alt_name: "DRDO",
      color_code: "#a6d4f799",
    },
    {
      title: "Full StacK Web Development",
      subtitle: "Apna College ",
      logo_path: "apna_clg.png",
      certificate_link:
        "https://drive.google.com/file/d/1rxc5kRPTFj8ByXb5m7PlyeONh-YR-FMH/view?usp=sharing",
      alt_name: "apna_college",
      color_code: "#ebe3e399",
    },
    
    {
      title: "React Redux",
      subtitle: "Knowledge Gate",
      logo_path: "kg_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1xdduyifTzUqXt9Pc6Mgf_skUpIA2XJYC/view?usp=sharing",
      alt_name: "complete_coding",
      color_code: "#f6f0eb ",
    },
    {
      title: "Summer Internship",
      subtitle: "DRDO , MINISTERY OF DEFENCE , GOVT. OF INDIA",
      logo_path: "drdo_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1IAJTKeE0t78OlgLNuBk96PJA_8-tfn0o/view?usp=sharing",
      alt_name: "DRDO",
      color_code: "#f3f5e999",
    },
    
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work and Internship",
  description:"Entry-level developer with internship experience and hands-on exposure to real-world development practices",
    header_image_path: "experience.svg",
  sections: [
    {
      title: "Inetrnship Section",
      work: true,
      experiences: [
        {
          title: "Software developer",
          company: "DRDO , MINISTERY OF DEFENSE , GOVT. OF INDIA",
          company_url: "https://www.drdo.gov.in/drdo/en",
          logo_path: "drdo_logo.png",
          duration: "11 AUG 2025-11 FEB 2026",
          location: "Dehradun , Uttrakhand , India",
          description : [
                    "Built a React-based monitoring dashboard for real-time visualization of subsystem health data.",
                    "Developed backend services using Node.js and Express.js to manage device communication and data processing.",
                    "Implemented real-time data pipelines and APIs for health status monitoring.",
                    "Designed scalable data storage architecture for subsystem logs and analytics.",
                    "Improved debugging efficiency by 20–30% through centralized monitoring and automated processing."
],
        },{
          title: "IMAGE PROCESSING , AI-ML",
          company: "DRDO , MINISTERY OF DEFENSE , GOVT. OF INDIA",
          company_url: "https://www.drdo.gov.in/drdo/en",
          logo_path: "drdo_logo.png",
          duration: "June 2025 - Aug 2025",
          location: "Dehradun , Uttrakhand , India",
          description:["Collaborated on a bad-weather imaging project aimed at fog removal and visibility enhancement.",
                    "Implemented and tested algorithms in Python utilizing computer vision techniques for image clarity improvement.",
                    "Contributed to the evaluation of deep-learning models for defogging and supported data preparation and performance analysis.",],
          color: "#0879bf",
        }   ]},

        {
  title: "Course Section",
  work: true,
  experiences: [
    {
      title: "Full Stack Web Development",
      company: "Apna College",
      company_url: "https://www.apnacollege.in",
      logo_path: "apna_clg.png",
      duration: "2024",
      location: "Online",
      description: [
        "Completed a comprehensive Full Stack Web Development course covering modern web technologies and backend architecture.",
        "Built multiple projects using the MERN stack (MongoDB, Express.js, React.js, Node.js) to implement real-world web application workflows.",
        "Developed RESTful APIs, authentication systems, and server-side logic using Node.js and Express.js.",
        "Designed and managed MongoDB databases including schema design, CRUD operations, and query optimization.",
        "Applied backend concepts such as middleware, API routing, authentication, and error handling to build scalable applications."
      ],
      color: "#0879bf"
    },
    {
      title: "React Redux",
      company: "Knowledge Gate",
      company_url: "https://www.knowledgegate.ai/",
      logo_path: "kg_logo.png",
      duration: "2024",
       description: [
        "Learned advanced front-end development using React.js including component-based architecture and hooks.",
        "Implemented global state management using Redux and Redux Toolkit for scalable applications.",
        "Built dynamic and responsive user interfaces with reusable React components.",
        "Integrated REST APIs with React applications and handled asynchronous data using modern JavaScript techniques.",
        "Optimized application performance using React best practices and state management patterns."
      ],
      color: "#0879bf"
    }
  ]
}


      ]
      
   
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "Worked on designing, developing, and deploying software applications while applying best practices in coding, debugging, testing, and performance optimization.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "neuro-symbolic-sudoku-solver",
      name: "Neuro-Symbolic Sudoku Solver",
      createdAt: "2023-07-02T00:00:00Z",
      description: "Paper published in KDD KiML 2023",
      url: "https://arxiv.org/abs/2307.00653",
    },
    {
      id: "mdp-diffusion",
      name: "MDP-Diffusion",
      createdAt: "2023-09-19T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/mdp-diffusion/",
    },
    {
      id: "consistency-models",
      name: "Consistency Models",
      createdAt: "2023-10-12T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/consistency-models/",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "vanshika.jpeg",
    description:
  "I’m a fresher actively seeking opportunities to learn, grow, and contribute.\nFeel free to reach out if you'd like to connect.",
  },

  addressSection: {
    title: "Address",
    subtitle: "Saharanpur UP ",
    locality: "West UP",
    country: "India",
    region: "Saharanpur",
    postalCode: "247001",
    
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/NvYZqa34Wye4tpS17",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
