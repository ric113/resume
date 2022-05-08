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
      iconClass: "fas fa-envelope-square",
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
      entries: ["Javascript(ES5+)", "Typescript", "React"],
    },
    {
      category: "Backend",
      entries: ["Node.js", "SQL", "mongoDB"],
    },
    {
      category: "Others",
      entries: ["git", "unix-like OS", "docker", "k8s", "aws", "CI/CD tools"],
    },
  ],
  // experiences
  experienceTitle: "Experiences",
  experiences: [
    {
      company: "Houzz",
      job: "Software engineer",
      place: "remote",
      duration: "2021.10 - now",
      whatIDo: [
        "Develop and maintain a “nocode” website service, including the site editor and renderer which serves millions of traffic per month",
        "Introduce mono-repo to our team's projects (with 5+ apps and 5+ libs) for better developer experience",
        "Decouple team's project from a monolith core project by using micro-frontend structure with independent release pipeline, tech stack and development flow",
      ],
      techStack: [
        "React",
        "Typescript",
        "redux",
        "Next.js",
        "styled-components",
        "Node.js",
        "jest/testing-library/cypress",
        "docker",
        "k8s",
        "aws",
        "nx",
        "webpack",
        "babel",
        "gulp",
        "jenkins",
        "github actions",
        "sentry",
        "kibana",
      ],
    },
    {
      company: "Yahoo",
      place: "Taiwan",
      job: "Frontend engineer",
      duration: "2019.10 - 2021.10",
      whatIDo: [
        "Revamp and maintain Yahoo Taiwan Finance website (from php to React with server-side rendering), including desktop and mobile web version",
        "Develop and maintain WebView for Yahoo Taiwan and Hong-Kong membership loyalty program",
        "Develop and maintain biz-connect systems for internal users and external collaborators, both of them are written by React",
        "Optimize loading performance by chunks splitting, modern browsers build and tree-shaking",
        "Write unit/integration/E2E test and enhance E2E testing scripts to make it more stable",
      ],
      techStack: [
        "React",
        "redux",
        "Node.js",
        "fluxible",
        "Chart.js",
        "docker",
        "jest/mocha/protractor",
        "atomicCSS",
        "styled-components",
        "webpack",
        "babel",
        "grunt",
        "Screwdriver",
      ],
    },
    {
      company: "17 Media",
      job: "Frontend engineer",
      place: "Taiwan",
      duration: "2018.08 - 2019.07",
      whatIDo: [
        "Develop about 50 campaign WebViews (include 4 big-scale campaign pages), from frontend UI rendering to backend data processing and API implementation",
        "Refactor and improve team's dashboard with UI framework",
        "Optimize leaderboard component in campaign editor with partial rendering and data lazy loading",
      ],
      techStack: [
        "React",
        "Typescript",
        "styled-component",
        "react-router",
        "ant-design",
        "Node.js",
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
        "Develop authority management and change-log pages",
        "Add shared components into storybook",
        "Work with three engineers and one designer",
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
      name: "OpenHCI'2017 official website",
      demoLink: "http://www.openhci.com/2017/index.html",
      descriptions: [
        "Develop static website with some DOM animations",
        "Work with two engineers",
      ],
      techStack: ["GSAP", "scrollMagic"],
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
      lab: "@Human-Computer Interaction lab",
    },
    {
      school: "National Chung Hsing University",
      major: "Computer Science",
      degree: "Bachelor of Engineering",
      duration: "2012.09 - 2016.06",
    },
  ],
};
