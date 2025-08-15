/// <reference types="vitest" />
import { defineConfig } from "vite";

export default defineConfig({
  test: {
    globals: true,
    environment: "jsdom",
    silent: 'passed-only',
    include: ["src/**/*.{test,spec}.{ts,tsx}"],
    reporters: [
      "default",
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
