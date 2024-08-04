/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Abhijeet's Portfolio",
  description: `I'm a Developer that have strong graps on Data Structure and Algorithms who spends time in coding ,scripting , building Web Applicaations and also participated in Comptetive Codings. Been coding for around 2 years now and still on the road to learn
    more. Current coding technologies I know fair enough are Java, C, C#, Python ,JavaScript, Django, Django Rest Framework , Reactjs, Redux , Express
    and a fair share of Machine Learning.
    `,
  og: {
    title: "Abhijeet Maurya Portfolio",
    type: "website",
    url: "http://abhijeetmaurya.com/",
  },
};

//Home Page
const greeting = {
  title: "Abhijeet Maurya",
  logo_name: "Mortal",
  nickname: "mortal",
  subTitle: `I'm a Developer that have strong graps on Data Structure and Algorithms who spends time in coding ,scripting , building Web Applicaations and also participated in Comptetive Codings. Been coding for around 2 years now and still on the road to learn
  more. Current coding technologies I know fair enough are Java, C, C#, Python ,JavaScript, Django, Django Rest Framework , Reactjs, Redux , Express
  and a fair share of Machine Learning.`,
  resumeLink:
    "https://drive.google.com/file/d/1KpxMA-VueBSDz3KGgQbyjztyu9FZ1qCb/view?usp=sharing",
  portfolio_repository: "have to be do add here git potfolio repo",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/punishermortal",
  // linkedin: "https://www.linkedin.com/in/abhijeet-maurya-2b0a49187/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"


// {/* <FontAwesomeIcon icon="fa-brands fa-stack-overflow" /> */}
  {
    name: "Github",
    link: "https://github.com/punishermortal",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/abhijeet-maurya-2b0a49187/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "StackOverFlow",
    link: "https://stackoverflow.com/users/20766252/abhijeet",
    fontAwesomeIcon: "fa-brands fa-stack-overflow", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#F58025", // Reference https://simpleicons.org/?q=youtube
  },
  {
    name: "Gmail",
    link: "mailto:mauryaabhijeet789a@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  // {
  //   name: "Twitter",
  //   link: "https://twitter.com/gray_rahul",
  //   fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
  //   backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  // },
  /*{
    name: "Facebook",
    link: "https://www.facebook.com/laymanbrother.19/",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },*/
  {
    name: "Instagram",
    link: "https://www.instagram.com/kimfineletsgo/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];


const skills = {
  data: [
    /*{
      title: "Data Science & AI",
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
      ],
    },*/
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building resposive website front end using React-Redux",
        "⚡ Developing Progressive Web Apps using ReactJS",
        "⚡ Creating application backend in Node, Express & Django Rest Framework",
        "⚡ Deploying application using Amazon Web Services",
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
          skillName: "Django",
          fontAwesomeClassname: "simple-icons:django",
          style: {
            color: "#092E20",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#F68536",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        // {
        //   skillName: "Sass",
        //   fontAwesomeClassname: "simple-icons:sass",
        //   style: {
        //     color: "#CC6699",
        //   },
        // },
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
          fontAwesomeClassname: "simple-icons:node-dot-js",
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
          skillName: "Typescript",
          fontAwesomeClassname: "simple-icons:typescript",
          style: {
            color: "#3178C6",
          },
        },
        {
          skillName: "Swager",
          fontAwesomeClassname: "simple-icons:Swagger",
          style: {
            color: "#85EA2D",
          },
        },
      ],
    },
    /*{
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
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
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
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "Inkscape",
          fontAwesomeClassname: "simple-icons:inkscape",
          style: {
            color: "#000000",
          },
        },
      ],
    },*/
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/profile/2018007641_abhi1",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/berlin111",
    },
    /*{
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "http://codeforces.com/profile/layman_brother",
    },*/
    // {
    //   siteName: "Hackerearth",
    //   iconifyClassname: "simple-icons:hackerearth",
    //   style: {
    //     color: "#323754",
    //   },
    //   profileLink: "https://www.hackerearth.com/@grayhathacks10",
    // },
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#FFA116",
      },
      profileLink: "https://leetcode.com/mortalPun/",
    },
    {
      siteName: "GeeksforGeek",
      iconifyClassname: "simple-icons:geeksforgeeks",
      style: {
        color: "#2F8D46",
      },
      profileLink: "https://auth.geeksforgeeks.org/user/mauryaabhijeet789a",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Sharda University",
      subtitle: "B.Tech. in Computer Engineering",
      logo_path: "sharda.gif",
      alt_name: "Sharda University",
      duration: "2018 - 2022",
      descriptions: [
        "⚡ I have studied and made strong comands on core subjects of Computer Science like Data Structure and Algorithms, DBMS, Operating System, Computer Network, AI,ML,NLP,DeepLearning etc.",
        "⚡ Apart from this, I have done a specialization on Artificial Intelligence and Machine Learning",
      ],
      website_link: "https://www.sharda.ac.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "BACKEND WEB DEVELOPMENT",
      subtitle: "- MICROSOFT",
      logo_path: "microsoft_logo.png",
      certificate_link:
        "https://www.google.com/url?q=https://devtown-uploads.s3.ap-south-1.amazonaws.com/certificates/1YPqap/1fbCIe.pdf&sa=D&source=apps-viewer-frontend&ust=1701027151742023&usg=AOvVaw02-BpQn3-dj3sbGnQy9917&hl=en",
      alt_name: "Microsoft",
      color_code: "#5E5E5E",
    },
    {
      title: "DEVELOPER STUDENT CLUB",
      subtitle: "- GOOGLE",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.google.com/url?q=https://devtown-uploads.s3.ap-south-1.amazonaws.com/certificates/1YPqap/Z1jQTth.pdf&sa=D&source=apps-viewer-frontend&ust=1700938697836830&usg=AOvVaw2twIm0vkCLP2QPU1qdxwcV&hl=en",
        alt_name: "Google",
      color_code: "#4285F4",
    },
    {
      title: "JAVA",
      subtitle: "- HACKER RANK",
      logo_path: "hackerrank_logo.png",
      certificate_link:
        "https://www.hackerrank.com/certificates/016eab7b1ca0",
      alt_name: "Hackerrank",
      color_code: "#00EA64",
    },
    {
      title: "PYTHON",
      subtitle: "- HACKER RANK",
      logo_path: "hackerrank_logo.png",
      certificate_link:
        "https://www.hackerrank.com/certificates/1ec4c34ea4c3",
      alt_name: "Hackerrank",
      color_code: "#00EA64",
    },
    {
      title: "SQL",
      subtitle: "- HACKER RANK",
      logo_path: "hackerrank_logo.png",
      certificate_link:
        "https://www.hackerrank.com/certificates/0aee2861bb2b",
      alt_name: "Hackerrank",
      color_code: "#00EA64",
    },
    {
      title: "DEV TOWN",
      subtitle: "- DEV TOWN",
      logo_path: "devtown.png",
      certificate_link:
        "https://devtown-uploads.s3.ap-south-1.amazonaws.com/certificates/1YPqap/ZSJwwY.pdf",
      alt_name: "DevTOWN",
      color_code: "#1F70C199",
    },
    /*{
      title: "Big Data",
      subtitle: "- Kim Akers",
      logo_path: "microsoft_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/164zKCFOsI4vGqokc-Qj-e_D00kLDHIrG/view",
      alt_name: "Microsoft",
      color_code: "#D83B0199",
    },
    {
      title: "Advanced Data Science",
      subtitle: "- Romeo Kienzler",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/BH2T9BRU87BH",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Advanced ML on GCP",
      subtitle: "- GCP Training",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/5JZZM7TNQ2AV",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "DL on Tensorflow",
      subtitle: "- Laurence Moroney",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/6T4DCUGNK8J8",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "Fullstack Development",
      subtitle: "- Jogesh Muppala",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
      alt_name: "Coursera",
      color_code: "#2A73CC",
    },
    {
      title: "Baseline: Deploy & Develop",
      subtitle: "- Qwiklabs",
      logo_path: "baseline.png",
      certificate_link:
        "https://google.qwiklabs.com/public_profiles/224dc346-13f3-4479-b554-b78d9b68ad3c",
      alt_name: "GCP",
      color_code: "#EDEDED",
    },
    {
      title: "Google Cloud Essentials",
      subtitle: "- Qwiklabs",
      logo_path: "essentials.png",
      certificate_link:
        "https://google.qwiklabs.com/public_profiles/224dc346-13f3-4479-b554-b78d9b68ad3c",
      alt_name: "GCP",
      color_code: "#927BB8",
    },
    {
      title: "Cryptography",
      subtitle: "- Saurabh Mukhopadhyay",
      logo_path: "nptel_logo.png",
      certificate_link:
        "https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
      alt_name: "NPTEL",
      color_code: "#FFBB0099",
    },
    {
      title: "Cloud Architecture",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
      alt_name: "GCP",
      color_code: "#4285F499",
    },*/
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have worked with evolving startups as a Full Stack Developer and Software Developer. I have also worked as a Freelancer for a pretty long time, mostly for web scraping and frontend using ReactJS.",
  header_image_path: "experience.svg",
  sections: [
    /*{
      title: "Work",
      experiences: [
        {
          title: "Associate AI Engineer",
          company: "Legato Health Technology",
          company_url: "https://legatohealthtech.com/",
          logo_path: "legato_logo.png",
          duration: "June 2020 - PRESENT",
          location: "Hyderabad, Telangana",
          description:
            "I am working on automating healthcare products. The projects involve automation for process improvements and for significantly enhancing the profits. I am currently working on Cancer Survival and Reoccurence Prediction. Our goal is to make AI system which scales and removes doctor dependency as much as possible.",
          color: "#0879bf",
        },
        {
          title: "Android and ML Developer",
          company: "Muffito Incorporation",
          company_url: "https://www.linkedin.com/company/muffito-inc/about/",
          logo_path: "muffito_logo.png",
          duration: "May 2018 - Oct 2018",
          location: "Pune, Maharashtra",
          description:
            "I have created complete Android Application for locating Pub, Bar and beverage shops around you. I have also worked on implementation of algorithms for Face Detection, Text extraction from Image. I was involved in a team for creating complete software architecure of mobile and web application as well as admin panel for company.",
          color: "#9b1578",
        },
        {
          title: "Android Developer",
          company: "FreeCopy Pvt. Ltd.",
          company_url: "https://www.linkedin.com/company/freecopy/about/",
          logo_path: "freecopy_logo.png",
          duration: "Nov 2017 - Dec 2017",
          location: "Ahmedabad, Gujarat",
          description:
            "FreeCopy is the Start up from Indian Institute of Management, Ahmedabad. I have changed the integration of the whole app from Google to Firebase. I learnt the efﬁcient ways of Data communications like Retroﬁt, Eventbus etc. I experienced the real time start up. I learnt the Design thinking of UI on perspective of People.",
          color: "#fc1f20",
        },
      ],
    },*/
    {
      title: "Internships",
      experiences: [
        {
          title: "Python Developer Intern",
          company: "Shivila Technologies",
          company_url: "https://shivila.com/",
          logo_path: "shivila_logo.jpg",
          duration: "Dec 2021 - July 2022",
          location: "Work From Home",
          description: `I built the backend for the application which had numerous features like scheduling, planning and notifications for the mettings for  customer.
          Create restfull Apis for Web Applications which basically perford crud operations on cliend buisness Logics.`,
          color: "#040707",
        },
        {
          title: "Associate Software Engineer",
          company: "Triazine software Pvt Ltd",
          company_url: "https://triazinesoft.com/",
          logo_path: "triazine_logo.png",
          duration: "Dec 2022 - Present",
          location: "Noida",
          description:
            `At Triazine Software, I've been a driving force behind the
            backend development team. My role entails seamlessly
            managing API changes, implementing client-requested
            features, and crafting robust, RESTful APIs. I took the reins in
            building the backend infrastructure for an application
            boasting advanced functionalities and optimize Apis performance by using pandas library and automate the lots of funcanality as per business requirement`,
          color: "#27AAE2",
        },
      ],
    },
    
  ],
};

// Projects Page
const projectsHeader = {
  title: "Movie Recommendation System",
  description:
    "Used content based filtering and cosine similarity algorithm for creating a model of recommendation system, which help user to get similiar type of movies, and GUI will be made by using streamlit.",
  avatar_image_path: "movie_recomendation.svg",

  title: "Blogging Website",
  description:
    "Design: I've designed the website with user experience in mind. After a seamless signup process, authors gain access to a personal dashboard where they can easily compose, edit, and manage their blogs. Authorization and Authentication: Security is paramount. With Django's powerful framework, I've implemented a robust authentication system. Authors enjoy the privileges of reading, writing, and editing their content, ensuring a personalized and secure environment. Stunning Frontend: The frontend",
  avatar_image_path: "blogging_app.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "anim_me.png",
    description:
      "Feel free to drop a mail. I can help with DSA,Django, ReactJS, Node js, Comptetive Programing and Web Development.",
  },
  blogSection: {
    title: "Sample UI - Spotify",
    subtitle: "A spotify (ui) clone for me to explore the potential of PWAs",
    // link: "http://sinplay-inc.web.app/",
    message: "This is a sample UI clone of Spotify. No actual links available.",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Noida Sector-58, Uttar Pradesh - 201306",
    avatar_image_path: "address_image.svg",
    //location_map_link: "https://goo.gl/maps/MpMqtRZytFchMkZ76",
  },
  emailSection: {
    title: "Email Address",
    subtitle: "mauryaabhijeet789a@gmail.com",
    callable_link: "mailto:mauryaabhijeet789a@gmail.com",
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
  contactPageData,
};
