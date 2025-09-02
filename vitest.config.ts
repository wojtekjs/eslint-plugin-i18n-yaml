import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    include: ["tests/**/*.{test,spec}.ts"],
    environment: "node",
    globals: true, // allow usage of test and expect everywhere without explicit imports
  },
});
