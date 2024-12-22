import { afterEach } from "vitest";
import { cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";

// Run a clean up after each test case
afterEach(() => {
  cleanup();
});
