import {
  place,
  move,
  rotateLeft,
  rotateRight,
  report,
  isValidPosition,
} from "../utils";

describe("isValidPosition", () => {
  test("WHEN xy position is within 0-4 THEN it should return true", () => {
    expect(isValidPosition(0, 0)).toBe(true);
    expect(isValidPosition(4, 4)).toBe(true);
  });

  test("WHEN xy position is out 0-4 THEN it should return false", () => {
    expect(isValidPosition(5, 0)).toBe(false);
    expect(isValidPosition(-1, 0)).toBe(false);
    expect(isValidPosition(0, 5)).toBe(false);
  });
});

describe("PLACE function", () => {
  test("WHEN placing robot in valid position THEN state should set", () => {
    expect(place(1, 2, "NORTH")).toEqual({ x: 1, y: 2, facing: "NORTH" });
  });

  test("WHEN placing robot in invalid position THEN state should null ", () => {
    expect(place(5, 5, "NORTH")).toBeNull();
  });
});

describe("MOVE function", () => {
  test("WHEN moving robot in any direction within boundary THEN position updates", () => {
    expect(move({ x: 0, y: 0, facing: "NORTH" })).toEqual({
      x: 0,
      y: 1,
      facing: "NORTH",
    });
    expect(move({ x: 0, y: 1, facing: "SOUTH" })).toEqual({
      x: 0,
      y: 0,
      facing: "SOUTH",
    });
    expect(move({ x: 0, y: 0, facing: "EAST" })).toEqual({
      x: 1,
      y: 0,
      facing: "EAST",
    });
    expect(move({ x: 1, y: 0, facing: "WEST" })).toEqual({
      x: 0,
      y: 0,
      facing: "WEST",
    });
  });

  test("WHEN moving robot at boundary THEN position does not change", () => {
    expect(move({ x: 0, y: 4, facing: "NORTH" })).toEqual({
      x: 0,
      y: 4,
      facing: "NORTH",
    });
    expect(move({ x: 0, y: 0, facing: "SOUTH" })).toEqual({
      x: 0,
      y: 0,
      facing: "SOUTH",
    });
    expect(move({ x: 4, y: 0, facing: "EAST" })).toEqual({
      x: 4,
      y: 0,
      facing: "EAST",
    });
    expect(move({ x: 0, y: 0, facing: "WEST" })).toEqual({
      x: 0,
      y: 0,
      facing: "WEST",
    });
  });

  test("WHEN move called with null state THEN return null", () => {
    expect(move(null)).toBeNull();
  });
});

describe("Rotate functions", () => {
  test("WHEN rotateLeft THEN facing updates correctly", () => {
    expect(rotateLeft({ x: 0, y: 0, facing: "NORTH" })?.facing).toBe("WEST");
  });

  test("WHEN rotateRight THEN facing updates correctly", () => {
    expect(rotateRight({ x: 0, y: 0, facing: "NORTH" })?.facing).toBe("EAST");
  });
});

describe("Report function", () => {
  test("WHEN report called with valid state THEN it returns string", () => {
    expect(report({ x: 2, y: 3, facing: "EAST" })).toBe("2,3,EAST");
  });
});
