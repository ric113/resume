module.exports = {
  lang: 'tw',
  // profile
  name: '謝禎原',
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
  skillTitle: '技能',
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
        'CI/CD'
      ]
    }
  ],
  // experiences
  experienceTitle: '經歷',
  experiences: [
    {
      company: 'Verizon media - Yahoo',
      job: 'Frontend engineer',
      duration: '2019.10 - now',
      whatIDo: [
        '主要參與台灣股市、台灣運動以及會員中心好朋友計畫 web app. 需求開發'
        // '參與股市 web app 的改版，依需求開發新的元件、串接 API 並撰寫測試',
        // 'migrate 共用的 services，降低維護時所需的成本',
        // 重構舊有的共用模組，同時支援新的 feature 且能向後相容,
        // '開發 Member Get Member 活動頁面'
      ],
      techStack: ['React', 'Typescript', 'SSR', 'flux', 'atomicCSS', 'nodejs', 'jest']
    },
    {
      company: '17 Media',
      job: 'Frontend engineer',
      duration: '2018.08 - 2019.07',
      whatIDo: [
        '開發活動頁面，包括前端頁面呈現，以及後端資料處理與活動 API 實作，一共開發了約 50 個活動頁，其中包含了 4 個大型活動',
        '協助重構組內 dashboard，引入 UI framework，避免重複造輪子',
        '參與製作活動編輯器，負責榜單元件，透過只渲染可視範圍的資訊以及資料分批載入來優化上萬筆資料的榜單'
      ],
      techStack: ['React', 'Typescript', 'styled-component', 'react-router', 'antd', 'nodejs', 'SQL', 'mongoDB']
    },
    {
      company: 'OpenHCI 工作坊',
      job: 'Web service',
      duration: '2017.03 - 2017.07',
      whatIDo: [
        '負責官方網頁的製作'
      ],
      techStack: ['GSAP', 'scrollMagic']
    }
  ],
  // educations
  educationTitle: '學歷',
  educations: [
    {
      school: '國立交通大學',
      major: '資訊工程所',
      degree: '碩士',
      duration: '2016.09 - 2018.07',
      lab: '人機互動實驗室',
      advisor: '指導教授 詹力韋教授'
    },
    {
      school: '國立中興大學',
      major: '資訊科學與工程系',
      degree: '學士',
      duration: '2012.09 - 2016.06',
    }
  ]
}