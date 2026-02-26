export type Direction = "NORTH" | "SOUTH" | "EAST" | "WEST";

export type RobotState =
  | {
      x: number;
      y: number;
      facing: Direction;
    }
  | null;

