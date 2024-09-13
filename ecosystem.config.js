module.exports = {
  apps: [
    {
      name: "tulbox",
      script: "npm",
      args: "start",
      env: {
        HOST: "172.26.15.69",
        PORT: 3008,
        NODE_ENV: "production",
      },
    },
  ],
};
