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
      category: "Frontend & Backend",
      entries: ["Javascript(ES5+)", "Typescript", "React", "Node.js", "SQL", "mongoDB"],
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
        {
          title:
            "Develop and maintain a “nocode” website service, including the website editor, the site renderer and related admin tools",
        },
        {
          title:
            "Decouple team’s apps from a monolith project by using micro-frontend infrastructure and building our own API server, with independent release pipeline, tech stack and development flow",
          details: [
            "reduce the CI/CD time (seeing the changes reflect on the stg. or prod.) about 50%",
            "reduce time to see the changes showing on the page each save from ~20s to ~4s during local development",
          ],
        },
        {
          title:
            "Introduce mono-repo to our team's projects (with 5+ apps and 5+ libs) for better developer experience",
          details: [
            "better file structure, co-locate related files",
            "reduce the average CI time by running only affected apps and libs",
          ],
        },
        {
          title: "Mentoring new team members",
        },
      ],
      techStack: [
        "React",
        "Typescript",
        "redux",
        "Next.js",
        "styled-components",
        "Node.js",
        "storybook",
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
        {
          title:
            "Revamp and maintain Yahoo Taiwan Finance website (from php to React with server-side rendering), including desktop and mobile web version",
        },
        {
          title:
            "Develop and maintain WebView for Yahoo Taiwan and Hong-Kong membership loyalty program",
        },
        {
          title:
            "Develop and maintain biz-connect systems for internal users and external collaborators, both of them are written by React",
        },
        {
          title:
            "Optimize loading performance by chunks splitting, modern browsers build and tree-shaking",
          details: ["reduce 30% of gzipped JS size"],
        },
        {
          title:
            "Write unit/integration/E2E test and enhance E2E testing scripts to make it more stable",
        },
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
        {
          title:
            "Develop about 50 campaign WebViews (include 4 big-scale campaign pages), from frontend UI rendering to backend data processing and API implementation",
        },
        {
          title: "Refactor and improve team's dashboard with UI framework",
        },
        {
          title:
            "Optimize leaderboard component in campaign editor with partial rendering and data lazy loading",
        },
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
