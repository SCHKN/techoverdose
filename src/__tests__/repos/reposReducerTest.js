import repos from "../../redux/repos/reposReducer";

jest.mock('../../index.js');

describe("repo reducer", () => {
  it("should return the initial state", () => {
    expect(repos(undefined, {})).toEqual({
      items: [],
      fetching: false
    });
  });
});
