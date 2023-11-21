import { render, screen } from "@testing-library/react";
import Span from "./index";

describe("<Span />", () => {
  const role = "sampleSpan";
  let children;
  let className;

  // Test case 1: Create a span element with children and class name
  test("Create a span element with children and class name", () => {
    // Arrange
    children = "Hello World";
    className = "text-primary";

    // Act
    render(<Span className={className}>{children}</Span>);

    // Assert
    expect(screen.getByText(children)).toBeInTheDocument();
    expect(screen.getByText(children)).toHaveClass(className);
  });

  // Test case 2: Create a span element with empty children and class name
  test("Create a span element with empty children and class name", () => {
    // Arrange
    children = "";
    className = "navbar-toggler-icon";

    // Act
    render(<Span className={className}>{children}</Span>);

    // Assert
    expect(screen.getByRole(role)).toBeInTheDocument();
    expect(screen.getByRole(role)).toHaveClass(className);
  });

  // Test case 3: Create a span element with no children and class name
  test("Create a span element with no children and class name", () => {
    // Arrange
    children = undefined;
    className = "navbar-toggler-icon";

    // Act
    render(<Span className={className}>{children}</Span>);
    screen.debug();

    // Assert
    expect(screen.getByRole(role)).toBeInTheDocument();
    expect(screen.getByRole(role)).toHaveClass(className);
  });

  // Test case 4: Create a span element with no children and no class name
  test("Create a span element with no children and no class name", () => {
    // Arrange
    children = undefined;
    className = undefined;

    // Act
    render(<Span className={className}>{children}</Span>);
    screen.debug();

    // Assert
    expect(screen.getByRole(role)).toBeInTheDocument();
    expect(screen.getByRole(role).tagName).toBe("SPAN");
  });
});
