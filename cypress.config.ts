import { defineConfig } from "cypress";
const allureWriter = require("@shelex/cypress-allure-plugin/writer");

export default defineConfig({
  e2e: {
    baseUrl: "https://www.saucedemo.com/",
    experimentalRunAllSpecs: true,

    setupNodeEvents(on, config) {
      allureWriter(on, config);
      return config;
    },
    env: {
      allure: true,
      allureSkipAutomaticScreenshots: false,
    },
  },
});
