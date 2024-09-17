module.exports = {
  apps: [
    {
      name: "tulbox",
      script: "npm",
      args: "start",
      env: {
        HOST: "172.26.12.74",
        PORT: 3009,
        NODE_ENV: "production",
      },
    },
  ],
};
