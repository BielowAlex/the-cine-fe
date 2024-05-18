import { render, screen } from "@testing-library/react";
import { Button } from "@/components";

describe(" Button component", () => {
  it("Test children props", () => {
    render(
      <Button>
        <h2 data-testid="title">test</h2>
      </Button>
    );

    const title = screen.getByTestId("title");
    expect(title).toBeInTheDocument();
  });
  it("Test is Button render link-type", () => {
    render(
      <Button href="test">
        <h2 data-testid="title">test</h2>
      </Button>
    );

    const LinkButton = screen.getByRole("link");

    expect(LinkButton.tagName).toBe("A");
  });

  it("Test Button className", () => {
    render(<Button className="test-class">Class Name Test</Button>);

    const ButtonElement = screen.getByRole("button");

    expect(ButtonElement).toHaveClass("test-class");
  });
});
