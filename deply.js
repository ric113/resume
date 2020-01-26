const ghpages = require("gh-pages");
ghpages.publish(
  "public",
  {
    remote: "origin"
  },
  function(err) {
    console.log(err);
  }
);