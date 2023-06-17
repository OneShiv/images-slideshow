import { instance } from "./index";
import { fetchTodos } from "./utils";

const mockGet = jest.fn().mockResolvedValue({
  data: []
});

instance.get = mockGet;

describe("[Utils]", () => {
  it("fetchTodos should call axios instance with certain url for todos", () => {
    const response = fetchTodos();
    expect(mockGet).toHaveBeenCalled();
  });
});
