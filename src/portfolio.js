/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Ashwitha Kottam",
  title: "Hi all, I'm Ashwitha",
  subTitle: emoji(
    "Full Stack Developer with experience in Java, React, and scalable backend systems. Skilled in building REST APIs and integrating AI-powered solutions using OpenAI APIs. Passionate about developing efficient and user-centric applications."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: false// Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/AshwithaKottam",
  linkedin: "https://www.linkedin.com/in/kottamashwitha7/",
  gmail: "ashwithaak77@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Full-Stack Developer passionate about building scalable web applications and modern software solutions.",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-Java"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "TypeScript",
      fontAwesomeClassname: "fab fa-TypeScript"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "REST APIs",
      fontAwesomeClassname: "fas fa-REST APIs"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Angular",
      fontAwesomeClassname: "fab fa-Angular"
    },
    {
      skillName: "UI Development",
      fontAwesomeClassname: "fab fa-UI Development"
    },
    {
      skillName: "PostgreSQL",
      fontAwesomeClassname: "fab fa-PostgreSQL"
    },
    {
      skillName: "MongoDB",
      fontAwesomeClassname: "fab fa-MongoDB"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-Git"
    },
    {
      skillName: "Jenkins",
      fontAwesomeClassname: "fab fa-Jenkins"
    },
    {
      skillName: "Apache Kafka",
      fontAwesomeClassname: "fab fa-Apache Kafka"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Campbellsville University ",
      subHeader: "Master of Science in Data Science & Artificial Intelligence",
      duration: "Jan 2023 - August 2024",
      desc: "CGPA: 4.0. Focused on Machine Learning, Data Analytics, Artificial Intelligence, and real-world AI application development.",
      descBullets: [
        "Worked on AI-based applications building chatbot systems using OpenAI APIs",
        "Built strong foundation in data processing, analytics, and machine learning concepts"
      ]
    },
    {
      schoolName: "Jawaharlal Nehru Technological University, Hyderabad (JNTUH)",
      subHeader: "Bachelor of Science in Computer Science",
      duration: "May 2017 - August 2021",
      desc:"Built strong foundation in programming , software engineering, databases, and web technologies.",
      descBullets: ["Worked on full-stack development projects using Java, JavaScript, HTML, and CSS",
        "Learned core concepts of data structures, algorithms, and database management systems"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "50%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "AWS Java Developer",
      company: "Synovus Financial Bank",
      date: "Jan 2024 - Present",
      desc: "Developed scalable full-stack applications using Spring Boot, React.js, and cloud platforms(AWS & GCP).",
      descBullets: [
        "Built microservices-based applications using Java, Spring Boot, and RESTful APIs",
        "Developed responsive frontend components using React.js and modern JavaScript",
        "Implemented OAuth2/JWT-based authentication for secure user access",
        "Designed and optimized SQL databases using PostgreSQL and MySQL",
        "Integrated AI-driven APIs for document automation and intelligent data processing",
        "Deployed applications on AWS and Google Cloud Platform environments",
        "Containerized services using Docker and automated deployments using CI/CD pipelines",
        "Collaborated with Agile team to deliver features"
      ]
    },
    {
      role: "Software Engieer",
      company: "RK Info Systems",
      date: "May 2021 – April 2022",
      desc: "worked on full-stack application development using Java, Spring Boot, React.js, and SQL technologies.",
      descBullets: [
        "Developed responsive web applications using Java, Spring Boot, React.js, HTML, CSS and javaScript",
        "Built and integrated RESt APIs using Spring Boot",
        "Worked with SQl databases and optimized backend queries",
        "Collaboarated with Agile teams for feature development and testing",
        "participated in debugging, deployment, and application maintenance",
      ]
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "FULL-STACK APPLICATIONS AND AI-DRIVEN WEB SOLUTIONS",
  projects: [
    {
      image: require("./assets/images/chatbot.png"),
      projectName: "AI Chatbot Applications",
      projectDesc: "Designed and developed a responsive AI chatbot web application using Node.js, JavaScript, HTMl, and CSS with OPENAI API integration. Implemented real-time conversational functionality, API-driven response generation, and dynamic user interaction handling to deliver an engaging and seamless chat experience.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/AshwithaKottam/ai-chatbot"
        }
        //  you can add extra buttons here.
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Feel free to connect with me regarding full-stack development opportunities, collaborations, or projects.",
  email_address: "ashwithaak77@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
