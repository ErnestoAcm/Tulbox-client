module.exports = {
  apps: [
    {
      name: "tulbox",
      script: "npm",
      args: "start",
      env: {
        PORT: 3008,
        NODE_ENV: "production",
      },
    },
  ],
};
