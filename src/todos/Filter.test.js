import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Filter from "./Filter";

describe("[Component : Filter]", () => {
  const onClick = jest.fn();
  it("should show all filters", () => {
    render(<Filter onClick={onClick} />);
    expect(
      screen.getByRole("button", {
        name: "All"
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Completed" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Incomplete" })
    ).toBeInTheDocument();
  });

  it("should call the callback when certain filter is clicked", () => {
    render(<Filter onClick={onClick} />);
    const allBtn = screen.getByText("All");
    userEvent.click(allBtn);
    expect(onClick).toHaveBeenCalled();
  });
});
