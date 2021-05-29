module.exports = {
  lang: "en",
  name: "Chen-Yuan Hsieh",
  enName: "Ricky Hsieh",
  job: "Software engineer",
  socials: [
    {
      // linkedin
      iconClass: "fab fa-linkedin",
      text: "Ricky Hsieh",
      link: "https://www.linkedin.com/in/ricky-hsieh-992473139/",
    },
    {
      // gmail
      iconClass: "far fa-envelope",
      text: "ric1134991@gmail.com",
      link: "mailto:ric1134991@gmail.com",
    },
    {
      // github
      iconClass: "fab fa-github-square",
      text: "ric113",
      link: "https://github.com/ric113",
    },
  ],
  // skills
  skillTitle: "Skills",
  skills: [
    {
      category: "Frontend",
      entries: [
        "Javascript(ES5+)",
        "Typescript",
        "React",
        "redux",
        "GraphQL(Apollo-client)",
        "HTML/CSS",
      ],
    },
    {
      category: "Backend",
      entries: ["nodejs", "SQL", "mongoDB"],
    },
    {
      category: "Others",
      entries: ["git", "unix-like OS", "jest", "docker", "CI/CD"],
    },
  ],
  // experiences
  experienceTitle: "Experiences",
  experiences: [
    {
      company: "Verizon media - Yahoo",
      job: "Frontend engineer",
      duration: "2019.10 - now",
      whatIDo: [
        "revamp and maintain Taiwan finance website (from php to React with server-side-rendering), includes desktop and mobile web version",
        "develop and maintain Taiwan/Hong-Kong membership loyalty program's WebView",
        "optimize loading performance by chunks splitting, modern browsers build and tree-shaking",
        "write unit/integration/E2E testing and enhance E2E testing scripts to make it more stable",
        "develop ATS (Apache Traffic Server) to handle incoming requests",
      ],
      techStack: [
        "React",
        "nodeJS",
        "Fluxible",
        "Chart.js",
        "ATS",
        "Docker",
        "Jest/Mocha/Protractor",
        "AtomicCSS",
        "webpack",
        "babel",
        "grunt",
        "Lua",
      ],
    },
    {
      company: "17 Media",
      job: "Frontend engineer",
      duration: "2018.08 - 2019.07",
      whatIDo: [
        "develop about 50 campaign pages (include 4 big-scale campaign pages), including UI rendering in frontend, data processing and API implementation in backend",
        "refactor our team's dashboard with UI framework",
        "optimize leaderboard component in campaign editor with partial rendering and data lazy loading",
      ],
      techStack: [
        "React",
        "Typescript",
        "styled-component",
        "react-router",
        "antd",
        "nodejs",
        "SQL",
        "mongoDB",
      ],
    },
  ],
  // projects
  projectTitle: "Projects",
  projects: [
    {
      name: "Ecoco's member management system",
      descriptions: [
        "develop authority management and change-log pages",
        "add shared components into storybook",
        "work with three engineers and one designer",
      ],
      techStack: [
        "Next.js",
        "Typescript",
        "emotion",
        "apollo-client",
        "storybook",
      ],
    },
    {
      name: "6DOF object tracking",
      demoLink: "https://www.youtube.com/watch?v=bjM2IdMUuD4",
      descriptions: [
        "develop an object tracking system on web",
        "detect object with ar-markers by device camera and calculate its position and rotation",
      ],
      techStack: ["ar.js", "three.js"],
    },
    {
      name: "OpenHCI'2017 official website",
      demoLink: "http://www.openhci.com/2017/index.html",
      descriptions: [
        "develop static website with some DOM animations",
        "work with two engineers",
      ],
      techStack: ["GSAP", "ScrollMagic"],
    },
  ],
  // educations
  educationTitle: "Education",
  educations: [
    {
      school: "National Chiao Tung University",
      major: "Computer Science",
      degree: "Master of Engineering",
      duration: "2016.09 - 2018.07",
      lab: "Human-Computer Interaction lab",
    },
    {
      school: "National Chung Hsing University",
      major: "Computer Science",
      degree: "Bachelor of Engineering",
      duration: "2012.09 - 2016.06",
    },
  ],
};
