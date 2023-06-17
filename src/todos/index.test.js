import { render, screen } from "@testing-library/react";
import Todos from ".";
import { fetchTodos } from "../api/utils";

const todosData = [
  {
    id: 1,
    label: "Todo1",
    completed: false
  },
  {
    id: 2,
    label: "Todo2",
    completed: false
  }
];

jest.mock("../api/utils", {
  fetchTodos: jest.fn().mockReturnValue(todosData)
});

describe("[Component : Todos]", () => {
  it("should render all todos when api resolves correctly", () => {
    render(<Todos />);
    expect(screen.getByText("Todo1")).toBeInTheDocument();
    expect(screen.getByText("Todo2")).toBeInTheDocument();
  });

  it("should render No todos text if no todos exist", () => {
    render(<Todos todos={[]} />);
    expect(screen.queryByText("Todo1")).not.toBeInTheDocument();
    expect(screen.getByText("No Todos")).toBeInTheDocument();
  });
});
