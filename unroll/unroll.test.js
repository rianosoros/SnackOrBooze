const unroll = require("./unroll");

describe("#unroll", () => {
  it("is a function", () => {
    expect(typeof unroll).toEqual("function");
  });

  it("unrolls a square array with numbers correctly", () => {
    const square = [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [13, 14, 15, 16]
    ];
    const expectedOutput = [1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10];
    expect(unroll(square)).toEqual(expectedOutput);
  });

  it("unrolls a square array with characters correctly", () => {
    const smallerSquare = [
      ["a", "b", "c"],
      ["d", "e", "f"],
      ["g", "h", "i"]
    ];
    const expectedOutput = ["a", "b", "c", "f", "i", "h", "g", "d", "e"];
    expect(unroll(smallerSquare)).toEqual(expectedOutput);
  });

  it("unrolls an empty square array correctly", () => {
    const emptySquare = [[]];
    expect(unroll(emptySquare)).toEqual([]);
  });

  it("unrolls a square array with a single element correctly", () => {
    const singleElementSquare = [[42]];
    expect(unroll(singleElementSquare)).toEqual([42]);
  });

  it("unrolls an irregularly shaped square array correctly", () => {
    const irregularSquare = [
      [1, 2],
      [3, 4],
      [5, 6]
    ];
    const expectedOutput = [1, 2, 4, 6, 5, 3];
    expect(unroll(irregularSquare)).toEqual(expectedOutput);
  });
});
