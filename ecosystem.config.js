module.exports = {
  apps: [
    {
      name: "tulbox",
      script: "npm",
      args: "start",
      env: {
        HOST: "172.26.13.247",
        PORT: 3009,
        NODE_ENV: "production",
      },
    },
  ],
};
