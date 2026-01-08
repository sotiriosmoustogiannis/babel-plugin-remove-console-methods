module.exports = {
  plugins: [
    ["./src/index.js", { remove: ["log", "info", "debug"] }]
  ]
};
