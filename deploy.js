const ghpages = require("gh-pages");
ghpages.publish(
  "dist",
  {
    remote: "origin"
  },
  function(err) {
    console.log(err);
  }
);