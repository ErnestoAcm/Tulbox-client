module.exports = {
  apps: [
    {
      name: "tulbox",
      script: "serve",
      args: ["-s", "build", "-l", "3009"],
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
