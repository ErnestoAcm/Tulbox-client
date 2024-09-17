module.exports = {
  apps: [
    {
      name: "tulbox",
      script: "npm",
      args: "start",
      env: {
        HOST: "172.26.12.74",
        PORT: 3008,
        NODE_ENV: "production",
      },
    },
  ],
};
