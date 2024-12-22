import { render, screen } from "@testing-library/react";
import TypeWriterHeader from "@/components/TypeWriterHeader";
import "@testing-library/jest-dom";

describe("TypeWriterHeader", () => {
  it("renders the text prop correctly", () => {
    const testText = "Hello World";
    render(<TypeWriterHeader text={testText} />);

    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(testText);
  });

  it("applies correct color theme styles", () => {
    const testText = "Test";
    render(<TypeWriterHeader text={testText} />);

    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toHaveClass("border-black dark:border-white");
  });

  it("applies correct animation styles and custom duration", () => {
    const testText = "Test";
    const customDuration = 2.5;
    render(
      <TypeWriterHeader text={testText} typingDuration={customDuration} />
    );

    const heading = screen.getByRole("heading", { level: 1 });

    // Check animation class
    expect(heading).toHaveClass("animate-typewriter");

    // Check CSS custom properties using getAttribute
    expect(heading.style.getPropertyValue("--character-count")).toBe(
      String(testText.length)
    );
    expect(heading.style.getPropertyValue("--typing-duration")).toBe(
      `${customDuration}s`
    );
  });
});
