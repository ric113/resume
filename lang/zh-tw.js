module.exports = {
  lang: "tw",
  // profile
  name: "謝禎原",
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
  skillTitle: "技能",
  skills: [
    {
      category: "Frontend",
      entries: [
        "Javascript(ES5+)",
        "Typescript",
        "React",
        "redux",
        "GraphQL(apollo-client)",
        "HTML/CSS",
      ],
    },
    {
      category: "Backend",
      entries: ["Node.js", "SQL", "mongoDB"],
    },
    {
      category: "Others",
      entries: ["git", "unix-like OS", "jest", "docker", "CI/CD"],
    },
  ],
  // experiences
  experienceTitle: "經歷",
  experiences: [
    {
      company: "Yahoo (Verizon Media)",
      job: "前端工程師",
      duration: "2019.10 - now",
      whatIDo: [
        "改版 Yahoo 台灣股市頁 (從 php 到 server-side-rendering React)，包含了電腦與手機版",
        "開發並維護 Yahoo 台灣/香港會員中心好朋友計畫 WebView",
        "開發並維護 biz-connect 系統供內部與外部人員使用",
        "透過 chunks splitting、modern browsers build 以及 tree-shaking 機制來優化網頁載入速度",
        "撰寫單元/整合/E2E 測試，並優化 E2E 測試，以提升測試穩定度",
        "撰寫 ATS (Apache Traffic Server) 規則來處理路由",
      ],
      techStack: [
        "React",
        "redux",
        "Node.js",
        "fluxible",
        "Chart.js",
        "ATS",
        "docker",
        "jest/mocha/protractor",
        "ant-design",
        "atomicCSS",
        "styled-components",
        "webpack",
        "babel",
        "grunt",
        "Lua",
        "Screwdriver"
      ],
    },
    {
      company: "17 Media",
      job: "前端工程師",
      duration: "2018.08 - 2019.07",
      whatIDo: [
        "開發活動頁 (WebViews)，包括前端頁面呈現，以及後端資料處理與活動 API 實作，一共開發了約 50 個活動頁，其中包含了 4 個大型活動",
        "協助重構組內 dashboard，引入 UI framework，避免重複造輪子",
        "參與製作活動編輯器，負責榜單元件，透過只渲染可視範圍的資訊以及資料分批載入來優化上萬筆資料的榜單",
      ],
      techStack: [
        "React",
        "Typescript",
        "styled-component",
        "react-router",
        "antd",
        "Node.js",
        "SQL",
        "mongoDB",
      ],
    },
  ],
  // projects
  projectTitle: "專案",
  projects: [
    {
      name: "Ecoco's 會員管理系統",
      descriptions: [
        "開發權限管理與修改記錄頁面",
        "透過 storybook 管理共用元件",
        "與三位工程師和一位設計師合作",
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
      name: "OpenHCI'2017 官方網站",
      demoLink: "http://www.openhci.com/2017/index.html",
      descriptions: [
        "開發靜態頁面，其中包含了一些 DOM 動畫",
        "與兩位工程師合作",
      ],
      techStack: ["GSAP", "scrollMagic"],
    },
  ],
  // educations
  educationTitle: "學歷",
  educations: [
    {
      school: "國立交通大學",
      major: "資訊工程所",
      degree: "碩士",
      duration: "2016.09 - 2018.07",
      lab: "@人機互動實驗室",
    },
    {
      school: "國立中興大學",
      major: "資訊科學與工程系",
      degree: "學士",
      duration: "2012.09 - 2016.06",
    },
  ],
};
