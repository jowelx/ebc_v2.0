import { vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Button from "./index";

describe("<Button />", () => {
  // Test case 1: Test rendering of button with default props
  it("renders button with default props", () => {
    render(<Button>Click me</Button>);
    const button = screen.getByText("Click me");
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute("type", "button");
    expect(button).toHaveClass("btn-success");
  });

  // Test case 2: Test rendering of button with custom props
  it("renders button with custom props", () => {
    const onClick = vi.fn();
    render(
      <Button onClick={onClick} type="submit" className="btn-primary">
        Submit
      </Button>
    );
    const button = screen.getByText("Submit");
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute("type", "submit");
    expect(button).toHaveClass("btn-primary");
    fireEvent.click(button);
    expect(onClick).toHaveBeenCalled();
  });
});
