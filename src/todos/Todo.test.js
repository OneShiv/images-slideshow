import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Todo from "./Todo";
import "@testing-library/jest-dom";

describe("[Component : Todo]", () => {
  it("should show a checkbox and label of todo passed", () => {
    render(<Todo id="1" todo="Test Todo" completed={false} />);
    expect(screen.getByText("Test Todo")).toBeInTheDocument();
    expect(screen.getByRole("checkbox")).toBeInTheDocument();
  });

  it("should shoe checkbox checked for a completed todo", () => {
    render(<Todo id="1" todo="Test Todo" completed />);
    let checkBoxEl = screen.getByRole("checkbox");
    expect(checkBoxEl.checked).toBe(true);
  });

  it("should call nonClick when checkBox is clicked", () => {
    const onCheck = jest.fn();
    render(
      <Todo id="1" todo="Test Todo" completed={false} onCheck={onCheck} />
    );
    const checkBoxEl = screen.getByLabelText("Test Todo");
    expect(checkBoxEl).toBeInTheDocument();
    fireEvent.click(checkBoxEl);
    expect(onCheck).toHaveBeenCalledTimes(1);
    expect(onCheck).toHaveBeenCalledWith(true, "1");
  });
});
