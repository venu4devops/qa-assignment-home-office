module.exports = {
  default: {
    requireModule: ["ts-node/register"],
    require: [
      "src/hooks/*.ts",
      "src/steps/*.ts"
    ],
    paths: ["features/*.feature"],
    format: [
      "progress",
      "json:reports/cucumber-report.json"
    ]
  }
};