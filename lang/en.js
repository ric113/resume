module.exports = {
  lang: 'en',
  name: 'Chen-Yuan Hsieh',
  enName: 'Ricky Hsieh',
  job: 'Software engineer',
  socials: [
    {
      // linkedin
      iconClass: 'fab fa-linkedin',
      text: 'Ricky Hsieh',
      link: 'https://www.linkedin.com/in/ricky-hsieh-992473139/',
    },
    {
      // gmail
      iconClass: 'fas fa-envelope-square',
      text: 'ric1134991@gmail.com',
      link: 'mailto:ric1134991@gmail.com',
    },
    {
      // github
      iconClass: 'fab fa-github-square',
      text: 'ric113',
      link: 'https://github.com/ric113',
    },
  ],
  // skills
  skillTitle: 'Skills',
  skills: [
    {
      category: 'Frontend & Backend',
      entries: [
        'Javascript(ES5+)',
        'Typescript',
        'React',
        'Node.js',
        'SQL',
        'mongoDB',
        'GraphQL',
      ],
    },
    {
      category: 'Others',
      entries: ['git', 'unix-like OS', 'docker', 'k8s', 'aws', 'CI/CD tools'],
    },
  ],
  // experiences
  experienceTitle: 'Experiences',
  experiences: [
    {
      company: 'TikTok',
      job: 'Frontend engineer',
      place: 'Singapore',
      duration: '2024.03 - now',
      whatIDo: [
        {
          title:
            'Responsible for multiple to-B/C projects (seller qualification, report, IPR report & management and creator KYC) of GNE',
          details: [
            'working on both seller and creator sides new markets(8+) opening features, ensure that the TTS platform complies with local regulations',
            "start and contribute to projects' all-in-one document, includes developing info. and step-by-step onboarding guide, make new joiners onboard smoothly",
          ],
        },
        {
          title:
            'Develop and maintain multiple to-Ops projects (moderation and violation center) of GNE',
          details: [
            'building configuration pages of moderation and violation center from scratch, for Ops to configure flow of moderation flow and violation pages wordings, images, rules ... etc.',
          ],
        },
        {
          title: 'Mentoring new join members',
          details: [
            "help with team's projects onboarding, task assigning and code reviewing",
          ],
        },
      ],
      techStack: ['React', 'Typescript', 'styled-components', 'Node.js'],
    },
    {
      company: 'Houzz',
      job: 'Software engineer',
      place: 'remote',
      duration: '2021.10 - 2024.02',
      whatIDo: [
        {
          title:
            'Develop and maintain a “nocode” website service, including website editor, site renderer and related admin tools',
        },
        {
          title:
            'Decouple team’s apps from a monolith project by using micro-frontend infrastructure, and building our own API server with independent release pipeline, tech stack and development flow',
          details: [
            'reduce up to <strong>50%</strong> of the CI/CD time',
            'reduce <strong>80% (~20s to ~4s)</strong> page-changing time each save during local development',
          ],
        },
        {
          title:
            "Introduce mono-repo to team's projects (with 5+ apps and 5+ libs) for better developer experience",
          details: [
            'better file structure, co-locate related files',
            'reduce average CI time by running only affected apps and libs',
          ],
        },
        {
          title: 'Mentoring new team members',
          details: ["help with team's projects onboarding and code reviewing"],
        },
      ],
      techStack: [
        'React',
        'Typescript',
        'redux',
        'Next.js',
        'styled-components',
        'Node.js',
        'Java',
        'GraphQL',
        'MySQL',
        'storybook',
        'jest/testing-library/cypress',
        'docker',
        'k8s',
        'aws',
        'nx',
        'webpack',
        'babel',
        'gulp',
        'jenkins',
        'github actions',
        'sentry',
        'kibana',
      ],
    },
    {
      company: 'Yahoo',
      place: 'Taiwan',
      job: 'Frontend engineer',
      duration: '2019.10 - 2021.10',
      whatIDo: [
        {
          title:
            'Revamp and maintain Yahoo Taiwan Finance website (from php to React with server-side rendering), including desktop and mobile web version',
        },
        {
          title:
            'Develop and maintain WebView for Yahoo Taiwan and Hong-Kong membership loyalty program',
        },
        {
          title:
            'Develop and maintain biz-connect systems for internal users and external collaborators',
        },
        {
          title:
            'Optimize loading performance by chunks splitting, modern browsers build and tree-shaking',
          details: ['reduce <strong>30%</strong> of gzipped JS size'],
        },
        {
          title:
            'Write unit/integration/E2E test and enhance E2E testing scripts to make it more stable',
        },
      ],
      techStack: [
        'React',
        'redux',
        'Node.js',
        'fluxible',
        'Chart.js',
        'docker',
        'jest/mocha/protractor',
        'atomicCSS',
        'styled-components',
        'webpack',
        'babel',
        'grunt',
        'Screwdriver',
      ],
    },
    {
      company: '17 Media',
      job: 'Frontend engineer',
      place: 'Taiwan',
      duration: '2018.08 - 2019.07',
      whatIDo: [
        {
          title:
            'Develop about 50 campaign WebViews (include 4 big-scale campaign pages), from frontend UI rendering to backend data processing and API implementation',
        },
        {
          title: "Refactor and improve team's dashboard with UI framework",
        },
        {
          title:
            'Optimize leaderboard component in campaign editor with partial rendering and data lazy loading',
        },
      ],
      techStack: [
        'React',
        'Typescript',
        'styled-component',
        'react-router',
        'ant-design',
        'Node.js',
        'SQL',
        'mongoDB',
      ],
    },
  ],
  // projects
  // projectTitle: "Projects",
  // projects: [
  //   {
  //     name: "Ecoco's member management system",
  //     descriptions: [
  //       "Develop authority management and change-log pages",
  //       "Add shared components into storybook",
  //       "Work with three engineers and one designer",
  //     ],
  //     techStack: [
  //       "Next.js",
  //       "Typescript",
  //       "emotion",
  //       "apollo-client",
  //       "storybook",
  //     ],
  //   },
  //   {
  //     name: "OpenHCI'2017 official website",
  //     demoLink: "http://www.openhci.com/2017/index.html",
  //     descriptions: [
  //       "Develop static website with some DOM animations",
  //       "Work with two engineers",
  //     ],
  //     techStack: ["GSAP", "scrollMagic"],
  //   },
  // ],
  // educations
  educationTitle: 'Education',
  educations: [
    {
      school: 'National Chiao Tung University',
      major: 'Computer Science',
      degree: 'Master of Engineering',
      duration: '2016.09 - 2018.07',
      lab: '@Human-Computer Interaction lab',
    },
    {
      school: 'National Chung Hsing University',
      major: 'Computer Science',
      degree: 'Bachelor of Engineering',
      duration: '2012.09 - 2016.06',
    },
  ],
};
