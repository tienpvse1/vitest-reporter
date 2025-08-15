/// <reference types="vitest" />
import { defineConfig } from "vite";

export default defineConfig({
  test: {
    globals: true,
    environment: "jsdom",
    include: ["src/**/*.{test,spec}.{ts,tsx}"],
    reporters: [
      [
        "junit",
        {
          outputFile: "reports/test-results.xml",
          suiteName: "Vitest Tests",
          classNameTemplate: "{classname}",
          properties: {
            browser: "chrome",
            os: "linux",
          },
        },
      ],
    ],
  },
});
