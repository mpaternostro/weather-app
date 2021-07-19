module.exports = {
  transform: {
    "\\.[jt]sx?$": "babel-jest",
  },
  verbose: true,
  setupFilesAfterEnv: ["./src/jest.setup.ts"],
};
