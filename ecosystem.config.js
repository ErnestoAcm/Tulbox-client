module.exports = {
  apps: [
    {
      name: "tulbox",
      script: "npm",
      args: "start",
      env: {
        PORT: 3009,
        NODE_ENV: "production",
      },
    },
  ],
};
