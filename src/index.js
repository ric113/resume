import "./style.sass";

(function () {
  // init. ga
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag("js", new Date());
  gtag("config", "UA-158624586-1");

  // init. mode switch
  const mode = localStorage.getItem('rhResumeMode');
  const body = document.querySelector("body");
  const modeSwitch = document.querySelector(".switch");
  let isDarkMode;

  if (mode === 'dark') {
    isDarkMode = true;
    modeSwitch.setAttribute("style", "justify-content: flex-end");
    body.setAttribute("data-theme", "dark");
  } else {
    isDarkMode = false;
    body.setAttribute("data-theme", "light");
  }

  modeSwitch.addEventListener("click", function (e) {
    isDarkMode = !isDarkMode;

    if (isDarkMode) {
      body.setAttribute("data-theme", "dark");
      modeSwitch.setAttribute("style", "justify-content: flex-end");
      localStorage.setItem('rhResumeMode', 'dark');
    } else {
      body.setAttribute("data-theme", "light");
      modeSwitch.setAttribute("style", "");
      localStorage.setItem('rhResumeMode', 'light');
    }
  });
})();
