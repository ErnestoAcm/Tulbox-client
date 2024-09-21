require("dotenv").config();

module.exports = {
  apps: [
    {
      name: "tulbox",
      script: "src/App.js",
      env: {
        PORT: process.env.PORT || 3009,
        NODE_ENV: "production",
      },
    },
  ],
};
