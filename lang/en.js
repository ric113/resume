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
      link: 'https://www.linkedin.com/in/ricky-hsieh-992473139/'
    }, 
    {
      // gmail
      iconClass: 'far fa-envelope',
      text: 'ric1134991@gmail.com',
      link: 'mailto:ric1134991@gmail.com'
    },
    {
      // github
      iconClass: 'fab fa-github-square',
      text: 'ric113',
      link: 'https://github.com/ric113'
    }
  ],
  // skills
  skillTitle: 'Skills',
  skills: [
    {
      category: 'Frontend',
      entries: [
        'Javascript(ES5+)',
        'Typescript',
        'React',
        'redux',
        'HTML/CSS'
      ]
    },
    {
      category: 'Backend',
      entries: [
        'nodejs',
        'SQL',
        'mongoDB'
      ]
    },
    {
      category: 'Others',
      entries: [
        'git',
        'unix-like OS',
        'jest',
        'docker',
        'CI/CD (CircleCI)'
      ]
    }
  ],
  // experiences
  experienceTitle: 'Experiences',
  experiences: [
    {
      company: 'Verizon media - Yahoo',
      job: 'Frontend engineer',
      duration: '2019.10 - now',
      whatIDo: [
        'Participation in developing Taiwan\'s stock, sports pages and loyalty program of membership'
        // 'develop components, api concatenation and writing unit test for new stock app',
        // 'migrate shared services, in order to reduce cost of maintenance',
        // 'develop Member Get Member campaign page'
      ],
      techStack: ['React', 'Typescript', 'SSR', 'flux', 'atomicCSS', 'nodejs', 'jest']
    },
    {
      company: '17 Media',
      job: 'Frontend engineer',
      duration: '2018.08 - 2019.07',
      whatIDo: [
        'develop about 50 campaign pages (include 4 big-scale campaign pages), including UI rendering in frontend, data processing and API implementation in backend',
        'refactor our team\'s dashboard with UI framework, avoid reinventing the wheel',
        'optimize leaderboard component in campaign editor with partial rendering and data lazy loading'
      ],
      techStack: ['React', 'Typescript', 'styled-component', 'react-router', 'antd', 'nodejs', 'SQL', 'mongoDB']
    },
    {
      company: 'OpenHCI workshop',
      job: 'Web service',
      duration: '2017.03 - 2017.07',
      whatIDo: [
        'develop official website'
      ],
      techStack: ['GSAP', 'scrollMagic']
    }
  ],
  // educations
  educationTitle: 'Education',
  educations: [
    {
      school: 'National Chiao Tung University',
      major: 'Computer Science',
      degree: 'Master of Engineering',
      duration: '2016.09 - 2018.07',
      lab: 'Human-Computer Interaction lab',
      advisor: 'Advisor: Dr. Liwei Chan'
    },
    {
      school: 'National Chung Hsing University',
      major: 'Computer Science',
      degree: 'Bachelor of Engineering',
      duration: '2012.09 - 2016.06',
    }
  ]
}