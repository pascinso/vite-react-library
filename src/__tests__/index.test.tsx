import { render } from "@testing-library/react";
import Counter from "..";

describe("Counter", () => {
  it("should render without crashing", () => {
    const screen = render(<Counter />);
    expect(screen.getByRole("heading")).toBeTruthy();
  });
});
